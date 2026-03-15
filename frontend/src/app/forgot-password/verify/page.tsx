"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useRef, useEffect, useCallback, Suspense } from "react";
import { authClient } from "@/lib/auth-client";

const OTP_LENGTH = 6;
const RESEND_COOLDOWN = 60;

function VerifyOtpForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") ?? "";

    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [cooldown, setCooldown] = useState(0);

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (cooldown <= 0) return;
        const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
        return () => clearTimeout(timer);
    }, [cooldown]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = useCallback(
        (index: number, value: string) => {
            if (!/^\d*$/.test(value)) return;

            const next = [...otp];
            next[index] = value.slice(-1);
            setOtp(next);
            setError("");

            if (value && index < OTP_LENGTH - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        },
        [otp],
    );

    const handleKeyDown = useCallback(
        (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Backspace" && !otp[index] && index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        },
        [otp],
    );

    const handlePaste = useCallback(
        (e: React.ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault();
            const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
            if (!pasted) return;

            const next = [...otp];
            for (let i = 0; i < pasted.length; i++) {
                next[i] = pasted[i];
            }
            setOtp(next);
            setError("");

            const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1);
            inputRefs.current[focusIndex]?.focus();
        },
        [otp],
    );

    const otpValue = otp.join("");
    const isComplete = otpValue.length === OTP_LENGTH;

    const handleContinue = async () => {
        if (!isComplete || !email) return;
        setLoading(true);
        setError("");

        try {
            const { error: checkError } = await authClient.emailOtp.checkVerificationOtp({
                email,
                otp: otpValue,
                type: "forget-password",
            });

            if (checkError) {
                setError(checkError.message ?? "Invalid code. Please try again.");
                setLoading(false);
                return;
            }

            sessionStorage.setItem("bp_reset_email", email);
            sessionStorage.setItem("bp_reset_otp", otpValue);
            router.push("/reset-password");
        } catch {
            setError("Something went wrong. Please try again.");
            setLoading(false);
        }
    };

    const handleResend = async () => {
        if (cooldown > 0 || !email) return;
        setCooldown(RESEND_COOLDOWN);
        setError("");

        const { error: resendError } = await authClient.emailOtp.sendVerificationOtp({
            email,
            type: "forget-password",
        });

        if (resendError) {
            setError(resendError.message ?? "Failed to resend code. Please try again.");
            setCooldown(0);
        }
    };

    if (!email) {
        return (
            <div className="min-h-screen w-full bg-white flex items-center justify-center">
                <div className="text-center flex flex-col gap-4">
                    <p className="font-['Inter'] text-[16px] text-[#525866]">No email address provided.</p>
                    <Link href="/forgot-password" className="font-['Inter'] font-medium text-[16px] text-[#2446a8] hover:text-[#1d3a8e]">
                        Go back
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-white flex items-center justify-center p-6 sm:p-[100px]">
            <div className="w-full max-w-[522px] border border-[#eaeaeb] rounded-[32px] flex flex-col gap-[32px] items-center justify-center px-[16px] py-[20px] sm:px-[24px] sm:py-[32px]">

                {/* Header: Icon + Title + Subtitle */}
                <div className="flex flex-col gap-[20px] items-center w-full">
                    {/* Mail Icon */}
                    <div className="w-[50px] h-[50px] bg-[#e6fbfe] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#0e9aa7">
                            <path d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.639 1.966 6.86A3.25 3.25 0 0 1 5.25 4Z" />
                        </svg>
                    </div>

                    {/* Title + Subtitle */}
                    <div className="flex flex-col gap-[8px] items-center w-full">
                        <h1 className="font-['Inter'] font-bold text-[28px] leading-[44.8px] tracking-[-0.28px] text-[#122354] text-center">
                            Check your email
                        </h1>
                        <p className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#767d92] text-center max-w-[371px]">
                            We sent a 6-digit code to <span className="text-[#09122a] font-semibold">{email}</span>
                        </p>
                    </div>
                </div>

                {/* OTP Input + Actions */}
                <div className="flex flex-col gap-[32px] w-full">
                    <div className="flex flex-col gap-[24px] w-full">
                        {/* OTP Boxes */}
                        <div className="flex gap-[12px] justify-center w-full">
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    ref={(el) => { inputRefs.current[i] = el; }}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(i, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(i, e)}
                                    onPaste={i === 0 ? handlePaste : undefined}
                                    className={`w-[56px] h-[64px] text-center border rounded-[8px] font-['Inter'] font-semibold text-[24px] text-[#09122a] focus:outline-none transition-colors ${
                                        digit
                                            ? "border-[#2446a8] bg-[#f6f8fc]"
                                            : "border-[#eaeaeb] bg-transparent"
                                    } focus:border-[#2446a8]`}
                                    aria-label={`Digit ${i + 1}`}
                                />
                            ))}
                        </div>

                        {/* Resend link */}
                        <div className="flex items-center justify-center gap-[4px]">
                            <span className="font-['Inter'] font-medium text-[14px] text-[#767d92]">
                                Didn&apos;t receive the code?
                            </span>
                            <button
                                type="button"
                                onClick={handleResend}
                                disabled={cooldown > 0}
                                className={`font-['Inter'] font-medium text-[14px] transition-colors ${
                                    cooldown > 0
                                        ? "text-[#adb1be] cursor-not-allowed"
                                        : "text-[#2446a8] hover:text-[#1d3a8e] cursor-pointer"
                                }`}
                            >
                                {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend code"}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <p className="font-['Inter'] text-[14px] text-[#d21212] text-center">
                            {error}
                        </p>
                    )}

                    {/* Continue Button + Back Link */}
                    <div className="flex flex-col gap-[4px] w-full">
                        <button
                            disabled={!isComplete || loading}
                            onClick={handleContinue}
                            className={`w-full h-[56px] flex items-center justify-center rounded-[8px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] transition-colors ${
                                isComplete && !loading
                                    ? "bg-[#2446a8] hover:bg-[#1d3a8e] text-white cursor-pointer"
                                    : "bg-[#e4e5e9] text-[#adb1be] cursor-not-allowed"
                            }`}
                        >
                            {loading ? "Verifying..." : "Continue"}
                        </button>

                        {/* Back to Sign In */}
                        <Link
                            href="/signin"
                            className="w-full h-[52px] flex items-center justify-center gap-[12px] rounded-[12px] px-[16px] py-[20px] hover:bg-[#f5f6f8] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2446a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#2446a8]">
                                Back to sign In
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default function ForgotPasswordVerify() {
    return (
        <Suspense fallback={
            <div className="min-h-screen w-full bg-white flex items-center justify-center">
                <div className="w-[40px] h-[40px] border-4 border-[#eaeefa] border-t-[#2446a8] rounded-full animate-spin" />
            </div>
        }>
            <VerifyOtpForm />
        </Suspense>
    );
}

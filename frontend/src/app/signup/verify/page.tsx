"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useRef, useEffect, useCallback, Suspense } from "react";
import { authClient } from "@/lib/auth-client";

const imgHeroRight = "/assets/hero/sign-up.png";
const imgLogo = "/assets/Bizbot-logo.png";

const OTP_LENGTH = 6;
const RESEND_COOLDOWN = 60;

function VerifyForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get("email") ?? "";

    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
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

    const handleVerify = async () => {
        if (!isComplete || !email) return;
        setLoading(true);
        setError("");

        const { error: verifyError } = await authClient.emailOtp.verifyEmail({
            email,
            otp: otpValue,
        });

        if (verifyError) {
            setError(verifyError.message ?? "Invalid code. Please try again.");
            setLoading(false);
            return;
        }

        setSuccess(true);
        router.push("/dashboard");
    };

    const handleResend = async () => {
        if (cooldown > 0 || !email) return;
        setCooldown(RESEND_COOLDOWN);
        setError("");

        const { error: resendError } = await authClient.emailOtp.sendVerificationOtp({
            email,
            type: "email-verification",
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
                    <Link href="/signup/email" className="font-['Inter'] font-medium text-[16px] text-[#2446a8] hover:text-[#1d3a8e]">
                        Go back to sign up
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-white flex">
            {/* Left Side – Form Area */}
            <div className="w-full lg:w-1/2 flex flex-col min-h-screen justify-center overflow-y-auto px-6 sm:px-10 lg:px-[95px] py-[40px] lg:py-[60px]">
                <div className="w-full max-w-[521px] mx-auto flex flex-col gap-[40px]">

                    {/* Back Button */}
                    <Link
                        href="/signup/email"
                        className="w-[40px] h-[40px] bg-[#f2f2f2] rounded-[6px] flex items-center justify-center hover:bg-[#e8e8e8] transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0c1727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </Link>

                    {/* Logo + Progress Bar */}
                    <div className="flex flex-col gap-[32px] items-start w-full">
                        <div className="flex gap-[6px] items-center px-[6px]">
                            <div className="w-[22px] h-[22px] relative">
                                <Image src={imgLogo} alt="BizPilot Logo" fill className="object-contain" />
                            </div>
                            <h1 className="font-['Inter'] font-bold text-[24.64px] leading-[39.42px] tracking-[-0.25px] text-[#0a0d14]">
                                BizPilot
                            </h1>
                        </div>
                        {/* Progress Bar – Step 3 */}
                        <div className="flex gap-[8px] items-center w-full">
                            <div className="flex-1 h-[6px] bg-[#2446a8] rounded-full" />
                            <div className="flex-1 h-[6px] bg-[#2446a8] rounded-full" />
                            <div className="flex-1 h-[6px] bg-[#2446a8] rounded-full" />
                            <div className="flex-1 h-[6px] bg-[#eaeefa] rounded-full" />
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col w-full">
                        <h2 className="font-['Inter'] font-semibold text-[36px] leading-[57.6px] tracking-[-0.36px] text-[#122354]">
                            Verify your email
                        </h2>
                        <p className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#767d92]">
                            We sent a 6-digit code to <span className="text-[#09122a] font-semibold">{email}</span>
                        </p>
                    </div>

                    {/* OTP Input */}
                    <div className="flex flex-col gap-[40px] w-full">
                        <div className="flex flex-col gap-[24px] w-full">
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

                        {success && (
                            <p className="font-['Inter'] text-[14px] text-[#22a722] text-center">
                                Email verified! Redirecting...
                            </p>
                        )}

                        {/* Verify Button */}
                        <button
                            disabled={!isComplete || loading || success}
                            onClick={handleVerify}
                            className={`w-full h-[56px] flex items-center justify-center rounded-[8px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] transition-colors ${
                                isComplete && !loading && !success
                                    ? "bg-[#2446a8] hover:bg-[#1d3a8e] text-white cursor-pointer"
                                    : "bg-[#e4e5e9] text-[#adb1be] cursor-not-allowed"
                            }`}
                        >
                            {loading ? "Verifying..." : success ? "Verified!" : "Verify Email"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side – Decorative Panel (Hidden on Mobile) */}
            <div className="hidden lg:flex w-1/2 relative p-[32px] bg-white">
                <div className="relative w-full h-full rounded-[32px] overflow-hidden min-h-[calc(100vh-64px)]">
                    <div
                        className="absolute inset-0 backdrop-blur-[32px]"
                        style={{
                            background:
                                "radial-gradient(131.23% 84.35% at 41.17% 24.4%, #ffffff 0%, #fde2e4 35.71%, #f3e8ff 88.7%)",
                        }}
                    />
                    <div className="absolute inset-0">
                        <Image
                            src={imgHeroRight}
                            alt="Business Professional"
                            fill
                            className="object-cover mix-blend-multiply"
                            priority
                        />
                    </div>
                </div>

                <div className="absolute bottom-[96px] left-[0px] xl:left-[16px] bg-white rounded-[21.6px] p-[21.6px] flex flex-col gap-[7.2px] shadow-[0_8px_10px_0_rgba(0,0,0,0.14)] z-10 w-[369.2px]">
                    <p className="font-semibold tracking-[-0.252px] text-[25.2px] leading-[40.32px] w-[326px]">
                        <span className="font-['Protest_Riot',cursive] text-[#2446a8]">Smart Invoicing - </span>
                        <span className="font-['Inter'] text-[#122354]">Create, Remind &amp; Track with Ease</span>
                    </p>
                    <p className="font-['Inter'] font-medium text-[14.4px] leading-[23.04px] tracking-[-0.45px] text-[#767d92]">
                        BizPilot helps business owners manage, track and simplify their finances
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function VerifyPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen w-full bg-white flex items-center justify-center">
                <div className="w-[40px] h-[40px] border-4 border-[#eaeefa] border-t-[#2446a8] rounded-full animate-spin" />
            </div>
        }>
            <VerifyForm />
        </Suspense>
    );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function ForgotPassword() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const isValid = email.trim().length > 0 && !loading;

    const handleSubmit = async () => {
        if (!email.trim()) return;
        setLoading(true);
        setError("");

        try {
            const { error: sendError } = await authClient.emailOtp.sendVerificationOtp({
                email: email.trim(),
                type: "forget-password",
            });

            if (sendError) {
                setError(sendError.message ?? "Failed to send reset code. Please try again.");
                setLoading(false);
                return;
            }

            router.push(`/forgot-password/verify?email=${encodeURIComponent(email.trim())}`);
        } catch {
            setError("Something went wrong. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-white flex items-center justify-center p-6 sm:p-[100px]">
            <div className="w-full max-w-[522px] border border-[#eaeaeb] rounded-[32px] flex flex-col gap-[32px] items-center justify-center px-[16px] py-[20px] sm:px-[24px] sm:py-[32px]">

                {/* Header: Icon + Title + Subtitle */}
                <div className="flex flex-col gap-[20px] items-center w-full">
                    {/* Key Icon */}
                    <div className="w-[50px] h-[50px] bg-[#e6fbfe] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0e9aa7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
                        </svg>
                    </div>

                    {/* Title + Subtitle */}
                    <div className="flex flex-col gap-[8px] items-center w-full">
                        <h1 className="font-['Inter'] font-bold text-[28px] leading-[44.8px] tracking-[-0.28px] text-[#122354] text-center">
                            Set new password
                        </h1>
                        <p className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#767d92] text-center max-w-[371px]">
                            Your new password must be different from previously used passwords.
                        </p>
                    </div>
                </div>

                {/* Form: Input + Button + Back Link */}
                <div className="flex flex-col gap-[32px] w-full">
                    {/* Email Field */}
                    <div className="flex flex-col gap-[8px] w-full">
                        <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setError(""); }}
                            placeholder="Enter your email address"
                            className="w-full h-[50px] px-[12px] py-[10px] border border-[#eaeaeb] rounded-[8px] bg-transparent font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a] placeholder:text-[#d6d7dc] focus:outline-none focus:border-[#2446a8] transition-colors"
                            required
                        />
                    </div>

                    {error && (
                        <p className="font-['Inter'] text-[14px] text-[#d21212] text-center">
                            {error}
                        </p>
                    )}

                    {/* Continue Button + Back Link */}
                    <div className="flex flex-col gap-[4px] w-full">
                        <button
                            disabled={!isValid}
                            onClick={handleSubmit}
                            className={`w-full h-[56px] flex items-center justify-center rounded-[8px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-center transition-colors ${
                                isValid
                                    ? "bg-[#2446a8] hover:bg-[#1d3a8e] text-white cursor-pointer"
                                    : "bg-[#e4e5e9] text-[#adb1be] cursor-not-allowed"
                            }`}
                        >
                            {loading ? "Sending..." : "Continue"}
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
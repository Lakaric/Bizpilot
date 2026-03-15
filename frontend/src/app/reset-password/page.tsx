"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

export default function ResetPassword() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [resetEmail, setResetEmail] = useState("");
    const [resetOtp, setResetOtp] = useState("");

    useEffect(() => {
        const email = sessionStorage.getItem("bp_reset_email");
        const otp = sessionStorage.getItem("bp_reset_otp");
        if (!email || !otp) {
            router.replace("/forgot-password");
            return;
        }
        setResetEmail(email);
        setResetOtp(otp);
    }, [router]);

    const passwordValid = password.length >= 8;
    const passwordsMatch = password === confirmPassword;
    const canSubmit = passwordValid && passwordsMatch && !loading && resetEmail && resetOtp;

    const handleSubmit = async () => {
        if (!canSubmit) return;

        if (!passwordsMatch) {
            setError("Passwords do not match.");
            return;
        }
        if (!passwordValid) {
            setError("Password must be at least 8 characters.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const { error: resetError } = await authClient.emailOtp.resetPassword({
                email: resetEmail,
                otp: resetOtp,
                password,
            });

            if (resetError) {
                setError(resetError.message ?? "Failed to reset password. Please try again.");
                setLoading(false);
                return;
            }

            sessionStorage.removeItem("bp_reset_email");
            sessionStorage.removeItem("bp_reset_otp");
            router.push("/reset-password/success");
        } catch {
            setError("Something went wrong. Please try again.");
            setLoading(false);
        }
    };

    const EyeOffIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line x1="2" x2="22" y1="2" y2="22" />
        </svg>
    );

    const EyeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );

    if (!resetEmail) {
        return (
            <div className="min-h-screen w-full bg-white flex items-center justify-center">
                <div className="w-[40px] h-[40px] border-4 border-[#eaeefa] border-t-[#2446a8] rounded-full animate-spin" />
            </div>
        );
    }

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
                        <p className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#7d8082] text-center max-w-[371px]">
                            Your new password must be different from previously used passwords.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div className="flex flex-col gap-[40px] w-full">
                    {/* Password Fields */}
                    <div className="flex flex-col gap-[24px] w-full">
                        {/* Password Field */}
                        <div className="flex flex-col gap-[12px] w-full">
                            <div className="flex flex-col gap-[8px] w-full">
                                <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                                    Password
                                </label>
                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value); setError(""); }}
                                        placeholder="Enter Password"
                                        className="w-full h-[50px] px-[12px] py-[10px] pr-[48px] border border-[#eaeaeb] rounded-[8px] bg-transparent font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a] placeholder:text-[#d6d7dc] focus:outline-none focus:border-[#2446a8] transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] text-[#868c98] hover:text-[#09122a] flex items-center justify-center transition-colors"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                                    </button>
                                </div>
                            </div>
                            <p className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#767d92]">
                                Must be at least 8 characters
                            </p>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="flex flex-col gap-[8px] w-full">
                            <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                                Confirm Password
                            </label>
                            <div className="relative w-full">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => { setConfirmPassword(e.target.value); setError(""); }}
                                    placeholder="Enter Password"
                                    className="w-full h-[50px] px-[12px] py-[10px] pr-[48px] border border-[#eaeaeb] rounded-[8px] bg-transparent font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a] placeholder:text-[#d6d7dc] focus:outline-none focus:border-[#2446a8] transition-colors"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] text-[#868c98] hover:text-[#09122a] flex items-center justify-center transition-colors"
                                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                >
                                    {showConfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {error && (
                        <p className="font-['Inter'] text-[14px] text-[#d21212] text-center">
                            {error}
                        </p>
                    )}

                    {/* Reset Button + Back Link */}
                    <div className="flex flex-col gap-[4px] w-full">
                        <button
                            disabled={!canSubmit}
                            onClick={handleSubmit}
                            className={`w-full h-[56px] flex items-center justify-center rounded-[8px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] transition-colors ${
                                canSubmit
                                    ? "bg-[#2446a8] hover:bg-[#1d3a8e] text-white cursor-pointer"
                                    : "bg-[#e4e5e9] text-[#adb1be] cursor-not-allowed"
                            }`}
                        >
                            {loading ? "Resetting..." : "Reset Password"}
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

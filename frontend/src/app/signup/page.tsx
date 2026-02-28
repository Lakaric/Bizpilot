"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const imgWhisk = "/assets/897b7fe84323fda8cfb1a6e5aa1cf87914d90c74.png";
const imgLogo = "http://localhost:3845/assets/6094e745d7b81eb4d7a7cfa889b79d3b51c30f52.svg";
const imgOrLine = "http://localhost:3845/assets/a287914145e3748d5303a0ceffe24033546484ac.svg";
const imgGoogle = "http://localhost:3845/assets/235e6f5b35968d18e20b0088037bca852b2c90f1.svg";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen w-full bg-[#faf9ff] flex">
            {/* Left Full Width / Half Width Container */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center min-h-screen bg-white xl:bg-[#faf9ff]">
                <div className="w-full max-w-[720px] bg-white xl:bg-[#faf9ff] lg:bg-white flex flex-col gap-[60px] items-center p-6 sm:p-10 lg:p-[40px] relative">

                    {/* Header */}
                    <div className="flex flex-col items-center w-full gap-2">
                        <div className="flex gap-[10px] items-center justify-center">
                            <div className="w-[40px] h-[40px] relative">
                                <Image src={imgLogo} alt="BizPilot Logo" fill className="object-contain" />
                            </div>
                            <h1 className="font-['Inter'] font-bold text-[36px] sm:text-[44px] leading-[1.2] tracking-[-0.44px] text-[#0a0d14]">
                                BizPilot
                            </h1>
                        </div>
                        <p className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#0a0d14] text-center max-w-[400px]">
                            BizPilot helps business owners mange, track and simplify their finances
                        </p>
                    </div>

                    {/* Form Area */}
                    <div className="flex flex-col items-center w-full gap-[60px] max-w-[640px]">

                        {/* Inputs and Requirements */}
                        <div className="flex flex-col items-start w-full gap-[32px]">

                            <div className="flex flex-col items-start w-full gap-[24px]">
                                {/* Email Input */}
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full h-[56px] px-[12px] py-[10px] bg-transparent border border-[#ccc] rounded-[8px] font-['Inter'] font-medium text-[16px] text-[#0a0d14] placeholder:text-[#868c98] focus:outline-none focus:border-[#2446a8] transition-colors"
                                />

                                {/* Password Input */}
                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="w-full h-[56px] px-[12px] py-[10px] pr-[48px] bg-transparent border border-[#ccc] rounded-[8px] font-['Inter'] font-medium text-[16px] text-[#0a0d14] placeholder:text-[#868c98] focus:outline-none focus:border-[#2446a8] transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] text-[#868c98] hover:text-[#0a0d14] flex items-center justify-center"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Password Requirements */}
                            <div className="flex flex-col sm:flex-row w-full justify-between gap-4">
                                <div className="flex flex-col flex-1 gap-2">
                                    <div className="flex items-center">
                                        <p className="font-['Inter'] font-medium text-[13px] leading-[1.5] text-[#0a0d14]">
                                            Lowercase characters
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="font-['Inter'] font-medium text-[13px] leading-[1.5] text-[#0a0d14]">
                                            8 characters minimum
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 gap-2">
                                    <div className="flex items-center">
                                        <p className="font-['Inter'] font-medium text-[13px] leading-[1.5] text-[#0a0d14]">
                                            Uppercase characters
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="font-['Inter'] font-medium text-[13px] leading-[1.5] text-[#0a0d14]">
                                            Numbers
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Get Started Button */}
                            <button className="w-full h-[56px] flex items-center justify-center bg-[#2446a8] hover:bg-[#1d3a8e] transition-colors rounded-[6px] text-white font-['Inter'] font-medium text-[16px] tracking-[-0.5px]">
                                Get Started
                            </button>
                        </div>

                        {/* OR and Alternative SignUps */}
                        <div className="flex flex-col items-center w-full gap-[32px] max-w-[560px]">

                            {/* OR Divider */}
                            <div className="flex items-center w-full">
                                <div className="flex-1 h-[20px] relative opacity-30">
                                    <Image src={imgOrLine} alt="" fill className="object-cover" />
                                </div>
                                <div className="px-[10px] w-[90px] flex justify-center">
                                    <span className="font-['Inter'] font-medium text-[16px] tracking-[-0.5px] text-[#666]">
                                        OR
                                    </span>
                                </div>
                                <div className="flex-1 h-[20px] relative opacity-30">
                                    <Image src={imgOrLine} alt="" fill className="object-cover" />
                                </div>
                            </div>

                            {/* Google Button */}
                            <button className="w-full h-[50px] flex items-center justify-center gap-[8px] bg-[#eaeefa] hover:bg-[#dbe4f8] transition-colors rounded-[8px]">
                                <div className="w-[24px] h-[24px] relative">
                                    <Image src={imgGoogle} alt="Google" fill className="object-contain" />
                                </div>
                                <span className="font-['Inter'] font-medium text-[16px] tracking-[-0.5px] text-[#333]">
                                    Sign up with Google
                                </span>
                            </button>

                            {/* Links Area */}
                            <div className="flex flex-col items-center w-full gap-[24px]">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="font-['Inter'] font-medium text-[14px] tracking-[-0.25px] text-[#0a0d14]">
                                        Already have an account?
                                    </span>
                                    <Link href="/signin" className="font-['Inter'] font-normal text-[16px] tracking-[-0.5px] text-[#2e58d1] hover:underline">
                                        Sign in
                                    </Link>
                                </div>

                                <p className="font-['Inter'] text-center text-[#0a0d14] max-w-[480px]">
                                    <span className="font-normal text-[14px] leading-[22.4px] tracking-[-0.25px]">Signing up to Biz Pilot means you agree to the </span>
                                    <Link href="/privacy" className="font-normal text-[14px] leading-[25.5px] tracking-[-0.25px] text-[#5779db] underline hover:text-[#2e58d1]">Privacy Policy</Link>
                                    <span className="font-bold text-[16px] leading-[25.6px]"> </span>
                                    <span className="text-[14px] leading-[25.5px] tracking-[-0.25px]">and </span>
                                    <Link href="/terms" className="font-normal text-[14px] leading-[25.5px] tracking-[-0.25px] text-[#5779db] underline hover:text-[#2e58d1]">Terms of Service</Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side Image/Gradient Feature (Hidden on Mobile) */}
            <div className="hidden lg:flex w-1/2 relative bg-[radial-gradient(131.23%_84.35%_at_41.17%_24.4%,#ffffff_0%,#fde2e4_35.71%,#f3e8ff_88.7%)] overflow-hidden items-center justify-center">
                {/* Background whick image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] pointer-events-none mix-blend-multiply opacity-90">
                    <Image
                        src={imgWhisk}
                        alt="Business Professional"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Floating Card Content */}
                <div className="absolute bottom-[20%] w-[80%] max-w-[676px] bg-white/95 backdrop-blur-md rounded-[24px] p-[24px] flex flex-col items-center justify-center gap-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] z-10">
                    <h2 className="font-['Inter'] font-bold text-[28px] xl:text-[36px] tracking-[-1.44px] text-center max-w-[500px] leading-[1.4]">
                        <span className="text-[#1b357e]">Smart Invoicing</span>
                        <span className="text-[#0a0d14]">: Create, Remind & Track with Ease</span>
                    </h2>
                    <p className="font-['Inter'] font-normal text-[16px] text-[#666] tracking-[-0.5px] text-center max-w-[460px]">
                        BizPilot helps business owners mange, track and simplify their finances
                    </p>
                </div>
            </div>

        </div>
    );
}
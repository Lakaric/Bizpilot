"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const imgWhisk = "/assets/897b7fe84323fda8cfb1a6e5aa1cf87914d90c74.png";
const imgGoogle = "http://localhost:3845/assets/235e6f5b35968d18e20b0088037bca852b2c90f1.svg";

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    return (
        <div className="min-h-screen w-full bg-[#faf9ff] flex">
            {/* Left Full Width / Half Width Container */}
            <div className="w-full lg:w-1/2 flex flex-col min-h-screen bg-white xl:bg-[#faf9ff]">
                
                {/* Back Button Container */}
                <div className="w-full max-w-[720px] mx-auto px-6 sm:px-[95px] pt-10 sm:pt-[52px]">
                    <button 
                        onClick={() => router.back()}
                        className="w-[40px] h-[40px] flex items-center justify-center bg-[#f2f2f2] rounded-[6px] hover:bg-[#e5e5e5] transition-colors"
                        aria-label="Go back"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#122354" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 w-full max-w-[720px] mx-auto flex flex-col items-center justify-center px-6 sm:px-[95px] py-[40px]">
                    <div className="w-full max-w-[521px] flex flex-col gap-[40px]">
                        
                        {/* Header */}
                        <div className="flex flex-col gap-[8px]">
                            <h1 className="font-['Onest'] font-bold text-[32px] leading-[44.8px] tracking-[-0.16px] text-[#0c1727]">
                                Welcome back!
                            </h1>
                            <p className="font-['Onest'] font-medium text-[18px] leading-[25.2px] tracking-[-0.09px] text-[#7d8082]">
                                Let's help you stay on top of your business.
                            </p>
                        </div>

                        {/* Form Area */}
                        <div className="flex flex-col gap-[40px] w-full">
                            
                            {/* Inputs Container */}
                            <div className="flex flex-col gap-[24px] w-full">
                                
                                {/* Email / Phone Input */}
                                <div className="flex flex-col gap-[8px] w-full">
                                    <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                                        Email or Phone number
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="john@gmail.com"
                                        className="w-full h-[50px] px-[12px] py-[10px] bg-[#fcfcfc] border border-[#1b357e] rounded-[8px] font-['Inter'] font-medium text-[16px] text-[#0a0d14] placeholder:text-[#767d92] focus:outline-none focus:ring-1 focus:ring-[#1b357e] transition-all"
                                    />
                                </div>

                                {/* Password Input */}
                                <div className="flex flex-col gap-[8px] w-full">
                                    <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                                        Password
                                    </label>
                                    <div className="relative w-full">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Password*"
                                            className="w-full h-[50px] px-[12px] py-[10px] pr-[48px] bg-[#fcfcfc] border border-[#1b357e] rounded-[8px] font-['Inter'] font-medium text-[16px] text-[#0a0d14] placeholder:text-[#767d92] focus:outline-none focus:ring-1 focus:ring-[#1b357e] transition-all"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] text-[#767d92] hover:text-[#0a0d14] flex items-center justify-center"
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

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between w-full">
                                    <label className="flex items-center gap-[8px] cursor-pointer group">
                                        <div className="w-[18px] h-[18px] border-2 border-[#767d92] group-hover:border-[#1b357e] rounded-[4px] transition-colors flex items-center justify-center">
                                            {/* Custom checkbox - checkmark SVG can go here */}
                                        </div>
                                        <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                                            Remember me
                                        </span>
                                    </label>
                                    <Link href="/forgot-password" className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#2446a8] hover:underline">
                                        Forgot password
                                    </Link>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-[16px] w-full">
                                <button className="w-full h-[56px] flex items-center justify-center bg-[#2446a8] hover:bg-[#1d3a8e] transition-colors rounded-[8px] text-white font-['Inter'] font-medium text-[16px] tracking-[-0.5px]">
                                    Sign In
                                </button>
                                
                                <button className="w-full h-[56px] flex items-center justify-center gap-[8px] bg-[#eaeefa] hover:bg-[#dbe4f8] transition-colors rounded-[8px]">
                                    <div className="w-[24px] h-[24px] relative flex items-center justify-center">
                                        <Image src={imgGoogle} alt="Google" fill className="object-contain" />
                                    </div>
                                    <span className="font-['Inter'] font-medium text-[16px] tracking-[-0.5px] text-[#122354]">
                                        Continue with Google
                                    </span>
                                </button>
                            </div>

                            {/* Sign Up Link */}
                            <div className="flex items-center justify-center gap-[4px] w-full font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px]">
                                <span className="text-[#122354]">Don't have an account?</span>
                                <Link href="/signup" className="text-[#2446a8] hover:underline">
                                    Sign up
                                </Link>
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
                <div className="absolute xl:bottom-[20%] xl:w-[80%] xl:max-w-[676px] lg:bottom-[10%] lg:w-[90%] bg-white/95 backdrop-blur-md rounded-[24px] p-[24px] flex flex-col items-center justify-center gap-[8px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] z-10">
                    <h2 className="font-['Inter'] font-bold text-[25.2px] tracking-[-0.25px] text-center max-w-[500px] leading-[40.32px]">
                        <span className="font-['Protest_Riot'] text-[#2446a8]">Smart Invoicing - </span>
                        <span className="text-[#122354]">Create, Remind & Track with Ease</span>
                    </h2>
                    <p className="font-['Inter'] font-medium text-[14.4px] text-[#767d92] tracking-[-0.45px] text-center max-w-[460px] leading-[23.04px]">
                        BizPilot helps business owners mange, track and simplify their finances
                    </p>
                </div>
            </div>

        </div>
    );
}
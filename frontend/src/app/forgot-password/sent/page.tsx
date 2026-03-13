"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResetLinkSentContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email") || "your email";

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
                            We sent a password reset link to {email}
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-[32px] w-full">
                    {/* Open Email + Resend */}
                    <div className="flex flex-col gap-[16px] w-full">
                        {/* Open email app */}
                        <a
                            href="https://mail.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-[56px] flex items-center justify-center rounded-[8px] bg-[#2446a8] hover:bg-[#1d3a8e] transition-colors font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-white"
                        >
                            Open email app
                        </a>

                        {/* Didn't receive? */}
                        <div className="flex items-center justify-center gap-[4px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px]">
                            <span className="text-[#09122a]">Didn&apos;t receive the email?</span>
                            <button className="text-[#2446a8] hover:underline cursor-pointer bg-transparent border-none font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px]">
                                Click to resend
                            </button>
                        </div>
                    </div>

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
    );
}

export default function ResetLinkSent() {
    return (
        <Suspense fallback={
            <div className="min-h-screen w-full bg-white flex items-center justify-center">
                <div className="text-[#767d92] font-['Inter'] text-[16px]">Loading...</div>
            </div>
        }>
            <ResetLinkSentContent />
        </Suspense>
    );
}

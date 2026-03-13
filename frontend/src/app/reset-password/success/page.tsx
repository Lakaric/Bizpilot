import Link from "next/link";

export default function ResetPasswordSuccess() {
    return (
        <div className="min-h-screen w-full bg-white flex items-center justify-center p-6 sm:p-[100px]">
            <div className="w-full max-w-[522px] border border-[#eaeaeb] rounded-[32px] flex flex-col gap-[32px] items-center justify-center px-[16px] py-[20px] sm:px-[24px] sm:py-[32px]">

                {/* Header: Icon + Title + Subtitle */}
                <div className="flex flex-col gap-[20px] items-center w-full">
                    {/* Success Checkmark Icon */}
                    <div className="w-[50px] h-[50px] bg-[#ebf9eb] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22a722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>

                    {/* Title + Subtitle */}
                    <div className="flex flex-col gap-[8px] items-center w-full">
                        <h1 className="font-['Inter'] font-bold text-[28px] leading-[44.8px] tracking-[-0.28px] text-[#122354] text-center">
                            Password Reset
                        </h1>
                        <p className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#7d8082] text-center max-w-[371px]">
                            Your password reset is successful. click below to sign in and get started.
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col w-full">
                    <div className="flex flex-col gap-[4px] w-full">
                        {/* Continue / Reset Password Button */}
                        <Link
                            href="/signin"
                            className="w-full h-[56px] flex items-center justify-center rounded-[8px] bg-[#2446a8] hover:bg-[#1d3a8e] transition-colors font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-white"
                        >
                            Continue to Sign In
                        </Link>

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

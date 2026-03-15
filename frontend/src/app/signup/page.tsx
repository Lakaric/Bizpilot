"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const imgHeroRight = "/assets/hero/sign-up.png";
const imgLogo = "/assets/Bizbot-logo.png";
const imgGoogle = "/assets/testimonials/google_icon.jpeg.png";

function ProgressBar() {
    return (
        <div className="flex gap-[8px] items-center w-full max-w-[521px]">
            <div className="flex-1 h-[6px] bg-[#2446a8] rounded-full" />
            <div className="flex-1 h-[6px] bg-[#eaeefa] rounded-full" />
            <div className="flex-1 h-[6px] bg-[#eaeefa] rounded-full" />
            <div className="flex-1 h-[6px] bg-[#eaeefa] rounded-full" />
        </div>
    );
}

export default function SignUp() {
    return (
        <div className="min-h-screen w-full bg-white flex">
            {/* Left Side – Form Area */}
            <div className="w-full lg:w-1/2 flex items-center justify-center min-h-screen px-6 sm:px-10 lg:px-[95px] py-[104px]">
                <div className="w-full max-w-[521px] flex flex-col gap-[91px]">
                    {/* Top Section: Logo + Progress + Form */}
                    <div className="flex flex-col gap-[40px] w-full">
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
                            <ProgressBar />
                        </div>

                        {/* Heading + Buttons */}
                        <div className="flex flex-col gap-[62px] w-full">
                            {/* Heading */}
                            <div className="flex flex-col w-full">
                                <h2 className="font-['Inter'] font-semibold text-[36px] leading-[57.6px] tracking-[-0.36px] text-[#122354]">
                                    Create your account
                                </h2>
                                <p className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#767d92]">
                                    Start managing your business the stress-free way.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-[20px] w-full">
                                <div className="flex flex-col gap-[16px] w-full">
                                    {/* Continue with Google */}
                                    <button
                                        onClick={() =>
                                            authClient.signIn.social({
                                                provider: "google",
                                                callbackURL: "/dashboard",
                                            })
                                        }
                                        className="w-full h-[56px] flex items-center justify-center gap-[8px] bg-[#eaeefa] hover:bg-[#dde3f7] transition-colors rounded-[8px]"
                                    >
                                        <div className="w-[24px] h-[24px] relative">
                                            <Image src={imgGoogle} alt="Google" fill className="object-contain" />
                                        </div>
                                        <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#122354]">
                                            Continue with Google
                                        </span>
                                    </button>

                                    {/* Continue with Email */}
                                    <Link
                                        href="/signup/email"
                                        className="w-full h-[56px] flex items-center justify-center gap-[8px] bg-[#2446a8] hover:bg-[#1d3a8e] transition-colors rounded-[8px]"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                            <path d="M22 8.608v8.142a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608ZM5.25 4h13.5a3.25 3.25 0 0 1 3.234 2.924L12 12.639 1.966 6.86A3.25 3.25 0 0 1 5.25 4Z" />
                                        </svg>
                                        <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-white">
                                            Continue with Email
                                        </span>
                                    </Link>
                                </div>

                                {/* Already have an account? */}
                                <div className="flex items-center gap-[4px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px]">
                                    <span className="text-[#122354]">Already have an account?</span>
                                    <Link href="/signin" className="text-[#2446a8] hover:underline">
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terms Footer */}
                    <p className="font-['Inter'] font-normal text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#122354]">
                        By continuing, you agree to the{" "}
                        <Link href="/terms" className="text-[#2446a8] hover:underline">
                            General Terms of Use
                        </Link>
                        , and{" "}
                        <Link href="/privacy" className="text-[#2446a8] hover:underline">
                            General Privacy Policy
                        </Link>{" "}
                        of BizPilot
                    </p>
                </div>
            </div>

            {/* Right Side – Decorative Panel (Hidden on Mobile) */}
            <div className="hidden lg:flex w-1/2 relative p-[32px] bg-white">
                <div className="relative w-full h-full rounded-[32px] overflow-hidden min-h-[calc(100vh-64px)]">
                    {/* Gradient Background */}
                    <div
                        className="absolute inset-0 backdrop-blur-[32px]"
                        style={{
                            background:
                                "radial-gradient(131.23% 84.35% at 41.17% 24.4%, #ffffff 0%, #fde2e4 35.71%, #f3e8ff 88.7%)",
                        }}
                    />

                    {/* Image */}
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

                {/* Floating Card */}
                <div className="absolute bottom-[96px] left-[0px] xl:left-[16px] bg-white rounded-[21.6px] p-[21.6px] flex flex-col gap-[7.2px] shadow-[0_8px_10px_0_rgba(0,0,0,0.14)] z-10 w-[369.2px]">
                    <p className="font-semibold tracking-[-0.252px] text-[25.2px] leading-[40.32px] w-[326px]">
                        <span className="font-['Protest_Riot',cursive] text-[#2446a8]">Smart Invoicing - </span>
                        <span className="font-['Inter'] text-[#122354]">Create, Remind &amp; Track with Ease</span>
                    </p>
                    <p className="font-['Inter'] font-medium text-[14.4px] leading-[23.04px] tracking-[-0.45px] text-[#767d92]">
                        BizPilot helps business owners mange, track and simplify their finances
                    </p>
                </div>
            </div>
        </div>
    );
}
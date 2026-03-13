"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

const imgWhisk = "/assets/hero/hero-image.png";
const imgLogo = "/assets/Bizbot-logo.png";

export default function SignUpEmail() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState("");
    const [referralSource, setReferralSource] = useState("");

    const passwordStrength = useMemo(() => {
        if (!password) return 0;
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;
        return strength;
    }, [password]);

    const strengthLabel = useMemo(() => {
        if (passwordStrength === 0) return "";
        if (passwordStrength <= 2) return "Weak";
        if (passwordStrength <= 3) return "Fair";
        if (passwordStrength <= 4) return "Good";
        return "Perfect";
    }, [passwordStrength]);

    const strengthColor = useMemo(() => {
        if (passwordStrength <= 2) return "#d21212";
        if (passwordStrength <= 3) return "#f59e0b";
        if (passwordStrength <= 4) return "#2446a8";
        return "#22a722";
    }, [passwordStrength]);

    const isValid =
        firstName.trim() &&
        lastName.trim() &&
        email.trim() &&
        password.trim().length >= 8 &&
        phone.trim() &&
        referralSource;

    return (
        <div className="min-h-screen w-full bg-white flex">
            {/* Left Side – Form Area */}
            <div className="w-full lg:w-1/2 flex flex-col min-h-screen overflow-y-auto px-6 sm:px-10 lg:px-[95px] py-[40px] lg:py-[60px]">
                <div className="w-full max-w-[521px] mx-auto flex flex-col gap-[40px]">

                    {/* Back Button */}
                    <Link
                        href="/signup"
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
                        {/* Progress Bar – Step 2 */}
                        <div className="flex gap-[8px] items-center w-full">
                            <div className="flex-1 h-[6px] bg-[#2446a8] rounded-full" />
                            <div className="flex-1 h-[6px] bg-[#2446a8] rounded-full" />
                            <div className="flex-1 h-[6px] bg-[#eaeefa] rounded-full" />
                            <div className="flex-1 h-[6px] bg-[#eaeefa] rounded-full" />
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col w-full">
                        <h2 className="font-['Inter'] font-semibold text-[36px] leading-[57.6px] tracking-[-0.36px] text-[#122354]">
                            Create your account
                        </h2>
                        <p className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#767d92]">
                            Start managing your business the stress-free way.
                        </p>
                    </div>

                    {/* Form Fields */}
                    <div className="flex flex-col gap-[40px] w-full">
                        <div className="flex flex-col gap-[24px] w-full">

                            {/* First Name & Last Name */}
                            <div className="flex flex-col sm:flex-row gap-[16px] w-full">
                                <div className="flex flex-col gap-[8px] flex-1">
                                    <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                                        First Name<span className="text-[#d21212]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="Enter first name"
                                        className="w-full h-[50px] px-[12px] py-[10px] border border-[#eaeaeb] rounded-[8px] bg-transparent font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a] placeholder:text-[#d6d7dc] focus:outline-none focus:border-[#2446a8] transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col gap-[8px] flex-1">
                                    <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                                        Last Name<span className="text-[#d21212]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Enter last name"
                                        className="w-full h-[50px] px-[12px] py-[10px] border border-[#eaeaeb] rounded-[8px] bg-transparent font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a] placeholder:text-[#d6d7dc] focus:outline-none focus:border-[#2446a8] transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-[8px] w-full">
                                <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                                    Email<span className="text-[#d21212]">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email address"
                                    className="w-full h-[50px] px-[12px] py-[10px] border border-[#eaeaeb] rounded-[8px] bg-transparent font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a] placeholder:text-[#d6d7dc] focus:outline-none focus:border-[#2446a8] transition-colors"
                                />
                            </div>

                            {/* Create Password */}
                            <div className="flex flex-col gap-[16px] w-full">
                                <div className="flex flex-col gap-[8px] w-full">
                                    <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#323334]">
                                        Create Password<span className="text-[#d21212]">*</span>
                                    </label>
                                    <div className="relative w-full">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Password"
                                            className="w-full h-[50px] px-[12px] py-[10px] pr-[48px] border border-[#eaeaeb] rounded-[8px] bg-transparent font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a] placeholder:text-[#d6d7dc] focus:outline-none focus:border-[#2446a8] transition-colors"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] text-[#868c98] hover:text-[#09122a] flex items-center justify-center transition-colors"
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

                                {/* Password Strength Meter */}
                                <div className="flex flex-col gap-[8px] w-full">
                                    <div className="flex items-center justify-between w-full">
                                        <span className="font-['Inter'] font-normal text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#767d92]">
                                            Password Strength
                                        </span>
                                        {strengthLabel && (
                                            <span
                                                className="font-['Inter'] font-normal text-[14px] leading-[19.6px] tracking-[-0.408px]"
                                                style={{ color: strengthColor }}
                                            >
                                                {strengthLabel}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-[4px] w-full">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div
                                                key={i}
                                                className="flex-1 h-[4px] rounded-full transition-colors"
                                                style={{
                                                    backgroundColor: i <= passwordStrength ? strengthColor : "#eaeaeb",
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col gap-[8px] w-full">
                                <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                                    Phone Number<span className="text-[#d21212]">*</span>
                                </label>
                                <div className="flex items-center w-full h-[50px] border border-[#eaeaeb] rounded-[12px] overflow-hidden">
                                    <div className="flex items-center gap-[8px] px-[16px] h-full border-r border-[#eaeaeb] bg-transparent shrink-0">
                                        <span className="text-[20px]">🇳🇬</span>
                                        <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#5e6475]">
                                            +234
                                        </span>
                                    </div>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Enter phone number"
                                        className="flex-1 h-full px-[12px] bg-transparent font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a] placeholder:text-[#d6d7dc] focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* How did you hear about us? */}
                            <div className="flex flex-col gap-[8px] w-full">
                                <label className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#323334]">
                                    How did you hear about us?<span className="text-[#d21212]">*</span>
                                </label>
                                <div className="relative w-full">
                                    <select
                                        value={referralSource}
                                        onChange={(e) => setReferralSource(e.target.value)}
                                        className="w-full h-[50px] px-[12px] py-[10px] pr-[48px] border border-[#eaeaeb] rounded-[8px] bg-transparent font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a] focus:outline-none focus:border-[#2446a8] transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled className="text-[#d6d7dc]">Select Option</option>
                                        <option value="google">Google Search</option>
                                        <option value="social">Social Media</option>
                                        <option value="friend">Friend/Colleague</option>
                                        <option value="ad">Online Ad</option>
                                        <option value="blog">Blog/Article</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <svg
                                        className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none text-[#868c98]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Continue Button */}
                        <button
                            disabled={!isValid}
                            className={`w-full h-[56px] flex items-center justify-center rounded-[8px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] transition-colors ${
                                isValid
                                    ? "bg-[#2446a8] hover:bg-[#1d3a8e] text-white cursor-pointer"
                                    : "bg-[#e4e5e9] text-[#adb1be] cursor-not-allowed"
                            }`}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Side – Decorative Panel (Hidden on Mobile) */}
            <div className="hidden lg:flex w-1/2 relative overflow-hidden items-center justify-center bg-white">
                <div className="absolute top-[32px] right-0 w-[575px] h-[720px] rounded-[32px] overflow-hidden">
                    <div
                        className="absolute inset-0 backdrop-blur-[32px]"
                        style={{
                            background:
                                "radial-gradient(131.23% 84.35% at 41.17% 24.4%, #ffffff 0%, #fde2e4 35.71%, #f3e8ff 88.7%)",
                        }}
                    />
                    <div className="absolute inset-0">
                        <Image
                            src={imgWhisk}
                            alt="Business Professional"
                            fill
                            className="object-cover object-center mix-blend-multiply"
                            priority
                        />
                    </div>
                </div>

                {/* Floating Card */}
                <div className="absolute bottom-[32px] left-0 bg-white rounded-[22px] p-[22px] flex flex-col gap-[7px] shadow-[0_8px_10px_1px_rgba(0,0,0,0.14)] z-10 max-w-[370px]">
                    <h3 className="font-semibold text-[25px] tracking-[-0.25px] leading-[40px]">
                        <span className="font-['Protest_Riot',cursive] text-[#2446a8]">Smart Invoicing - </span>
                        <span className="font-['Inter'] text-[#122354]">Create, Remind &amp; Track with Ease</span>
                    </h3>
                    <p className="font-['Inter'] font-medium text-[14.4px] leading-[23px] tracking-[-0.45px] text-[#767d92]">
                        BizPilot helps business owners mange, track and simplify their finances
                    </p>
                </div>
            </div>
        </div>
    );
}

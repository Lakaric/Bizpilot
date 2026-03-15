"use client";

import React from "react";

// ----------------------------------------------------------------------
// Icon Components
// ----------------------------------------------------------------------

const SparkleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
        <path d="M4 17v2" />
        <path d="M5 18H3" />
    </svg>
);

interface ChecklistCardProps {
    step: string;
    stepNumber: string;
    status: string;
    title: string;
    description: string;
    buttonText: string;
    icon: React.ReactNode;
    iconBg: string;
    aiSuggestion: string;
    variant?: "primary" | "secondary";
}

const ChecklistCard: React.FC<ChecklistCardProps> = ({
    step,
    stepNumber,
    status,
    title,
    description,
    buttonText,
    icon,
    iconBg,
    aiSuggestion,
    variant = "primary"
}) => {
    return (
        <div className="flex-1 bg-[#fcfcfc] border border-[#eaeaeb] rounded-2xl p-6 flex flex-col gap-5 transition-all hover:border-[#2446a8]/30 group">
            {/* Header section with icon and step */}
            <div className="flex items-start justify-between w-full">
                <div className={`size-10 rounded-lg ${iconBg} flex items-center justify-center`}>
                    <div className="size-[18px] flex items-center justify-center">
                        {icon}
                    </div>
                </div>
                <div className="bg-[#fef5e7] px-3 py-1 rounded-lg flex items-center gap-2">
                    <span className="font-['Inter'] font-medium text-sm text-[#935f06]">
                        {stepNumber}
                    </span>
                    <div className="size-1.5 rounded-full bg-[#935f06]" />
                    <span className="font-['Inter'] font-normal text-sm text-[#935f06]">
                        {status}
                    </span>
                </div>
            </div>

            {/* Content section */}
            <div className="flex flex-col gap-1">
                <p className="font-['Inter'] font-medium text-[24px] text-[#09122a] tracking-[-0.24px] leading-[38.4px]">
                    {title}
                </p>
                <p className="font-['Inter'] font-medium text-[16px] text-[#767d92] tracking-[-0.5px] leading-[25.6px]">
                    {description}
                </p>
            </div>

            {/* Action section */}
            <div className="w-full">
                {variant === "primary" ? (
                    <button className="w-full h-[56px] bg-[#2446a8] text-white rounded-xl font-['Inter'] font-medium text-[16px] tracking-[-0.5px] hover:bg-[#1b357e] transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-sm">
                        {buttonText}
                    </button>
                ) : (
                    <button className="w-full h-[46px] border border-[#1b357e] text-[#1b357e] rounded-xl font-['Inter'] font-medium text-[16px] tracking-[-0.5px] hover:bg-[#1b357e]/5 transition-all transform hover:scale-[1.01] active:scale-[0.99]">
                        {buttonText}
                    </button>
                )}
            </div>

            {/* AI Suggestion section */}
            <div className="flex gap-4 items-start pt-1">
                <div className="size-[20px] shrink-0 text-[#fbbf24] mt-1 flex items-center justify-center">
                    <SparkleIcon />
                </div>
                <div className="flex flex-col gap-0.5">
                    <p className="font-['Inter'] font-semibold text-[16px] text-[#09122a] tracking-[-0.5px] leading-[25.6px]">
                        AI Suggestions
                    </p>
                    <p className="font-['Inter'] font-normal text-[14px] text-[#767d92] tracking-[-0.25px] leading-[22.4px]">
                        {aiSuggestion}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChecklistCard;

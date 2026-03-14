"use client";

import React from "react";

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
        <div className="flex-1 bg-[#fcfcfc] border border-[#eaeaeb] rounded-2xl p-4 py-6 flex flex-col gap-5 transition-all hover:border-[#2446a8]/30 group">
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
                <p className="font-['Inter'] font-medium text-2xl text-[#09122a] tracking-tight">
                    {title}
                </p>
                <p className="font-['Inter'] font-medium text-base text-[#767d92] tracking-tight leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Action section */}
            <div className="w-full">
                {variant === "primary" ? (
                    <button className="w-full h-14 bg-[#2446a8] text-white rounded-xl font-['Inter'] font-medium text-base tracking-tight hover:bg-[#1b357e] transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-sm">
                        {buttonText}
                    </button>
                ) : (
                    <button className="w-full h-12 border border-[#1b357e] text-[#1b357e] rounded-xl font-['Inter'] font-medium text-base tracking-tight hover:bg-[#1b357e]/5 transition-all transform hover:scale-[1.01] active:scale-[0.99]">
                        {buttonText}
                    </button>
                )}
            </div>

            {/* AI Suggestion section */}
            <div className="flex gap-4 items-start pt-1">
                <div className="size-5 shrink-0 text-[#2446a8] opacity-80 mt-1">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>
                </div>
                <div className="flex flex-col gap-0.5">
                    <p className="font-['Inter'] font-semibold text-base text-[#09122a] tracking-tight">
                        AI Suggestions
                    </p>
                    <p className="font-['Inter'] font-normal text-sm text-[#767d92] tracking-tight leading-relaxed">
                        {aiSuggestion}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChecklistCard;

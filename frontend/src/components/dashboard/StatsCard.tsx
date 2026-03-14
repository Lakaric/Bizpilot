"use client";

import React from "react";

interface StatsCardProps {
    title: string;
    amount: string;
    icon: React.ReactNode;
    iconBg: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, amount, icon, iconBg }) => {
    return (
        <div className="border border-[#eaeaeb] border-solid flex flex-[1_0_0] items-center justify-between min-h-px min-w-px px-4 py-3 relative rounded-[16px]">
            <div className="content-stretch flex flex-col gap-2 items-start not-italic relative shrink-0">
                <p className="font-['Inter'] font-semibold leading-[38.4px] relative shrink-0 text-2xl text-[#09122a] tracking-[-0.24px] whitespace-nowrap">
                    {amount}
                </p>
                <p className="font-['Inter'] font-medium leading-[22.4px] relative shrink-0 text-sm text-[#767d92] tracking-[-0.25px] whitespace-nowrap">
                    {title}
                </p>
            </div>
            <div className={`${iconBg} content-stretch flex items-center justify-center overflow-clip px-2 py-2 relative rounded-md shrink-0 size-10`}>
                <div className="relative shrink-0 size-6 flex items-center justify-center">
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default StatsCard;

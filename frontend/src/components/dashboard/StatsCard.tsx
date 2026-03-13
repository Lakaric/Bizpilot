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
        <div className="flex-1 min-w-[200px] border border-[#eaeaeb] rounded-2xl p-4 flex items-center justify-between transition-all">
            <div className="flex flex-col gap-2">
                <p className="font-['Inter'] font-semibold text-2xl text-[#09122a] tracking-tight">
                    {amount}
                </p>
                <p className="font-['Inter'] font-medium text-sm text-[#767d92] tracking-tight">
                    {title}
                </p>
            </div>
            <div className={`size-10 rounded-lg ${iconBg} flex items-center justify-center`}>
                <div className="size-6 flex items-center justify-center">
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default StatsCard;

import React from "react";

// Figma Asset URLs
const imgDiamondIcon = "http://localhost:3845/assets/7dbfa248767389c0e8a406da1aa8bdc02f3418ae.svg";
const imgTrendUpIcon = "http://localhost:3845/assets/b8bde496359cb05d57c3a7598ca710b16ee7fe60.svg";
const imgNotificationIcon = "http://localhost:3845/assets/35d86064a7d4e15946452fa3abb8efc156bae819.svg";
const imgTrendDownIcon = "http://localhost:3845/assets/4133e8b3504e7f085a2d7d664ddd6aa142fbf73c.svg";
const imgCubeIcon = "http://localhost:3845/assets/a3be3549317485c9dd3e7065edffdc8ae5bc7fad.svg";
const imgChevronDownIcon = "http://localhost:3845/assets/2c7ab9f06c75bbc13d13c3ae7a3fab86d571c911.svg";
const imgEmptyStateGraphic = "http://localhost:3845/assets/a1fa57ceb3cb711ebc212d5ff972064435ecdce1.png"; // Replaced decorative empty container icon with Figma asset

// Generic components
const StatCard = ({ title, value, iconUrl, iconBgColor }: { title: string, value: string, iconUrl: string, iconBgColor: string }) => (
    <div className="border border-[#eaeaeb] flex flex-col xl:flex-row items-center justify-between px-4 py-3 rounded-[16px] w-full">
        <div className="flex flex-col gap-2 items-start w-full xl:w-auto shrink-0 text-center xl:text-left">
            <p className="font-['Inter'] font-semibold text-[24px] leading-[38.4px] tracking-[-0.24px] text-[#09122a] w-full truncate">
                {value}
            </p>
            <p className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#767d92] w-full truncate">
                {title}
            </p>
        </div>
        <div className={`flex items-center justify-center p-[8px] rounded-[6px] w-[40px] h-[40px] shrink-0 ${iconBgColor} mt-3 xl:mt-0 xl:ml-3`}>
            {/* The icon itself inside the 40px wrapper should be 24px */}
            <div className="w-[24px] h-[24px] flex items-center justify-center overflow-hidden">
                <img src={iconUrl} alt={title} className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
);

const EmptyStateSection = ({ title, subtitle, className = "" }: { title: string, subtitle: string, className?: string }) => (
    <div className={`bg-white border border-[#eaeaeb] flex flex-col items-start px-4 py-5 rounded-[16px] shrink-0 ${className}`}>
        <div className="flex flex-col gap-[47px] items-start w-full">
            <div className="flex flex-col gap-1 items-start w-full">
                <h3 className="font-['Inter'] font-semibold text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                    {title}
                </h3>
                <p className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#666]">
                    {subtitle}
                </p>
            </div>
            {/* Empty State visual */}
            <div className="flex flex-col gap-4 items-center w-full justify-center mt-6">
                <div className="w-[79px] h-[79px] flex items-center justify-center overflow-hidden shrink-0">
                    <img src={imgEmptyStateGraphic} alt="No Record" className="w-full h-full object-cover" />
                </div>
                <p className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#868c98] text-center">
                    No record found
                </p>
            </div>
        </div>
    </div>
);


export default function DashboardOverview() {
    return (
        <div className="flex flex-col gap-[26px] items-center w-full max-w-[1104px] mx-auto pt-8 pb-12 px-4 md:px-8">
            <div className="flex flex-col gap-6 items-start w-full">

                {/* Welcome Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
                    <div className="flex flex-col items-start xl:w-[272px]">
                        <h1 className="font-['Inter'] font-semibold text-[24px] leading-[38.4px] tracking-[-0.24px] text-[#122354] whitespace-nowrap">
                            Welcome to BizPilot 👋
                        </h1>
                        <p className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#767d92] whitespace-nowrap">
                            All your business reports in one place.
                        </p>
                    </div>

                    <button className="bg-[#2446a8] hover:bg-blue-800 transition-colors flex gap-2 h-10 items-center justify-center px-4 py-2 rounded-[8px] text-white">
                        {/* Figma Diamond Icon - 24x24px */}
                        <div className="relative w-[24px] h-[24px] shrink-0">
                            <div className="absolute inset-[12.5%_8.96%_13.67%_8.96%]">
                                <div className="absolute inset-[-5.65%_-5.08%_-5.64%_-5.08%]">
                                    <img src={imgDiamondIcon} alt="Upgrade" className="w-full h-full object-contain brightness-0 invert" />
                                </div>
                            </div>
                        </div>
                        <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] whitespace-nowrap">
                            Upgrade plan
                        </span>
                    </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                    <StatCard
                        title="Sales this week"
                        value="NGN0"
                        iconUrl={imgTrendUpIcon}
                        iconBgColor="bg-[#ebf9eb]"
                    />
                    <StatCard
                        title="Invoice Sent"
                        value="NGN0"
                        iconUrl={imgNotificationIcon}
                        iconBgColor="bg-[#eaeefa]"
                    />
                    <StatCard
                        title="Expenses"
                        value="NGN0"
                        iconUrl={imgTrendDownIcon}
                        iconBgColor="bg-[#fde8e8]"
                    />
                    <StatCard
                        title="Outstanding"
                        value="NGN0"
                        iconUrl={imgCubeIcon}
                        iconBgColor="bg-[#fef5e7]"
                    />
                </div>

                {/* Main Content Rows - Using strict 1.416fr (633px) / 1fr (447px) ratio */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.416fr_1fr] gap-[24px] w-full items-stretch">

                    {/* Financial Overview */}
                    <div className="bg-[#fcfcfc] border border-[#eaeaeb] flex flex-col gap-9 items-start px-4 py-5 rounded-[16px] w-full min-h-[354px]">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-3">
                            <div className="flex flex-col gap-1 items-start">
                                <h3 className="font-['Inter'] font-semibold text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                                    Financial Overview
                                </h3>
                                <p className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#666]">
                                    View your recent financial records
                                </p>
                            </div>
                            <button className="bg-[#fafafa] border border-[#eaeaeb] flex gap-[8px] items-center justify-center px-[12px] py-[8px] rounded-[20px] hover:bg-slate-50 transition-colors">
                                <span className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                                    Last 6 month
                                </span>
                                {/* Figma Chevron - 24x24px Proportion */}
                                <div className="relative w-[24px] h-[24px] shrink-0">
                                    <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                                        <div className="absolute inset-[-20%_-10%]">
                                            <img src={imgChevronDownIcon} alt="Dropdown" className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Chart Area */}
                        <div className="flex flex-col w-full flex-1 relative hide-scrollbar overflow-x-auto min-h-[220px]">
                            {/* Y-Axis lines */}
                            <div className="flex flex-col justify-between w-[500px] md:w-full absolute inset-0 pb-7">
                                {[5000, 4000, 3000, 2000, 1000, 0].map(val => (
                                    <div key={val} className="flex gap-1.5 items-center w-full z-0 h-[20px]">
                                        <div className="flex items-center justify-end w-[36px] shrink-0">
                                            <span className="font-['Inter'] font-semibold text-[12px] leading-[19.2px] text-[#767d92]">
                                                {val.toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="flex-1 h-px bg-slate-200" />
                                    </div>
                                ))}
                            </div>

                            {/* X-Axis labels */}
                            <div className="flex items-center justify-between w-[500px] md:w-full absolute bottom-0 left-0 pt-2 border-t border-transparent">
                                <div className="w-[36px] shrink-0" />
                                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
                                    <div key={month} className="flex flex-1 items-center justify-center">
                                        <span className="font-['Inter'] font-semibold text-[12px] leading-[19.2px] text-[#767d92]">
                                            {month}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* AI Insights Card */}
                    <EmptyStateSection
                        title="AI Insights"
                        subtitle="Turn sales and receipts data into actionable insights."
                        className="w-full min-h-[354px]"
                    />

                </div>

                {/* Bottom Row grid layout: 1.416fr : 1 ratio */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.416fr_1fr] gap-[24px] w-full items-stretch">

                    {/* Sales, Receipts, and Dues */}
                    <EmptyStateSection
                        title="Sales, Receipts, and Dues"
                        subtitle="Total sales, receipts, and dues over different period of time"
                        className="w-full min-h-[300px]"
                    />

                    {/* Recent Activities */}
                    <EmptyStateSection
                        title="Recent Activities"
                        subtitle="Track all your activities in real-time."
                        className="w-full min-h-[300px]"
                    />
                </div>

            </div>
        </div>
    );
}

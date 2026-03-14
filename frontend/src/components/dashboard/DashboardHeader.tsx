"use client";

import React from "react";

// Asset URLs from Figma Design Context
const imgSearchIcon = "http://localhost:3845/assets/382cb940bf27b14ceda9099abf18e341fa1af185.svg";
const imgBellIcon = "http://localhost:3845/assets/c84c5ef07a653ac0222e71a8e6d9bf7c8310c575.svg";
const imgUserAvatar = "http://localhost:3845/assets/97fee250e209bbaac8f168c05747eb2ab4fd609e.png";
const imgChevronDown = "http://localhost:3845/assets/371de86b670923d8835187540e454fd06236d73b.svg";

const DashboardHeader = () => {
    return (
        <header
            className="bg-[#fcfcfc] border-b-[0.6px] border-[#e2e2e2] flex items-center justify-between px-8 h-[80px] relative w-full sticky top-0 z-40"
            data-name="Header"
        >
            {/* Search Section */}
            <div className="bg-[#f2f3f5] border border-[#eaeaeb] flex flex-col items-start justify-center px-3 py-3 relative rounded-[16px] w-[446px] group transition-all focus-within:ring-2 focus-within:ring-[#2446a8]/10">
                <div className="flex gap-[6px] items-center relative w-full">
                    <div className="relative shrink-0 size-5">
                        <img
                            src={imgSearchIcon}
                            alt="Search"
                            className="block size-full"
                        />
                    </div>
                    <div className="flex-1 flex items-center relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none w-full font-['Inter'] font-medium text-base text-[#122354] placeholder:text-[#767d92]/60 tracking-[-0.5px]"
                        />
                    </div>
                </div>
            </div>

            {/* Right Section: Notifications & Profile */}
            <div className="flex gap-5 items-center justify-end relative">
                {/* Notification Bell */}
                <button className="flex items-center justify-center relative shrink-0 size-6 hover:bg-[#f2f3f5] rounded-lg transition-colors cursor-pointer">
                    <img
                        src={imgBellIcon}
                        alt="Notifications"
                        className="block size-6"
                    />
                </button>

                {/* Profile Section */}
                <button className="flex gap-[12px] items-center relative shrink-0 cursor-pointer group p-1 rounded-lg hover:bg-[#f2f3f5] transition-colors">
                    <div className="flex items-center relative shrink-0">
                        <div className="relative shrink-0 size-[38px] rounded-full overflow-hidden border border-[#eaeaeb]">
                            <img
                                src={imgUserAvatar}
                                alt="User Profile"
                                className="absolute inset-0 size-full object-cover pointer-events-none"
                            />
                        </div>
                    </div>
                    <div className="relative shrink-0 size-6" data-name="chevron-down">
                        <div className="absolute top-[37.5%] bottom-[37.5%] left-1/4 right-1/4">
                            <div className="absolute inset-[-16.67%_-8.33%]">
                                <img
                                    src={imgChevronDown}
                                    alt="Profile Menu"
                                    className="block max-w-none size-full"
                                />
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default DashboardHeader;

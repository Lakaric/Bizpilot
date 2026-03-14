"use client";

import React from "react";

// Asset URLs from Figma Design Context
const imgSearchIcon = "/assets/search.svg";
const imgBellIcon = "/assets/bell.svg";
const imgUserAvatar = "/assets/user-avatar.png";
const imgChevronDown = "/assets/chevron-down.svg";

const Header = () => {
    return (
        <header
            className="bg-[#fcfcfc] border-[#e2e2e2] border-b-[0.6px] border-solid flex items-center justify-between px-8 py-5 relative shrink-0 w-full sticky top-0 z-40"
            data-name="Header"
        >
            {/* Search Box */}
            <div className="bg-[#f2f3f5] border border-[#eaeaeb] border-solid flex flex-col items-start justify-center px-3 py-3 relative rounded-2xl shrink-0 max-w-[446px] w-full">
                <div className="flex gap-1.5 items-center relative shrink-0 w-full">
                    <div className="overflow-clip relative shrink-0 size-5 flex items-center justify-center">
                        <img
                            src={imgSearchIcon}
                            alt=""
                            className="block max-w-none size-3.5"
                        />
                    </div>
                    <div className="flex items-center justify-center relative shrink-0">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none font-['Inter'] font-medium leading-[25.6px] opacity-60 relative shrink-0 text-base text-[#767d92] tracking-[-0.5px] whitespace-nowrap"
                        />
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex gap-5 items-center justify-end relative shrink-0">
                <div className="flex items-center relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-6">
                        <div className="absolute inset-[8.33%_12.5%] flex items-center justify-center">
                            <img
                                src={imgBellIcon}
                                alt=""
                                className="block max-w-none size-full"
                            />
                        </div>
                    </div>
                </div>
                <button className="cursor-pointer flex gap-3 items-center relative shrink-0">
                    <div className="flex items-center relative shrink-0">
                        <div className="relative shrink-0 size-[38px]">
                            <img
                                src={imgUserAvatar}
                                alt=""
                                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-full"
                            />
                        </div>
                    </div>
                    <div className="overflow-clip relative shrink-0 size-6 flex items-center justify-center">
                        <img
                            src={imgChevronDown}
                            alt=""
                            className="block max-w-none size-[14px] h-[8px]"
                        />
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;

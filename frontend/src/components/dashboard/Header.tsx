import React from "react";
import Image from "next/image";

// Figma Asset URLs
const imgSearchIcon = "http://localhost:3845/assets/382cb940bf27b14ceda9099abf18e341fa1af185.svg";
const imgBellIcon = "http://localhost:3845/assets/c84c5ef07a653ac0222e71a8e6d9bf7c8310c575.svg";
const imgChevronDownIcon = "http://localhost:3845/assets/2c7ab9f06c75bbc13d13c3ae7a3fab86d571c911.svg";
const imgProfileAvatar = "http://localhost:3845/assets/97fee250e209bbaac8f168c05747eb2ab4fd609e.png";

export default function Header() {
    return (
        <header className="bg-[#fcfcfc] border-b-[0.6px] border-[#e2e2e2] flex items-center justify-between px-4 md:px-8 py-5 w-full shrink-0 h-[80px]">

            {/* Search Bar */}
            <div className="bg-[#f2f3f5] border border-[#eaeaeb] flex items-center px-3 py-3 rounded-[16px] w-full max-w-[446px] h-[48px]">
                <div className="flex items-center gap-1.5 w-full">
                    <div className="flex items-center justify-center w-5 h-5 shrink-0 overflow-hidden relative">
                        <img src={imgSearchIcon} alt="Search" className="w-full h-full object-cover" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#767d92] w-full placeholder:text-[#767d92] placeholder:opacity-60"
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center justify-end gap-3 md:gap-5 shrink-0">

                {/* Notification */}
                <button className="flex items-center justify-center p-1 w-8 h-8 rounded-full hover:bg-black/5 transition-colors" aria-label="Notifications">
                    <div className="relative flex items-center justify-center w-6 h-6 shrink-0 overflow-hidden">
                        <img src={imgBellIcon} alt="Notifications" className="w-full h-full object-cover" />
                    </div>
                </button>

                {/* Profile Dropdown */}
                <div className="flex items-center gap-3 shrink-0 cursor-pointer hover:bg-black/5 p-1 rounded-lg transition-colors">
                    <div className="w-[38px] h-[38px] rounded-full overflow-hidden shrink-0 bg-slate-200 border border-slate-300">
                        <img
                            src={imgProfileAvatar}
                            alt="Profile Avatar"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    {/* Official Figma Chevron - 24x24px Proportion Fix */}
                    <div className="relative w-[24px] h-[24px] shrink-0 overflow-hidden">
                        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
                            <div className="absolute inset-[-16.67%_-8.33%]">
                                <img src={imgChevronDownIcon} alt="Dropdown" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>

"use client";

import React, { useState } from "react";

// ----------------------------------------------------------------------
// Icon Components (matching Sidebar pattern)
// ----------------------------------------------------------------------

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
);

const BellDotIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
        <path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673a9 9 0 0 1-.585-.665" />
        <circle cx="18" cy="8" r="3" fill="currentColor" stroke="none" />
    </svg>
);

const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
);

const ChevronDownIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
    </svg>
);

// ----------------------------------------------------------------------
// Header Component
// ----------------------------------------------------------------------

export default function Header() {
    const [searchValue, setSearchValue] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-background border-b border-[#e2e2e2] flex items-center justify-between px-8 py-5 w-full">
            {/* Search bar */}
            <div className="bg-surface border border-[#eaeaeb] flex items-center gap-1.5 px-3 py-3 rounded-2xl w-full max-w-[446px]">
                <div className="shrink-0 size-5 flex items-center justify-center text-text-muted">
                    <SearchIcon />
                </div>
                <input
                    type="search"
                    placeholder="Q Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent font-medium text-base leading-[25.6px] text-text placeholder:text-text-muted tracking-[-0.5px] outline-none"
                    aria-label="Search"
                />
            </div>

            {/* Right section: bell + avatar + chevron */}
            <div className="flex gap-5 items-center justify-end shrink-0">
                <button
                    type="button"
                    className="flex items-center justify-center size-6 text-text-muted hover:text-text transition-colors cursor-pointer"
                    aria-label="Notifications"
                >
                    <BellDotIcon />
                </button>

                <div className="flex gap-3 items-center">
                    <div className="relative size-[38px] rounded-full overflow-hidden bg-primary shrink-0 flex items-center justify-center text-white">
                        <UserIcon />
                    </div>
                    <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center justify-center size-6 text-text-muted hover:text-text transition-colors cursor-pointer"
                        aria-expanded={dropdownOpen}
                        aria-label="User menu"
                    >
                        <ChevronDownIcon size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}

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

            </div>
        </header>
    );
}

"use client";

import React from "react";

const imgDiamondIcon = "/assets/diamond.svg";

const UpgradePlanButton = () => {
    return (
        <button className="bg-[#2446a8] content-stretch flex gap-2 h-10 items-center justify-center pl-2.5 pr-3 py-4 relative rounded-lg shrink-0 cursor-pointer" data-name="Upgrade Plan">
            <div className="overflow-clip relative shrink-0 size-6">
                <div className="absolute inset-[12.5%_8.96%_13.67%_8.96%] flex items-center justify-center">
                    <img
                        src={imgDiamondIcon}
                        alt=""
                        className="block max-w-none size-full"
                    />
                </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Inter'] font-medium leading-[25.6px] relative shrink-0 text-[#e8e9ed] text-base tracking-[-0.5px] whitespace-nowrap">
                    Upgrade plan
                </p>
            </div>
        </button>
    );
};

export default UpgradePlanButton;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imgChevronDown = "/assets/chevron-down.svg";
const imgGridLine = "/assets/grid-line.svg";
const imgTooltipLegendIcon = "/assets/tooltip-legend.svg";

const FinancialOverview = () => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(5); // Default to June as in design
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const barHeights = ["52px", "52px", "53px", "91px", "79px", "165px", "39px", "99px", "99px", "99px", "99px", "99px"];
    const values = ["1,800.00", "1,800.00", "1,900.00", "3,200.00", "2,800.00", "5,800.00", "1,400.00", "3,500.00", "3,500.00", "3,500.00", "3,500.00", "3,500.00"];

    // Click outside handler
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setSelectedIdx(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="bg-[#fcfcfc] border border-[#eaeaeb] border-solid content-stretch flex flex-col gap-9 items-start overflow-visible px-4 py-5 relative rounded-2xl self-stretch flex-[1.4] min-w-[300px]">
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-1 items-start min-h-px min-w-px not-italic relative">
                    <p className="font-['Inter'] font-semibold leading-[25.6px] relative shrink-0 text-base text-[#09122a] tracking-[-0.5px] w-full">
                        Financial Overview
                    </p>
                    <p className="font-['Inter'] font-medium leading-[22.4px] relative shrink-0 text-sm text-[#767d92] tracking-[-0.25px] w-full">
                        View your recent financial records
                    </p>
                </div>
                <div className="bg-[#fafafa] border border-[#eaeaeb] border-solid content-stretch flex gap-2 items-center justify-center px-3 py-2 relative rounded-[20px] shrink-0">
                    <div className="flex flex-col font-['Inter'] font-medium justify-center leading-[0] not-italic relative shrink-0 text-sm text-[#09122a] tracking-[-0.25px] whitespace-nowrap">
                        <p className="leading-[22.4px]">Last 6 month</p>
                    </div>
                    <div className="overflow-clip relative shrink-0 size-5 flex items-center justify-center">
                        <img src={imgChevronDown} alt="" className="block max-w-none size-[14px] h-[8px]" />
                    </div>
                </div>
            </div>

            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full h-[210px]">
                <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                    {[5000, 4000, 3000, 2000, 1000, 0].map((val) => (
                        <div key={val} className="content-stretch flex gap-1.5 items-center relative shrink-0 w-full">
                            <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 w-9">
                                <p className="font-['Inter'] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[12px] text-[#767d92] whitespace-nowrap">
                                    {val.toLocaleString()}
                                </p>
                            </div>
                            <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
                                <img src={imgGridLine} alt="" className="absolute inset-[-0.5px_0] block max-w-none size-full" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="content-stretch flex items-center justify-between opacity-99 relative shrink-0 w-full mt-2">
                    <div className="h-5 shrink-0 w-9" />
                    {months.map((month) => (
                        <div key={month} className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 w-9">
                            <p className="font-['Inter'] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[12px] text-[#767d92] whitespace-nowrap">
                                {month}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="absolute inset-x-0 bottom-[28px] flex items-end justify-between left-[52px] right-2 h-[165px]">
                    {barHeights.map((height, idx) => {
                        const isHovered = hoveredIdx === idx;
                        const isSelected = selectedIdx === idx;
                        const showTooltip = isHovered || isSelected;

                        return (
                            <div
                                key={idx}
                                className={`rounded-t-lg shrink-0 w-[30px] relative transition-colors duration-200 cursor-pointer ${(isHovered || isSelected) ? 'bg-[#1b357e]' : 'bg-[#eaeefa]'}`}
                                style={{ height }}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                onClick={() => setSelectedIdx(isSelected ? null : idx)}
                            >
                                <AnimatePresence>
                                    {showTooltip && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                                            exit={{ opacity: 0, y: 10, x: "-50%" }}
                                            className="absolute content-stretch flex flex-col items-start left-1/2 top-[-72px] w-[109px] z-10 pointer-events-none"
                                        >
                                            <div className="bg-[#fafafa] content-stretch flex gap-1.5 items-start overflow-clip px-2 py-1 relative rounded-t-md shadow-[0px_8px_8px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
                                                <p className="font-['Inter'] font-semibold leading-[19.2px] not-italic relative shrink-0 text-[12px] text-[#09122a] whitespace-nowrap">
                                                    11th {months[idx]} 2025
                                                </p>
                                            </div>
                                            <div className="bg-white content-stretch flex flex-col gap-1.5 items-start overflow-clip px-2 py-1.5 relative rounded-b-md shadow-[0px_8px_8px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
                                                <div className="content-stretch flex gap-1 items-center relative shrink-0">
                                                    <div className="relative shrink-0 size-4">
                                                        <img src={imgTooltipLegendIcon} alt="" className="absolute block max-w-none size-full" />
                                                    </div>
                                                    <p className="font-['Inter'] font-normal leading-[19.5px] not-italic relative shrink-0 text-[13px] text-[#767d92] whitespace-nowrap">
                                                        ₦{values[idx]}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FinancialOverview;

"use client";

import React from "react";
import Image from "next/image";

// ----------------------------------------------------------------------
// SVG Icons
// ----------------------------------------------------------------------

const DownloadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// ----------------------------------------------------------------------
// Quotation Page Component
// ----------------------------------------------------------------------

export default function QuotationPage() {
  return (
    <div className="flex flex-col gap-[24px] w-full overflow-hidden">
      
      {/* Header Section */}
      <div className="flex items-center justify-between w-full h-[45px]">
        <div className="flex items-center">
          <h1 className="font-['Inter'] font-semibold text-[20px] leading-[32px] tracking-[-1px] text-[#122354]">
            Quotation
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[16px] items-center">
          {/* Primary Action */}
          <button className="flex items-center gap-[8px] h-[45px] px-[12px] py-[16px] bg-[#2446a8] rounded-[16px] text-white hover:bg-[#1b357e] transition-colors focus:outline-none">
            <div className="size-[20px] shrink-0 flex items-center justify-center">
              <PlusIcon />
            </div>
            <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px]">
              New
            </span>
            <div className="size-[20px] shrink-0 flex items-center justify-center">
              <ChevronDownIcon />
            </div>
          </button>

          {/* Secondary Action */}
          <button className="flex items-center gap-[8px] h-[45px] px-[12px] py-[16px] bg-white border border-[#eaeaeb] rounded-[16px] text-[#09122a] hover:bg-gray-50 transition-colors focus:outline-none">
            <div className="size-[20px] shrink-0 flex items-center justify-center">
              <DownloadIcon />
            </div>
            <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px]">
              Export
            </span>
          </button>
        </div>
      </div>

      {/* Empty State Container */}
      <div className="w-full min-h-[665px] bg-white border border-[#eaeaeb] rounded-[16px] flex flex-col items-center justify-center py-[279px] px-8">
        <div className="flex flex-col items-center gap-[20px] w-full max-w-[360px]">
          {/* Main Empty State Graphic */}
          <div className="relative size-[113px] shrink-0">
            <Image 
              src="/assets/quotation/empty-state.png" 
              alt="No Quotes Illustration"
              fill
              className="object-contain pointer-events-none"
              priority
            />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col items-center gap-[8px] text-center w-full">
            <h2 className="font-['Inter'] font-semibold text-[20px] leading-[32px] tracking-[-1px] text-[#09122a]">
              No Quotation yet
            </h2>
            <p className="font-['Inter'] font-normal text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#868c98]">
              Gives Customers the offer they can&apos;t refuse
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
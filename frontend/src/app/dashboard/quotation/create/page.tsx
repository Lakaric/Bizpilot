"use client";

import React from "react";
import Link from "next/link";

// --- Icons ---
const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const TrashIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d21212" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);


export default function QuotationCreatePage() {
  return (
    <div className="flex flex-col gap-[24px] w-full pb-32">
      
      {/* Header */}
      <div className="flex items-center gap-[10px] w-full">
        <Link href="/dashboard/quotation" className="flex items-center justify-center size-[24px] text-[#122354] hover:opacity-70 transition-opacity">
          <ArrowLeftIcon />
        </Link>
        <h1 className="font-['Inter'] font-semibold text-[20px] leading-[32px] tracking-[-1px] text-[#122354]">
          New Quotation
        </h1>
      </div>

      {/* Main Form Container */}
      <div className="bg-white rounded-[16px] w-full p-[24px] overflow-hidden">
        <div className="flex flex-col gap-[24px] w-full">
          
          {/* Top Info Grid */}
          <div className="flex flex-col gap-[16px] w-full">
            
            {/* Customer Name */}
            <div className="flex flex-col gap-[8px] w-full">
              <label className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                Customer Name<span className="text-[#d21212]">*</span>
              </label>
              <div className="flex items-center justify-between h-[50px] px-[12px] py-[10px] border border-[#eaeaeb] rounded-[8px] w-full cursor-pointer hover:border-gray-300">
                <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#767d92]">
                  Select or add a customer
                </span>
                <ChevronDownIcon />
              </div>
              <button className="flex items-center gap-[4px] self-end mt-1 text-[#2446a8] hover:underline">
                <PlusIcon />
                <span className="font-['Inter'] font-normal text-[14px] leading-[22.4px] tracking-[-0.25px]">
                  Add New Customer
                </span>
              </button>
            </div>

            {/* Quotation Number & Date */}
            <div className="flex gap-[16px] w-full">
              <div className="flex flex-col gap-[8px] flex-1">
                <label className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                  Quotation Number<span className="text-[#d21212]">*</span>
                </label>
                <div className="flex items-center h-[50px] px-[12px] py-[10px] bg-[#f7f8fd] border border-[#eaeefa] rounded-[8px] w-full pointer-events-none">
                  <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#767d92]">
                    QT-00001
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col gap-[8px] flex-1">
                <label className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                  Quotation Date<span className="text-[#d21212]">*</span>
                </label>
                <div className="flex items-center h-[50px] px-[12px] py-[10px] border border-[#eaeaeb] rounded-[8px] w-full">
                  <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#d6d7dc]">
                    dd / mm / yyyy
                  </span>
                </div>
              </div>
            </div>

            {/* Sales Person & Expiry */}
            <div className="flex gap-[16px] w-full">
              <div className="flex flex-col gap-[8px] flex-1">
                <label className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                  Sales Person<span className="text-[#d21212]">*</span>
                </label>
                <div className="flex items-center justify-between h-[50px] px-[12px] py-[10px] border border-[#eaeaeb] rounded-[8px] w-full cursor-pointer hover:border-gray-300">
                  <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#767d92]">
                    Select or add a sales person
                  </span>
                  <ChevronDownIcon />
                </div>
                <button className="flex items-center gap-[4px] self-end mt-1 text-[#2446a8] hover:underline">
                  <PlusIcon />
                  <span className="font-['Inter'] font-normal text-[14px] leading-[22.4px] tracking-[-0.25px]">
                    Add New Sales Person
                  </span>
                </button>
              </div>

              <div className="flex flex-col gap-[8px] flex-1">
                <label className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                  Expiry Date
                </label>
                <div className="flex items-center h-[50px] px-[12px] py-[10px] border border-[#eaeaeb] rounded-[8px] w-full">
                  <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#d6d7dc]">
                    dd / mm / yyyy
                  </span>
                </div>
                {/* Spacer to align with "Add New Sales Person" button on the left */}
                <div className="h-[28px] mt-1 invisible"></div>
              </div>
            </div>
            
            {/* Subject */}
            <div className="flex flex-col gap-[8px] w-full mt-[-10px]">
              <label className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                Subject
              </label>
              <textarea 
                className="flex p-[12px] border border-[#eaeaeb] rounded-[16px] w-full min-h-[62px] outline-none focus:border-[#2446a8] resize-y font-['Inter'] text-[16px] text-[#09122a] placeholder:text-[#d6d7dc]"
                placeholder="Let your customer know what this quote is for"
              />
            </div>

          </div>

          {/* Line Items Table */}
          <div className="flex flex-col w-full border border-[#eaeaeb] rounded-[8px] overflow-hidden mt-2">
            
            {/* Table Header */}
            <div className="flex w-full bg-[#f7f8fd] border-b border-[#eaeaeb]">
              <div className="flex-1 min-w-[200px] p-[18px]">
                <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">Item / Service</span>
              </div>
              <div className="w-[120px] p-[18px]">
                <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">Quantity</span>
              </div>
              <div className="w-[140px] p-[18px]">
                <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">Rate</span>
              </div>
              <div className="w-[140px] p-[18px]">
                <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">Tax</span>
              </div>
              <div className="w-[140px] p-[18px]">
                <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">VAT</span>
              </div>
              <div className="w-[140px] p-[18px]">
                <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">Amount</span>
              </div>
              <div className="w-[60px] p-[18px]"></div>
            </div>

            {/* Table Row Content */}
            <div className="flex w-full border-b border-[#eaeaeb] bg-white text-[#d6d7dc]">
              <div className="flex-1 min-w-[200px] p-[18px]">
                <div className="flex items-center h-[50px] px-[12px] border border-[#eaeaeb] rounded-[8px]">Item Name</div>
              </div>
              <div className="w-[120px] p-[18px]">
                <div className="flex items-center h-[50px] px-[12px] border border-[#eaeaeb] rounded-[8px]">0.1</div>
              </div>
              <div className="w-[140px] p-[18px]">
                <div className="flex items-center h-[50px] px-[12px] border border-[#eaeaeb] rounded-[8px]">0.00</div>
              </div>
              <div className="w-[140px] p-[18px]">
                <div className="flex items-center justify-between h-[50px] px-[12px] border border-[#eaeaeb] rounded-[8px] cursor-pointer text-[#767d92]">
                  <span>Select tax</span>
                  <ChevronDownIcon />
                </div>
              </div>
              <div className="w-[140px] p-[18px]">
                <div className="flex items-center justify-between h-[50px] px-[12px] border border-[#eaeaeb] rounded-[8px] cursor-pointer text-[#767d92]">
                  <span>Select VAT</span>
                  <ChevronDownIcon />
                </div>
              </div>
              <div className="w-[140px] p-[18px]">
                <div className="flex items-center h-[50px] px-[12px] border border-[#eaeaeb] rounded-[8px]">0.00</div>
              </div>
              <div className="w-[60px] p-[18px] flex items-center justify-center cursor-pointer hover:bg-red-50 transition-colors">
                <TrashIcon />
              </div>
            </div>

            {/* Table Footer - Add Item */}
            <div className="flex w-full items-center p-[18px] bg-[#f7f8fd]">
               <button className="flex items-center gap-[8px] text-[#2446a8] hover:underline font-['Inter'] font-medium text-[16px] tracking-[-0.5px]">
                <PlusIcon />
                <span>Add Item</span>
              </button>
            </div>
          </div>

          {/* Summary / Totals block */}
          <div className="flex w-full justify-end mt-2">
            <div className="flex flex-col gap-[16px] w-[440px]">
              
              <div className="flex justify-between items-center h-[35px]">
                <span className="font-['Inter'] font-medium text-[16px] text-[#767d92] tracking-[-0.5px]">Subtotal</span>
                <span className="font-['Inter'] font-medium text-[16px] text-[#09122a] tracking-[-0.5px]">₦0.00</span>
              </div>
              
              <div className="flex justify-between items-center h-[35px]">
                <span className="font-['Inter'] font-medium text-[16px] text-[#767d92] tracking-[-0.5px]">Discount</span>
                <div className="flex items-center justify-end h-[35px] w-[91px] px-[12px] border border-[#eaeaeb] rounded-[8px]">
                  <span className="font-['Inter'] font-medium text-[16px] text-[#d6d7dc] tracking-[-0.5px]">0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center h-[35px]">
                <span className="font-['Inter'] font-medium text-[16px] text-[#767d92] tracking-[-0.5px]">Shipping Charges</span>
                <div className="flex items-center justify-end h-[35px] w-[91px] px-[12px] border border-[#eaeaeb] rounded-[8px]">
                  <span className="font-['Inter'] font-medium text-[16px] text-[#d6d7dc] tracking-[-0.5px]">0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center h-[35px]">
                <span className="font-['Inter'] font-medium text-[16px] text-[#767d92] tracking-[-0.5px]">Adjustments</span>
                <div className="flex items-center justify-end h-[35px] w-[91px] px-[12px] border border-[#eaeaeb] rounded-[8px]">
                  <span className="font-['Inter'] font-medium text-[16px] text-[#d6d7dc] tracking-[-0.5px]">0.00</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center h-[58px] py-[16px] border-t border-b border-[#eaeaeb] mt-[8px]">
                <span className="font-['Inter'] font-medium text-[16px] text-[#666666] tracking-[-0.5px]">Total</span>
                <span className="font-['Inter'] font-semibold text-[16px] text-[#0a0d14] tracking-[-0.5px]">₦0.00</span>
              </div>

            </div>
          </div>

          {/* Footer Customer Notes */}
          <div className="flex flex-col gap-[8px] w-full mt-4">
            <label className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
              Customer Note
            </label>
            <textarea 
              className="flex p-[12px] border border-[#eaeaeb] rounded-[16px] w-full min-h-[84px] outline-none focus:border-[#2446a8] resize-y font-['Inter'] text-[16px] text-[#09122a] placeholder:text-[#d6d7dc]"
              placeholder="Enter note..."
            />
            <button className="flex items-center gap-[4px] self-end mt-2 text-[#2446a8] hover:underline">
              <PlusIcon />
              <span className="font-['Inter'] font-normal text-[14px] leading-[22.4px] tracking-[-0.25px]">
                Terms & Conditions
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-[32px] py-[20px] bg-white border-t border-[#eaeaeb] ml-[256px]">
        {/* The ml-[256px] offset accommodates the global sidebar. Tweak if layout adjusts */}
        <button className="flex items-center justify-center h-[45px] px-[24px] bg-white border border-[#eaeaeb] rounded-[16px] text-[#09122a] font-['Inter'] font-medium text-[16px] hover:bg-gray-50 focus:outline-none transition-colors">
          Save as Draft
        </button>

        <div className="flex gap-[16px]">
          <button className="flex items-center justify-center h-[45px] px-[24px] bg-white border border-[#eaeaeb] rounded-[16px] text-[#09122a] font-['Inter'] font-medium text-[16px] hover:bg-gray-50 focus:outline-none transition-colors">
            Cancel
          </button>
          <button className="flex items-center justify-center h-[45px] px-[24px] bg-[#2446a8] rounded-[16px] text-white font-['Inter'] font-medium text-[16px] hover:bg-[#1b357e] focus:outline-none transition-colors">
            Save and Send
          </button>
        </div>
      </div>

    </div>
  );
}
"use client";

import React from "react";

const SalesReceiptsTable = () => {
    const tableData = [
        { period: "Today", price: "NGN0.00", receipt: "NGN0.00", due: "NGN0.00" },
        { period: "This Week", price: "NGN7000.00", receipt: "NGN7000.00", due: "NGN0.00" },
        { period: "This Month", price: "NGN7000.00", receipt: "NGN7000.00", due: "NGN0.00" },
        { period: "6 Months ago", price: "NGN7000.00", receipt: "NGN7000.00", due: "NGN0.00" },
    ];

    return (
        <div className="bg-white border border-[#eaeaeb] border-solid content-stretch flex flex-col gap-6 h-[375px] items-center px-4 py-5 relative rounded-2xl flex-[1.4] min-w-[300px]">
            <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Card Info.">
                <p className="font-['Inter'] font-semibold leading-[25.6px] not-italic relative shrink-0 text-base text-[#09122a] tracking-[-0.5px] w-full">
                    Sales, Receipts, and Dues
                </p>
                <p className="font-['Inter'] font-medium leading-[22.4px] relative shrink-0 text-sm text-[#767d92] tracking-[-0.25px] w-full">
                    Total sales, receipts, and dues over different period of time
                </p>
            </div>

            <div className="content-stretch flex flex-col gap-0 items-start overflow-clip relative rounded-lg shrink-0 w-full">
                {/* Table Header */}
                <div className="bg-[#f7f8fd] border-[#eaeaeb] border-b-[0.5px] border-solid content-stretch flex items-center relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px px-3 py-2.5 relative">
                        <p className="font-['Inter'] font-medium leading-[19.2px] not-italic relative shrink-0 text-[12px] text-[#767d92] tracking-[-0.25px] whitespace-nowrap">Price</p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px px-3 py-2.5 relative text-[12px]">
                        <p className="font-['Inter'] font-medium leading-[19.2px] not-italic relative shrink-0 text-[12px] text-[#767d92] tracking-[-0.25px] whitespace-nowrap">Price</p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px px-3 py-2.5 relative">
                        <p className="font-['Inter'] font-medium leading-[19.2px] not-italic relative shrink-0 text-[12px] text-[#767d92] tracking-[-0.25px] whitespace-nowrap">Receipt</p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px px-3 py-2.5 relative">
                        <p className="font-['Inter'] font-medium leading-[19.2px] not-italic relative shrink-0 text-[12px] text-[#767d92] tracking-[-0.25px] whitespace-nowrap">Due</p>
                    </div>
                </div>

                {/* Table Body */}
                {tableData.map((row, idx) => (
                    <div key={idx} className="bg-white border-[#eaeaeb] border-b-[0.5px] border-solid content-stretch flex items-center relative shrink-0 w-full">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-3 py-3 relative">
                            <p className="font-['Inter'] font-medium leading-[22.4px] not-italic relative shrink-0 text-[#09122a] text-sm tracking-[-0.25px] whitespace-nowrap">
                                {row.period}
                            </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-3 py-3 relative">
                            <p className="font-['Inter'] font-medium leading-[22.4px] not-italic relative shrink-0 text-[#09122a] text-sm tracking-[-0.25px] whitespace-nowrap">
                                {row.price}
                            </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-3 py-3 relative">
                            <p className="font-['Inter'] font-medium leading-[22.4px] not-italic relative shrink-0 text-[#09122a] text-sm tracking-[-0.25px] whitespace-nowrap">
                                {row.receipt}
                            </p>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px px-3 py-3 relative">
                            <p className="font-['Inter'] font-medium leading-[22.4px] not-italic relative shrink-0 text-[#09122a] text-sm tracking-[-0.25px] whitespace-nowrap">
                                {row.due}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalesReceiptsTable;

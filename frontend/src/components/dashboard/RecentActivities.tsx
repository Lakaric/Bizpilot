"use client";

import React from "react";

const imgCustomerIcon = "/assets/customer-icon.svg";
const imgInvoiceIcon = "/assets/invoice-circle.svg";
const imgReceiptIcon = "/assets/receipt-circle.svg";
const imgLineBlue = "/assets/line-blue.svg";
const imgLineYellow = "/assets/line-yellow.svg";

const RecentActivities = () => {
    const activities = [
        {
            title: "Customer added",
            description: (
                <>New Customer <span className="font-semibold">John</span> was added to your customer list.</>
            ),
            time: "10 min ago",
            icon: imgCustomerIcon,
            iconBg: "bg-[#fef5e7]",
            iconBorder: "border-[#fdecce]",
            lineColor: imgLineYellow,
        },
        {
            title: "Invoice Created",
            description: (
                <>Invoice <span className="font-semibold">#INV-1024</span> was created for ₦45,500</>
            ),
            time: "30 min ago",
            icon: imgInvoiceIcon,
            iconBg: "bg-[#eaeefa]",
            iconBorder: "border-[#d5def6]",
            lineColor: imgLineBlue,
        },
        {
            title: "Receipt Sent",
            description: (
                <>Receipt for invoice <span className="font-semibold">#INV-1024</span> was created for <span className="font-semibold">John Doe</span></>
            ),
            time: "30 min ago",
            icon: imgReceiptIcon,
            iconBg: "bg-[#ebf9eb]",
            iconBorder: "border-[#d7f4d7]",
            lineColor: null,
        }
    ];

    return (
        <div className="bg-white border border-[#eaeaeb] border-solid content-stretch flex flex-col items-start px-4 py-5 relative rounded-2xl h-[375px] flex-1 min-w-[300px]">
            <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-[241px]">
                        <p className="font-['Inter'] font-semibold leading-[25.6px] not-italic relative shrink-0 text-base text-[#09122a] tracking-[-0.5px] w-full">
                            Recent Activities
                        </p>
                        <p className="font-['Inter'] font-medium leading-[22.4px] relative shrink-0 text-sm text-[#767d92] tracking-[-0.25px] w-full">
                            Track all your activities in real-time
                        </p>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-[57px]">
                        <p className="font-['Inter'] font-medium leading-[22.4px] not-italic relative shrink-0 text-sm text-[#2446a8] whitespace-nowrap hover:underline cursor-pointer">
                            View All
                        </p>
                    </div>
                </div>

                <div className="content-stretch flex flex-col gap-0 items-start relative shrink-0 w-full">
                    {activities.map((activity, idx) => (
                        <div key={idx} className="content-stretch flex gap-4 items-start relative shrink-0 w-full mb-4 last:mb-0">
                            <div className="content-stretch flex flex-col gap-0 items-center overflow-clip relative shrink-0 w-[42px]">
                                <div className={`${activity.iconBg} ${activity.iconBorder} border border-solid content-stretch flex items-center justify-center overflow-clip p-[9px] relative rounded-full shrink-0 size-[42px]`}>
                                    <div className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center">
                                        <img src={activity.icon} alt="" className="block max-w-none size-full" />
                                    </div>
                                </div>
                                {activity.lineColor && (
                                    <div className="h-10 relative shrink-0 w-px">
                                        <img src={activity.lineColor} alt="" className="absolute inset-[-0.5px_0] block max-w-none size-full" />
                                    </div>
                                )}
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
                                <div className={`content-stretch flex flex-col gap-1 items-start justify-center relative shrink-0 w-full ${idx < 2 ? 'border-b border-[#e3e6e8] pb-4' : ''}`}>
                                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                                        <p className="font-['Inter'] font-medium leading-[22.4px] not-italic relative shrink-0 text-sm text-[#09122a] tracking-[-0.25px] whitespace-nowrap">
                                            {activity.title}
                                        </p>
                                        <p className="font-['SF_Pro'] font-medium leading-[16.32px] not-italic relative shrink-0 text-[12px] text-[#71828e] tracking-[-0.06px] whitespace-nowrap">
                                            {activity.time}
                                        </p>
                                    </div>
                                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                                        <p className="font-['Inter'] font-medium leading-[19.2px] relative shrink-0 text-[12px] text-[#767d92] w-full">
                                            {activity.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentActivities;

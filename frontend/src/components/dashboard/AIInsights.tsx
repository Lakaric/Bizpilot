"use client";

import React from "react";

const imgBankNoteIcon = "/assets/bank-note.svg";
const imgTrendUpIcon = "/assets/trend-up.svg";
const imgHelpOctagonIcon = "/assets/help-octagon.svg";

const AIInsights = () => {
    const insights = [
        {
            title: "Cash flow forecast",
            icon: imgBankNoteIcon,
            iconBg: "bg-[#ebf9eb]",
            showView: true
        },
        {
            title: "Spending Trend",
            icon: imgTrendUpIcon,
            iconBg: "bg-[#fef5e7]",
            showView: false
        },
        {
            title: "Smart Insight",
            icon: imgHelpOctagonIcon,
            iconBg: "bg-[#d6d9df]",
            showView: true
        }
    ];

    return (
        <div className="bg-white border border-[#eaeaeb] border-solid content-stretch flex flex-col h-[353px] items-start px-4 py-5 relative rounded-2xl flex-1 min-w-[300px]">
            <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full" data-name="Card Info.">
                    <p className="font-['Inter'] font-semibold leading-[25.6px] not-italic relative shrink-0 text-base text-[#09122a] tracking-[-0.5px] w-full">
                        AI Insights
                    </p>
                    <p className="font-['Onest'] font-medium leading-[19.6px] relative shrink-0 text-sm text-[#767d92] tracking-[-0.07px] w-full">
                        Turn sales and receipts data into actionable insights.
                    </p>
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
                    {insights.map((insight, idx) => (
                        <div key={idx} className="bg-[#f7f8fd] content-stretch flex gap-4 items-center p-3 relative rounded-lg shrink-0 w-full">
                            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
                                <div className="content-stretch flex gap-3 items-center relative shrink-0">
                                    <div className={`${insight.iconBg} content-stretch flex items-center justify-center overflow-clip p-1.5 relative rounded-full shrink-0 size-8`}>
                                        <div className="overflow-clip relative shrink-0 size-[20px] flex items-center justify-center">
                                            <img src={insight.icon} alt="" className="block max-w-none size-full" />
                                        </div>
                                    </div>
                                    <div className="content-stretch flex flex-col gap-0 items-start justify-center relative shrink-0">
                                        <p className="font-['Inter'] font-medium leading-[22.4px] not-italic relative shrink-0 text-sm text-[#09122a] tracking-[-0.25px] whitespace-nowrap">
                                            {insight.title}
                                        </p>
                                    </div>
                                </div>
                                {insight.showView && (
                                    <div className="content-stretch flex items-center relative shrink-0 w-[30px]">
                                        <p className="font-['Inter'] font-medium leading-[19.5px] not-italic relative shrink-0 text-[13px] text-[#2446a8] whitespace-nowrap hover:underline cursor-pointer">
                                            View
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AIInsights;

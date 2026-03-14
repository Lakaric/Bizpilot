"use client";

import React from "react";
import StatsCard from "@/components/dashboard/StatsCard";
import UpgradePlanButton from "@/components/dashboard/UpgradePlanButton";
import FinancialOverview from "@/components/dashboard/FinancialOverview";
import AIInsights from "@/components/dashboard/AIInsights";
import SalesReceiptsTable from "@/components/dashboard/SalesReceiptsTable";
import RecentActivities from "@/components/dashboard/RecentActivities";

// ----------------------------------------------------------------------
// Icon Assets from Figma
// ----------------------------------------------------------------------
const imgIcon3 = "/assets/sales-icon.svg"; // arrow-circle-broken-up-right (Sales)
const imgIcon4 = "/assets/invoice-icon.svg"; // notification-text (Invoice)
const imgIcon5 = "/assets/expenses-icon.svg"; // arrow-circle-broken-down-left (Expenses)
const imgIcon6 = "/assets/outstanding-icon.svg"; // cube-01 (Outstanding)

const DashboardPage = () => {
  return (
    <div className="content-stretch flex flex-col gap-0 items-start relative shrink-0 max-w-[1104px] w-full">
      {/* Top Welcome Section */}
      <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full mb-[26px]">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-0 items-start relative shrink-0 w-[272px]">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <h1 className="font-['Inter'] font-semibold leading-[38.4px] not-italic relative shrink-0 text-2xl text-[#122354] tracking-[-0.24px] whitespace-nowrap">
                Welcome to BizPilot 👋
              </h1>
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <p className="font-['Inter'] font-medium leading-[25.6px] not-italic relative shrink-0 text-base text-[#767d92] tracking-[-0.5px] whitespace-nowrap">
                All your business reports in one place.
              </p>
            </div>
          </div>
          <UpgradePlanButton />
        </div>

        {/* Stats Grid */}
        <div className="content-stretch flex flex-wrap gap-5 items-center relative shrink-0 w-full">
          <StatsCard
            title="Sales this week"
            amount="NGN0"
            icon={<img src={imgIcon3} alt="" className="block max-w-none size-6 object-contain" />}
            iconBg="bg-[#ebf9eb]"
          />
          <StatsCard
            title="Invoice Sent"
            amount="NGN0"
            icon={<img src={imgIcon4} alt="" className="block max-w-none size-6 object-contain" />}
            iconBg="bg-[#eaeefa]"
          />
          <StatsCard
            title="Expenses"
            amount="NGN0"
            icon={<img src={imgIcon5} alt="" className="block max-w-none size-6 object-contain" />}
            iconBg="bg-[#fde8e8]"
          />
          <StatsCard
            title="Outstanding"
            amount="NGN0"
            icon={<img src={imgIcon6} alt="" className="block max-w-none size-6 object-contain" />}
            iconBg="bg-[#fef5e7]"
          />
        </div>
      </div>

      {/* Rows Section */}
      <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
        {/* Row 1: Chart and Insights */}
        <div className="content-stretch flex flex-wrap lg:flex-nowrap gap-6 items-start relative shrink-0 w-full">
          <FinancialOverview />
          <AIInsights />
        </div>

        {/* Row 2: Table and Activities */}
        <div className="content-stretch flex flex-wrap lg:flex-nowrap gap-6 items-start relative shrink-0 w-full pb-10">
          <SalesReceiptsTable />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
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

import React from 'react'
import DashboardHeader from '@/components/dashboard/DashboardHeader'
import StatsCard from '@/components/dashboard/StatsCard'
import ChecklistCard from '@/components/dashboard/ChecklistCard'

// ----------------------------------------------------------------------
// Icons for Stats
// ----------------------------------------------------------------------

const UpRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M7 17 17 7" />
    <path d="m7 7h10v10" />
  </svg>
);

const InvoiceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2446a8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
    <path d="M10 9H8" />
  </svg>
);

const ExpensesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m17 7-10 10" />
    <path d="M17 17H7V7" />
  </svg>
);

const CubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#935f06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21 8-9-4-9 4v8l9 4 9-4V8z" />
    <path d="M12 22V12" />
    <path d="m21 8-9 4-9-4" />
  </svg>
);

// ----------------------------------------------------------------------
// Icons for Checklist
// ----------------------------------------------------------------------

const BookOpenChecklistIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfc] pl-[256px]">
      <DashboardHeader />

      <main className="flex-1 p-8 w-full max-w-[1200px] flex flex-col gap-10 overflow-hidden">
        {/* Welcome Section */}
        <div className="flex flex-col gap-1">
          <h1 className="font-['Inter'] font-semibold text-2xl text-[#122354] tracking-tight">
            Welcome to BizPilot 👋
          </h1>
          <p className="font-['Inter'] font-medium text-base text-[#767d92] tracking-tight">
            Let’s get your Bizpilot workspace ready.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-nowrap gap-5 w-full overflow-hidden">
          <StatsCard
            title="Sales this week"
            amount="NGN0"
            icon={<UpRightIcon />}
            iconBg="bg-[#ebf9eb]"
          />
          <StatsCard
            title="Invoice Sent"
            amount="NGN0"
            icon={<img src={imgIcon4} alt="" className="block max-w-none size-6 object-contain" />}
            icon={<InvoiceIcon />}
            iconBg="bg-[#eaeefa]"
          />
          <StatsCard
            title="Expenses"
            amount="NGN0"
            icon={<img src={imgIcon5} alt="" className="block max-w-none size-6 object-contain" />}
            icon={<ExpensesIcon />}
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
            icon={<CubeIcon />}
            iconBg="bg-[#fef5e7]"
          />
        </div>

        {/* Checklist Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-['Inter'] font-semibold text-[28px] text-[#122354] tracking-tight leading-tight">
              Quick Start Checklist
            </h2>
            <p className="font-['Inter'] font-medium text-base text-[#767d92] tracking-tight">
              Complete these quick steps to start managing your Business smarter with AI.
            </p>
          </div>

          <div className="flex flex-nowrap gap-[20px] w-full">
            <ChecklistCard
              step="Step 1"
              stepNumber="Step 1"
              status="Pending"
              title="Add your First Customer"
              description="Keep all customers organized in one place"
              buttonText="Add Customer"
              icon={<BookOpenChecklistIcon />}
              iconBg="bg-[#eaeefa]"
              aiSuggestion="You can Import customer’s contact from Google Contacts or CSV."
            />
            <ChecklistCard
              step="Step 1"
              stepNumber="Step 1"
              status="Pending"
              title="Create your first Invoice"
              description="Send your first Invoice with AI assistance."
              buttonText="Create Invoice"
              icon={<BookOpenChecklistIcon />}
              iconBg="bg-[#e6fbfe]"
              aiSuggestion="We can pre-fill services based on your industry."
              variant="secondary"
            />
            <ChecklistCard
              step="Step 1"
              stepNumber="Step 1"
              status="Pending"
              title="Generate Receipt"
              description="Create sales receipt"
              buttonText="Create Receipt"
              icon={<BookOpenChecklistIcon />}
              iconBg="bg-[#ebf9eb]"
              aiSuggestion="Pre-fill receipt details based on your business type."
              variant="secondary"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
export default DashboardPage

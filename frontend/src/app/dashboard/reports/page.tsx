"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// ----------------------------------------------------------------------
// Icon Components
// ----------------------------------------------------------------------

const CoinsStackedIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="8" cy="12" r="4" />
    <circle cx="16" cy="10" r="4" />
    <circle cx="12" cy="16" r="4" />
  </svg>
);

const WalletIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M2 8h20" />
    <path d="M16 12h4" />
  </svg>
);

const TrendUpIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 7-8.5 8.5-4-4L2 17" />
    <path d="M16 7h6v6" />
  </svg>
);

const ReceiptCheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 2v20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2V2l-2 2-2-2-2 2-2-2-2 2-2-2-2 2Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ChevronDownIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const ClipboardEmptyIcon = () => (
  <svg
    width="79"
    height="79"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#868c98]"
  >
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  </svg>
);

// ----------------------------------------------------------------------
// Analytics Card
// ----------------------------------------------------------------------

type AnalyticsCardProps = {
  label: string;
  value: string;
  subtitle: string;
  subtitleLink?: boolean;
  icon: React.ReactNode;
};

function AnalyticsCard({
  label,
  value,
  subtitle,
  subtitleLink,
  icon,
}: AnalyticsCardProps) {
  return (
    <div className="flex flex-1 min-w-0 items-center justify-between rounded-2xl border border-[#e8e9ed] bg-white p-5">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-[14px] font-medium leading-[19.6px] tracking-[-0.07px] text-[#7d8082]">
          {label}
        </p>
        <p className="text-[20px] font-semibold leading-8 tracking-[-1px] text-[#323334]">
          {value}
        </p>
        <p
          className={`text-[14px] font-normal leading-[22.4px] tracking-[-0.25px] ${
            subtitleLink ? "text-[#1b357e] underline" : "text-[#666]"
          }`}
        >
          {subtitle}
        </p>
      </div>
      <div className="flex shrink-0 items-center justify-center overflow-clip rounded-full bg-[#e6fbfe] p-[5px] size-10">
        {icon}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Chart data
// ----------------------------------------------------------------------

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const financialOverviewData = MONTHS.map((month) => ({ month, value: 0 }));

const expenseBreakdownData = [{ name: "Expenses", value: 1, color: "#e6fbfe" }];

// ----------------------------------------------------------------------
// Reports Page
// ----------------------------------------------------------------------

export default function ReportsPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-[20px] font-medium leading-normal text-[#0a0d14]">
          Report & Analytics
        </h1>
        <p className="text-[16px] font-normal leading-normal text-[#666]">
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Analytics Cards */}
      <div className="flex gap-[19px]">
        <AnalyticsCard
          label="Total Sales"
          value="NGN0.00"
          subtitle="+0% vs last month"
          icon={<CoinsStackedIcon />}
        />
        <AnalyticsCard
          label="Total Expenses"
          value="NGN0.00"
          subtitle="+0% vs last month"
          icon={<WalletIcon />}
        />
        <AnalyticsCard
          label="Net Profit"
          value="NGN0.00"
          subtitle="+0% vs last month"
          icon={<TrendUpIcon />}
        />
        <AnalyticsCard
          label="Outstanding Invoice"
          value="NGN0.00"
          subtitle="0 invoice pending"
          subtitleLink
          icon={<ReceiptCheckIcon />}
        />
      </div>

      {/* Two-Column Content Grid */}
      <div className="flex gap-6">
        {/* Left Column */}
        <div className="flex flex-[1.4] flex-col gap-6">
          {/* Financial Overview */}
          <div className="overflow-clip rounded-2xl border border-[#eaeaeb] bg-[#fcfcfc] px-4 py-5">
            <div className="mb-9 flex w-full items-start justify-between">
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="text-[16px] font-semibold leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                  Financial Overview
                </p>
                <p className="text-[14px] font-medium leading-[22.4px] tracking-[-0.25px] text-[#767d92]">
                  View your recent financial records
                </p>
              </div>
              <div className="flex shrink-0 items-center justify-center gap-2 rounded-[20px] border border-[#eaeaeb] bg-[#fafafa] px-3 py-2">
                <span className="text-[14px] font-medium leading-[22.4px] tracking-[-0.25px] text-[#09122a]">
                  Last 6 month
                </span>
                <ChevronDownIcon size={20} />
              </div>
            </div>
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={financialOverviewData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eaeaeb" vertical={false} />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fontWeight: 600, fill: "#767d92" }}
                  />
                  <YAxis
                    domain={[0, 5000]}
                    tickCount={6}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fontWeight: 600, fill: "#767d92" }}
                  />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sales, Receipts, and Dues */}
          <div className="flex h-[300px] flex-col items-center justify-center gap-4 rounded-2xl border border-[#eaeaeb] bg-white px-4 py-5">
            <div className="flex w-full flex-col gap-1">
              <p className="text-[16px] font-semibold leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                Sales, Receipts, and Dues
              </p>
              <p className="text-[14px] font-medium leading-[22.4px] tracking-[-0.25px] text-[#767d92]">
                Total sales, receipts, and dues over different period of time
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-4">
              <ClipboardEmptyIcon />
              <p className="text-[14px] font-medium leading-[22.4px] tracking-[-0.25px] text-[#868c98]">
                No Record
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Expense Breakdown */}
          <div className="flex flex-col gap-6 rounded-2xl border border-[#eaeaeb] bg-white px-4 py-5 h-[370px]">
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-semibold leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                Expense Breakdown
              </p>
              <p className="text-[14px] font-medium leading-[19.6px] tracking-[-0.07px] text-[#767d92]">
                Track expenses and uncover smarter financial insights.
              </p>
            </div>
            <div className="relative flex h-[180px] items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseBreakdownData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {expenseBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <p className="text-[20px] font-bold leading-8 tracking-[-1px] text-[#09122a]">
                  ₦0.00
                </p>
                <p className="text-[14px] font-medium leading-4 text-[#767d92] opacity-85">
                  Expenses
                </p>
              </div>
            </div>
          </div>

          {/* Top Customers by Sales */}
          <div className="flex h-[300px] flex-col items-center justify-center gap-4 rounded-2xl border border-[#eaeaeb] bg-white px-4 py-5">
            <div className="flex w-full flex-col gap-1">
              <p className="text-[16px] font-semibold leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                Top Customers by Sales
              </p>
              <p className="text-[14px] font-medium leading-[22.4px] tracking-[-0.25px] text-[#767d92]">
                Track high paying customers
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-4">
              <ClipboardEmptyIcon />
              <p className="text-[14px] font-medium leading-[22.4px] tracking-[-0.25px] text-[#868c98]">
                No Record
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

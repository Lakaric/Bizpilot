"use client";

import React from "react";
import Header from "./Header";
import { useSidebar } from "@/contexts/SidebarContext";

export default function DashboardMain({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();
  const marginLeft = isCollapsed ? "72px" : "256px";

  return (
    <main
      className="flex flex-1 flex-col min-h-screen transition-[margin] duration-200 ease-in-out bg-[#fcfcfc]"
      style={{ marginLeft }}
    >
      <Header />
      <div className="flex-1 px-8 py-6 min-w-0 flex flex-col items-center overflow-x-hidden">
        <div className="max-w-[1104px] w-full flex flex-col gap-[26px]">
          {children}
        </div>
      </div>
    </main>
  );
}

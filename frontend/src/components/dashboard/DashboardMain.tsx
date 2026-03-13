"use client";

import React from "react";
import Header from "./Header";
import { useSidebar } from "@/contexts/SidebarContext";

export default function DashboardMain({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();
  const marginLeft = isCollapsed ? "72px" : "256px";

  return (
    <main
      className="flex flex-1 flex-col min-h-screen transition-[margin] duration-200 ease-in-out"
      style={{ marginLeft }}
    >
      <Header />
      <div className="flex-1 bg-[#f8fafc] px-8 py-6 overflow-auto">{children}</div>
    </main>
  );
}

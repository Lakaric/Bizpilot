"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/contexts/SidebarContext";

// ----------------------------------------------------------------------
// Icon Components (using standard stroke/feather-like icons as per design)
// ----------------------------------------------------------------------

const ChevronsLeftIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17-5-5 5-5M18 17l-5-5 5-5" />
    </svg>
);

const HamburgerMenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

const BookOpenIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);

const ReceiptIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
        <path d="M16 8h-6" />
        <path d="M16 12h-8" />
        <path d="M16 16h-8" />
    </svg>
);

const DashboardIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
);

const UsersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const TimelineIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const ChevronDownIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size * 8 / 14} viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 1L7 7L13 1" />
    </svg>
);

const BarChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
    </svg>
);

const PieChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
);

const SettingsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);


// ----------------------------------------------------------------------
// Types and Reusable Menu Items Component
// ----------------------------------------------------------------------

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    hasDropdown?: boolean;
    isExpanded?: boolean;
    collapsed?: boolean;
    href?: string;
    onClick?: () => void;
    ariaControls?: string;
}

interface SubMenuItemProps {
    label: string;
    href: string;
}

const MenuItem = ({ icon, label, active = false, hasDropdown = false, isExpanded = false, collapsed = false, href, onClick, ariaControls }: MenuItemProps) => {
    const activeClasses = active
        ? "bg-[#1b357e] border-[#8790e2] border-[0.75px] rounded-[8px]"
        : "border border-transparent hover:bg-white/5 rounded-[8px]";

    if (collapsed) {
        const iconContent = (
            <div className="shrink-0 size-6 flex items-center justify-center text-white">
                {icon}
            </div>
        );
        const collapsedClasses = `flex items-center justify-center p-[12px] w-full shrink-0 text-white cursor-pointer transition-colors rounded-[8px] ${activeClasses}`;
        if (href) {
            return (
                <Link href={href} className={collapsedClasses} onClick={onClick} title={label} aria-label={label}>
                    {iconContent}
                </Link>
            );
        }
        return (
            <button
                type="button"
                className={collapsedClasses}
                onClick={onClick}
                title={label}
                aria-label={label}
            >
                {iconContent}
            </button>
        );
    }

    const content = (
        <>
            <div className="shrink-0 size-6 flex items-center justify-center">
                {icon}
            </div>
            <div className="flex-1 min-w-0 flex items-center">
                <span className="font-['Inter'] font-normal text-[20px] leading-[32px] tracking-[-1px] text-white truncate">
                    {label}
                </span>
            </div>
            {hasDropdown && (
                <div
                    className={`shrink-0 ml-auto flex items-center justify-center text-white transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                >
                    <ChevronDownIcon size={16} />
                </div>
            )}
        </>
    );

    const baseClasses = `flex items-center gap-[12px] p-[10px] w-full shrink-0 text-white cursor-pointer transition-colors ${activeClasses}`;

    if (href) {
        return (
            <Link href={href} className={baseClasses} onClick={onClick}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type="button"
            className={baseClasses}
            onClick={onClick}
            aria-expanded={hasDropdown ? isExpanded : undefined}
            aria-controls={ariaControls}
        >
            {content}
        </button>
    );
};

const SubMenuItem = ({ label, href }: SubMenuItemProps) => (
    <Link
        href={href}
        className="flex items-center pl-[38px] pr-[10px] py-[8px] w-full text-white font-['Inter'] font-normal text-[16px] leading-[24px] tracking-[-0.5px] hover:bg-white/5 rounded-[8px] transition-colors cursor-pointer"
    >
        {label}
    </Link>
);

// ----------------------------------------------------------------------
// Sidebar Component
// ----------------------------------------------------------------------

export default function Sidebar() {
    const pathname = usePathname();
    const { isCollapsed, setIsCollapsed } = useSidebar();
    const [salesDropdownOpen, setSalesDropdownOpen] = useState(false);
    const [bizbotDropdownOpen, setBizbotDropdownOpen] = useState(false);

    const handleCollapse = () => {
        setIsCollapsed(true);
        setSalesDropdownOpen(false);
        setBizbotDropdownOpen(false);
    };

    const handleExpand = () => {
        setIsCollapsed(false);
    };

    return (
        <div
            className={`bg-[#09122a] flex flex-col items-center justify-between p-[10px] h-screen fixed left-0 top-0 overflow-y-auto z-50 transition-[width] duration-200 ease-in-out ${isCollapsed ? "w-[72px]" : "w-[256px]"}`}
        >
            <div className="flex flex-col gap-[28px] items-start w-full">
                {/* Header */}
                <div className="border-b-[0.8px] border-solid border-white/20 flex gap-[8px] h-[80px] items-center p-[10px] w-full shrink-0">
                    {isCollapsed ? (
                        <button
                            onClick={handleExpand}
                            className="flex flex-col items-center justify-center w-full p-[12px] hover:bg-white/5 rounded-[6px] cursor-pointer transition-colors text-white"
                            aria-label="Expand menu"
                        >
                            <HamburgerMenuIcon />
                        </button>
                    ) : (
                        <>
                            <div className="flex flex-col items-center justify-center shrink-0">
                                <div className="size-[24px] relative bg-white/10 rounded overflow-hidden flex items-center justify-center">
                                    <Image
                                        alt="BizPilot logo"
                                        src="/assets/Bizbot-logo.png"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 flex items-center min-w-0">
                                <h1 className="font-['Inter'] font-bold text-[28px] leading-[44.8px] tracking-[-0.28px] text-white truncate">
                                    BizPilot
                                </h1>
                            </div>
                            <button
                                onClick={handleCollapse}
                                className="flex flex-col items-center justify-center border border-white/20 hover:bg-white/10 p-[5px] rounded-[6px] shrink-0 size-[24px] cursor-pointer transition-colors"
                                aria-label="Collapse menu"
                            >
                                <div className="size-[20px] flex items-center justify-center">
                                    <ChevronsLeftIcon />
                                </div>
                            </button>
                        </>
                    )}
                </div>

                {/* Navigation Items */}
                <div className="flex flex-col gap-[4px] items-start w-full">
                    {/* Top section */}
                    <div className="border-b-[0.8px] border-solid border-white/20 flex flex-col gap-[12px] pb-[8px] pt-[2px] w-full shrink-0">
                        <MenuItem collapsed={isCollapsed} icon={<BookOpenIcon />} label="Create invoice" href="/dashboard/invoice/create" active={pathname === "/dashboard/invoice/create"} />
                        <MenuItem collapsed={isCollapsed} icon={<ReceiptIcon />} label="Generate receipt" href="/dashboard/receipt/generate" active={pathname === "/dashboard/receipt/generate"} />
                    </div>

                    {/* Middle section */}
                    <div className="flex flex-col gap-[12px] py-[2px] w-full shrink-0">
                        <MenuItem collapsed={isCollapsed} active={pathname === "/dashboard"} icon={<DashboardIcon />} label="Dashboard" href="/dashboard" />
                        <MenuItem collapsed={isCollapsed} icon={<UsersIcon />} label="Customers" href="/dashboard/customers" active={pathname?.startsWith("/dashboard/customers")} />

                        {isCollapsed ? (
                            <MenuItem
                                collapsed
                                icon={<TimelineIcon />}
                                label="Sales"
                                href="/dashboard/sales/overview"
                                active={pathname?.startsWith("/dashboard/sales")}
                            />
                        ) : (
                            <div className="flex flex-col gap-[2px] w-full">
                                <MenuItem
                                    icon={<TimelineIcon />}
                                    label="Sales"
                                    hasDropdown
                                    isExpanded={salesDropdownOpen}
                                    ariaControls="sales-submenu"
                                    onClick={() => setSalesDropdownOpen(!salesDropdownOpen)}
                                />
                                {salesDropdownOpen && (
                                    <div id="sales-submenu" className="flex flex-col gap-[2px] w-full">
                                        <SubMenuItem label="Overview" href="/dashboard/sales/overview" />
                                        <SubMenuItem label="Invoices" href="/dashboard/sales/invoices" />
                                        <SubMenuItem label="Transactions" href="/dashboard/sales/transactions" />
                                    </div>
                                )}
                            </div>
                        )}

                        <MenuItem collapsed={isCollapsed} icon={<BarChartIcon />} label="Reports" href="/dashboard/reports" active={pathname === "/dashboard/reports"} />
                        <MenuItem collapsed={isCollapsed} icon={<PieChartIcon />} label="Expenses" href="/dashboard/expenses" active={pathname?.startsWith("/dashboard/expenses")} />

                        {isCollapsed ? (
                            <MenuItem
                                collapsed
                                icon={
                                    <div className="size-[24px] relative bg-white/10 rounded overflow-hidden flex items-center justify-center">
                                        <Image
                                            alt="Bizbot logo"
                                            src="/assets/Bizbot-logo.png"
                                            width={24}
                                            height={24}
                                            className="object-contain"
                                        />
                                    </div>
                                }
                                label="Bizbot"
                                href="/dashboard/bizbot/chat"
                                active={pathname?.startsWith("/dashboard/bizbot")}
                            />
                        ) : (
                            <div className="flex flex-col gap-[2px] w-full">
                                <MenuItem
                                    icon={
                                        <div className="size-[24px] relative bg-white/10 rounded overflow-hidden flex items-center justify-center">
                                            <Image
                                                alt="Bizbot logo"
                                                src="/assets/Bizbot-logo.png"
                                                width={24}
                                                height={24}
                                                className="object-contain"
                                            />
                                        </div>
                                    }
                                    label="Bizbot"
                                    hasDropdown
                                    isExpanded={bizbotDropdownOpen}
                                    ariaControls="bizbot-submenu"
                                    onClick={() => setBizbotDropdownOpen(!bizbotDropdownOpen)}
                                />
                                {bizbotDropdownOpen && (
                                    <div id="bizbot-submenu" className="flex flex-col gap-[2px] w-full">
                                        <SubMenuItem label="Chat" href="/dashboard/bizbot/chat" />
                                        <SubMenuItem label="Workflows" href="/dashboard/bizbot/workflows" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer Settings */}
            <div className="border-t-[0.75px] border-solid border-white/20 flex flex-col items-start py-[4px] w-full mt-auto pt-4 pb-2">
                <MenuItem collapsed={isCollapsed} icon={<SettingsIcon />} label="Settings" href="/dashboard/settings" active={pathname?.startsWith("/dashboard/settings")} />
            </div>
        </div>
    );
}

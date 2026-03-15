"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

// ----------------------------------------------------------------------
// Icon Components (matching Sidebar pattern)
// ----------------------------------------------------------------------

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
    </svg>
);

const BellDotIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
        <path d="M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673a9 9 0 0 1-.585-.665" />
        <circle cx="18" cy="8" r="3" fill="currentColor" stroke="none" />
    </svg>
);

const UserIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
);

const ChevronDownIcon = ({ size = 24 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
    </svg>
);

const LogOutIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
);

// ----------------------------------------------------------------------
// Header Component
// ----------------------------------------------------------------------

export default function Header() {
    const [searchValue, setSearchValue] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const { user, logout } = useAuthStore();

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        }
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownOpen]);

    const handleLogout = async () => {
        setDropdownOpen(false);
        await logout();
        router.push("/signin");
    };

    const initials = user?.name
        ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
        : null;

    return (
        <header className="bg-background border-b border-[#e2e2e2] flex items-center justify-between px-8 py-5 w-full">
            {/* Search bar */}
            <div className="bg-surface border border-[#eaeaeb] flex items-center gap-1.5 px-3 py-3 rounded-2xl w-full max-w-[446px]">
                <div className="shrink-0 size-5 flex items-center justify-center text-text-muted">
                    <SearchIcon />
                </div>
                <input
                    type="search"
                    placeholder="Q Search..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="flex-1 min-w-0 bg-transparent font-medium text-base leading-[25.6px] text-text placeholder:text-text-muted tracking-[-0.5px] outline-none"
                    aria-label="Search"
                />
            </div>

            {/* Right section: bell + avatar + chevron */}
            <div className="flex gap-5 items-center justify-end shrink-0">
                <button
                    type="button"
                    className="flex items-center justify-center size-6 text-text-muted hover:text-text transition-colors cursor-pointer"
                    aria-label="Notifications"
                >
                    <BellDotIcon />
                </button>

                <div ref={dropdownRef} className="relative flex gap-3 items-center">
                    <div className="size-[38px] rounded-full overflow-hidden bg-primary shrink-0 flex items-center justify-center text-white text-sm font-semibold">
                        {initials ?? <UserIcon />}
                    </div>
                    <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center justify-center size-6 text-text-muted hover:text-text transition-colors cursor-pointer"
                        aria-expanded={dropdownOpen}
                        aria-label="User menu"
                    >
                        <ChevronDownIcon size={24} />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-[#eaeaeb] rounded-xl shadow-lg z-50 overflow-hidden">
                            <div className="px-4 py-3 border-b border-[#eaeaeb]">
                                <p className="text-sm font-semibold text-text truncate">
                                    {user?.name ?? "User"}
                                </p>
                                <p className="text-xs text-text-muted truncate">
                                    {user?.email}
                                </p>
                            </div>
                            <div className="p-1">
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                >
                                    <LogOutIcon />
                                    Log out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

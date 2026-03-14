"use client";

import { useState } from "react";
import Image from "next/image";

const logoSrc = "/assets/Bizbot-logo.png";

function NavLink({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      className="text-center text-[16px] font-medium leading-[1.22] text-[#4b5162] hover:text-slate-900 w-full md:w-auto"
      href={href}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      className="inline-flex w-full md:w-auto items-center justify-center rounded-[8px] border border-[#abbced] px-[16px] py-[12px] text-[14px] font-semibold leading-[1.26] text-[#2e58d1] hover:bg-blue-50"
      href="#"
    >
      {children}
    </a>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      className="inline-flex w-full md:w-auto items-center justify-center rounded-[8px] bg-[#2e58d1] px-[16px] py-[12px] text-[14px] font-semibold leading-[1.26] text-white hover:bg-blue-700"
      href="#"
    >
      {children}
    </a>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full z-50 bg-white border-b border-slate-200">
      <div className="flex h-[82px] items-center px-[32px] mx-auto max-w-[1244px]">
        <div className="flex w-full items-center justify-between border-[#d2d5e2] py-[20px]">
          {/* Logo Group */}
          <div className="flex items-center gap-[40px]">
            <div className="flex items-center gap-[4px]">
              <Image
                alt="BizPilot logo"
                className="h-[28px] w-[28px]"
                height={28}
                src={logoSrc}
                width={28}
              />
              <span className="text-[24px] font-semibold leading-[34px] tracking-[-0.24px] text-[#1c1f25]">
                BizPilot
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-[32px]">
              <NavLink href="/#features">Features</NavLink>
              <NavLink href="/#pricing">Pricing</NavLink>
              <NavLink href="/#about">About Us</NavLink>
              <NavLink href="/#faq">FAQ</NavLink>
            </nav>
          </div>

          {/* Desktop Right Side Actions */}
          <div className="hidden md:flex items-center gap-[8px]">
            <SecondaryButton>Book a demo</SecondaryButton>
            <PrimaryButton>Start your free trial</PrimaryButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[83px] left-0 w-full bg-white border-b border-slate-200 shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-[24px] px-[32px] py-[32px]">
            <nav className="flex flex-col items-center gap-[24px] w-full">
              <NavLink>Features</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>About Us</NavLink>
              <NavLink>FAQ</NavLink>
            </nav>
            <div className="flex flex-col items-center gap-[12px] w-full mt-4">
              <SecondaryButton>Book a demo</SecondaryButton>
              <PrimaryButton>Start your free trial</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

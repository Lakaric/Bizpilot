"use client";
import Image from "next/image";
import * as React from "react";

const logoMarkSvg =
  "http://localhost:3845/assets/c34432854b18faceec5edf5e916747216dacdbb7.svg";

function FooterLink({
  children,
  href = "#",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      className="text-center text-[16px] font-medium leading-[1.22] text-white hover:text-white/80"
      href={href}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const [email, setEmail] = React.useState("");

  return (
    <footer className="w-full bg-[#1c1f25] px-[32px] pb-[112px] pt-[32px]">
      <div className="mx-auto flex w-full max-w-[1204px] flex-col gap-[34px]">
        <div className="flex w-full flex-col items-start justify-between gap-[24px] md:flex-row md:items-start">
          <div className="flex items-center gap-[4px]">
            <Image
              alt=""
              className="h-[19.85px] w-[20px]"
              height={20}
              src={logoMarkSvg}
              unoptimized
              width={20}
            />
            <span className="text-[24px] font-semibold leading-[34px] tracking-[-0.24px] text-white">
              BizPilot
            </span>
          </div>

          <div className="flex w-full max-w-[377px] flex-col gap-[10px] md:items-end">
            <div className="w-full text-[16px] font-medium leading-[33.6px] tracking-[-0.5px] text-[#f8f4f1] md:text-right">
              Stay updated with our latest news and tips
            </div>

            <form
              className="w-full rounded-[32px] bg-white px-[16px] py-[4px]"
              onSubmit={(e) => {
                e.preventDefault();
                // wire up later
              }}
            >
              <div className="flex w-full items-center justify-between gap-[12px]">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  className="h-[43.19px] w-full rounded-[88px] bg-transparent text-[16px] leading-[24px] text-[#120a0b] placeholder:text-[rgba(18,10,11,0.6)] focus:outline-none"
                  id="footer-email"
                  inputMode="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                />
                <button
                  className="shrink-0 rounded-[32px] bg-[#2e58d1] px-[20px] py-[12px] text-[16px] font-medium leading-[24px] text-white hover:bg-blue-700"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full">
          <div className="h-px w-full bg-white/10" />

          <div className="flex w-full flex-col items-start justify-between gap-[16px] pt-[14px] md:flex-row md:items-center">
            <div className="text-[16px] leading-[27.2px] text-[#d2d4da] opacity-50">
              © 2025 BizPilot AI All rights reserved.
            </div>

            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center justify-start gap-[8px] md:justify-end"
            >
              <FooterLink>Blog</FooterLink>
              <span className="text-[16px] font-medium leading-[20px] text-[#f8f4f1]">
                •
              </span>
              <FooterLink>Contact</FooterLink>
              <span className="text-[16px] font-medium leading-[20px] text-[#f8f4f1]">
                •
              </span>
              <FooterLink>Privacy Policy</FooterLink>
              <span className="text-[16px] font-medium leading-[20px] text-[#f8f4f1]">
                •
              </span>
              <FooterLink>Terms</FooterLink>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}


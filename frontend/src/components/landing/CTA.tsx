import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:py-24">
      <div className="relative overflow-hidden rounded-[25px] bg-[#2e58d1] px-6 py-16 text-center shadow-lg sm:px-12 md:px-16 md:py-20 lg:py-20">
        {/* Background shapes */}
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 lg:-translate-x-1/4">
          <Image
            src="/images/cta/bg-left.svg"
            alt=""
            width={438}
            height={440}
            className="h-auto w-[250px] opacity-60 md:w-[350px] md:opacity-100 lg:w-[438px]"
            priority
          />
        </div>
        <div className="pointer-events-none absolute right-0 top-1/2 translate-x-1/3 -translate-y-1/2 lg:translate-x-1/4">
          <Image
            src="/images/cta/bg-right.svg"
            alt=""
            width={436}
            height={428}
            className="h-auto w-[250px] opacity-60 md:w-[350px] md:opacity-100 lg:w-[436px]"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center gap-[24px]">
          <div className="flex h-[64px] w-[64px] items-center justify-center">
            <Image
              src="/images/cta/logo-white.svg"
              alt="BizPilot Logo"
              width={64}
              height={64}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex w-full flex-col items-center gap-[16px]">
            <h2 className="w-full text-center font-display text-[36px] font-semibold leading-[1.16] tracking-tight text-white md:text-[48px]">
              Run your Business the Smart Way!
            </h2>
            <div className="w-full px-4 sm:px-10 md:px-[80px]">
              <p className="text-center font-body text-[15px] font-medium leading-[1.6] text-[#fcfcfc] opacity-80 md:text-[16px]">
                Don’t juggle multiple tools. BizPilot gives you everything in one place, powered by AI to help your business grow faster and more sustainably.
              </p>
            </div>
          </div>
          <Link
            href="/signup"
            className="inline-flex h-[44px] w-[200px] items-center justify-center rounded-[8px] border border-[#abbced] bg-white px-4 py-3 font-body text-[14px] font-semibold text-[#2e58d1] transition-colors hover:bg-slate-50"
          >
            Try it now
          </Link>
        </div>
      </div>
    </section>
  );
}


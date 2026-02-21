import Image from "next/image";

const aiIconSrc = "/assets/Bizbot-logo.png";
const aiAutomationIcon = "/assets/hero/AI.png";
const unifiedHubIcon = "/assets/hero/Unified.png";
const coinsHandIcon = "/assets/hero/coins-hand.png";
const predictiveIcon = "/assets/hero/Icon.png";

function SmallEyebrowTag() {
  return (
    <div className="inline-flex items-center gap-[8px] rounded-[20px] border border-[#b6bccd] bg-white px-[16px] py-[8px] shadow-[0px_0px_1px_0px_rgba(44,58,114,0.05),0px_2px_6px_0px_rgba(44,58,114,0.05),0px_10px_18px_0px_rgba(58,76,146,0.1)]">
      <Image
        alt="BizPilot logo"
        className="h-[16px] w-[16px]"
        height={16}
        src={aiIconSrc}
        width={16}
      />
      <span className="text-center text-[16px] font-medium leading-[1.6] text-[#4b5162]">
        Run your Business Smarter with AI
      </span>
    </div>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      className="inline-flex items-center justify-center rounded-[8px] border border-[#abbced] px-[16px] py-[12px] text-[14px] font-semibold leading-[1.26] text-[#2e58d1] hover:bg-blue-50"
      href="#"
    >
      {children}
    </a>
  );
}

function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      className="inline-flex items-center justify-center rounded-[8px] bg-[#2e58d1] px-[16px] py-[12px] text-[14px] font-semibold leading-[1.26] text-white hover:bg-blue-700"
      href="#"
    >
      {children}
    </a>
  );
}

function FeatureItem({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="inline-flex items-center gap-[8px]">
      <Image
        alt=""
        className="h-[20px] w-[20px]"
        height={20}
        src={icon}
        width={20}
      />
      <span className="text-[20px] font-semibold leading-[28px] text-[#626981]">
        {text}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full bg-white px-[32px] pb-[80px] pt-[112px]">
      <div className="mx-auto flex w-full max-w-[1204px] flex-col items-center gap-[60px]">
        {/* Content wrapper */}
        <div className="flex w-full max-w-[860px] flex-col items-center gap-[40px]">
          {/* Text wrapper */}
          <div className="flex w-full flex-col items-center gap-[20px]">
            <SmallEyebrowTag />
            
            <h1 className="w-full text-center text-[48px] font-semibold leading-[1.16] text-[#1c1f25]">
              AI-Powered Analytics and Business Management for SMEs and SMBs
            </h1>

            <div className="w-full px-[80px]">
              <p className="text-center text-[16px] font-normal leading-[1.6] text-[#4b5162] opacity-80">
                BizPilot brings invoicing, CRM, accounting, and analytics
                together in one place. Automate routine work, predict late
                payments, and get the insights you need to grow.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-[8px]">
            <SecondaryButton>Book a demo</SecondaryButton>
            <PrimaryButton>Start your free trial</PrimaryButton>
          </div>
        </div>

        {/* Image and features */}
        <div className="flex flex-col gap-[32px]">
          <div className="h-[602px] w-[1204px] overflow-hidden rounded-[24px]">
            <Image
              alt="BizPilot AI-powered business management dashboard"
              className="h-full w-full object-cover"
              height={602}
              src="/assets/hero/hero-image.png"
              width={1204}
            />
          </div>

          {/* Feature items */}
          <div className="flex w-[1204px] items-center justify-center gap-[24px]">
            <FeatureItem icon={aiAutomationIcon} text="AI-powered automation" />
            <FeatureItem icon={unifiedHubIcon} text="Unified business hub" />
            <FeatureItem
              icon={coinsHandIcon}
              text="Simple, affordable pricing"
            />
            <FeatureItem icon={predictiveIcon} text="Predictive insights" />
          </div>
        </div>
      </div>
    </section>
  );
}


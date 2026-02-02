import Image from "next/image";

const logoMarkSvg =
  "http://localhost:3845/assets/c34432854b18faceec5edf5e916747216dacdbb7.svg";

function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      className="text-center text-[16px] font-medium leading-[1.22] text-[#4b5162] hover:text-slate-900"
      href="#"
    >
      {children}
    </a>
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

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="flex h-[82px] items-center px-[32px] mx-auto max-w-7xl">
        <div className="flex h-full w-full items-center justify-between  border-[#d2d5e2] py-[20px]">
          <div className="flex h-full items-center gap-[40px]">
            <div className="flex items-center gap-[4px]">
              <Image
                alt=""
                className="h-[19.85px] w-[20px]"
                height={20}
                src={logoMarkSvg}
                unoptimized
                width={20}
              />
              <span className="text-[24px] font-semibold leading-[34px] tracking-[-0.24px] text-[#1c1f25]">
                BizPilot
              </span>
            </div>

            <nav className="flex items-center gap-[32px]">
              <NavLink>Features</NavLink>
              <NavLink>Pricing</NavLink>
              <NavLink>About Us</NavLink>
              <NavLink>FAQ</NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-[8px]">
            <SecondaryButton>Book a demo</SecondaryButton>
            <PrimaryButton>Start your free trial</PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}


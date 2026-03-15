"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

const imgWhisk = "/assets/hero/hero-image.png";

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;

    setLoading(true);
    setError("");

    try {
      const { error: signInError } = await authClient.signIn.email({
        email: email.trim(),
        password,
        rememberMe,
      });

      if (signInError) {
        setError(signInError.message ?? "Invalid credentials. Please try again.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen w-full bg-white flex">
      {/* ── Left column: Form ── */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-[616px] flex flex-col gap-[40px] px-6 sm:px-10 lg:px-[95px] py-[104px]">

          {/* Back button */}
          <Link
            href="/"
            className="self-start inline-flex items-center justify-center w-[40px] h-[40px] bg-[#f2f2f2] rounded-[6px] hover:bg-[#e6e6e6] transition-colors"
            aria-label="Go back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
          </Link>

          {/* Heading */}
          <div className="flex flex-col gap-[8px]">
            <h1
              className="font-['Onest'] font-bold text-[32px] leading-[44.8px] tracking-[-0.16px] text-[#0c1727]"
            >
              Welcome back!
            </h1>
            <p className="font-['Inter'] font-medium text-[18px] leading-[25.2px] tracking-[-0.09px] text-[#7d8082]">
              Let&apos;s help you stay on top of your business.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-[40px] w-full">

            {/* Inputs */}
            <div className="flex flex-col gap-[24px] w-full">

              {/* Email */}
              <div className="flex flex-col gap-[8px]">
                <label
                  htmlFor="email"
                  className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]"
                >
                  Email or Phone number
                </label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  placeholder="Enter email or phone number"
                  className="w-full h-[50px] px-[12px] py-[10px] border border-[#eaeaeb] rounded-[8px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#0c1727] placeholder:text-[#d6d7dc] focus:outline-none focus:border-[#2446a8] transition-colors"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-[8px]">
                <label
                  htmlFor="password"
                  className="font-['Inter'] font-medium text-[14px] leading-[22.4px] tracking-[-0.25px] text-[#09122a]"
                >
                  Password
                </label>
                <div className="relative w-full">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                    placeholder="Enter Password"
                    className="w-full h-[50px] px-[12px] py-[10px] pr-[48px] border border-[#eaeaeb] rounded-[8px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#0c1727] placeholder:text-[#d6d7dc] focus:outline-none focus:border-[#2446a8] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] text-[#868c98] hover:text-[#0c1727] flex items-center justify-center transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                        <line x1="2" x2="22" y1="2" y2="22" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me / Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-[18px] h-[18px] rounded-[4px] border-2 border-[#767d92] accent-[#2446a8] cursor-pointer"
                  />
                  <span className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#09122a]">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#2446a8] hover:text-[#1d3a8e] transition-colors"
                >
                  Forgot password
                </Link>
              </div>
            </div>

            {error && (
              <p className="font-['Inter'] text-[14px] text-[#d21212] text-center">
                {error}
              </p>
            )}

            {/* Buttons and footer link */}
            <div className="flex flex-col gap-[24px] items-center w-full">
              <div className="flex flex-col gap-[16px] w-full">
                {/* Sign In */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-[56px] flex items-center justify-center rounded-[8px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] transition-colors ${
                    loading
                      ? "bg-[#7b93d4] text-white cursor-not-allowed"
                      : "bg-[#2446a8] hover:bg-[#1d3a8e] active:bg-[#162e7a] text-white"
                  }`}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>

                {/* Continue with Google */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={loading}
                  className="w-full h-[56px] flex items-center justify-center gap-[8px] bg-[#eaeefa] hover:bg-[#dbe4f8] active:bg-[#ccd3f4] transition-colors rounded-[8px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px] text-[#122354] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <GoogleIcon />
                  Continue with Google
                </button>
              </div>

              {/* Sign Up link */}
              <div className="flex items-center gap-[4px] font-['Inter'] font-medium text-[16px] leading-[25.6px] tracking-[-0.5px]">
                <span className="text-[#122354]">Don&apos;t have an account?</span>
                <Link
                  href="/signup"
                  className="text-[#2446a8] hover:text-[#1d3a8e] transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* ── Right column: Decorative panel (hidden on mobile) ── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center bg-[radial-gradient(131.23%_84.35%_at_41.17%_24.4%,#ffffff_0%,#fde2e4_35.71%,#f3e8ff_88.7%)]">
        {/* Background photo */}
        <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-90">
          <Image
            src={imgWhisk}
            alt="Business professional"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Floating feature card */}
        <div className="absolute bottom-[12%] left-[8%] right-[8%] max-w-[380px] bg-white rounded-[21.6px] p-[21.6px] shadow-[0px_8px_10px_0px_rgba(0,0,0,0.14)] z-10">
          <div className="flex flex-col gap-[7.2px]">
            <p className="font-['Inter'] font-semibold text-[25.2px] leading-[40.32px] tracking-[-0.252px]">
              <span className="font-['Protest_Riot'] text-[#2446a8]">Smart Invoicing</span>
              <span className="text-[#122354]">{" "}– Create, Remind &amp; Track with Ease</span>
            </p>
            <p className="font-['Inter'] font-medium text-[14.4px] leading-[23.04px] tracking-[-0.45px] text-[#767d92]">
              BizPilot helps business owners manage, track and simplify their finances
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
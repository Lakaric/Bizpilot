'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <Link href="/" className="text-xl font-bold text-slate-900">
              BizPilot
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {['Products', 'Resources', 'Support', 'Pricing'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-slate-900 font-medium hover:text-primary transition-colors text-sm">
              Log In
            </Link>
            <Link href="/signup" className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/20">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Products', 'Resources', 'Support', 'Pricing'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 hover:text-primary hover:bg-slate-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-2 border-t border-gray-100 mt-2">
              <Link href="/login" className="text-center text-slate-900 font-medium px-3 py-2">
                Log In
              </Link>
              <Link href="/signup" className="text-center bg-primary text-white px-3 py-2 rounded-md font-medium mx-2">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

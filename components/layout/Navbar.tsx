"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import QuoteModal from "@/components/ui/QuoteModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed px-2 pt-2 top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[linear-gradient(to_bottom,var(--color-white)_0%,var(--color-white)_50%,transparent_50%,transparent_100%)]" : "bg-transparent"
        }`}
      >
        <div
          className={`rounded-3xl transition-all duration-300 ${
            scrolled ? "bg-navy backdrop-blur-md shadow-2xl" : "bg-transparent"
          }`}
        >
          <nav className="max-w-[1400px] mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/logo.png" alt="IYKE Chris Computers" width={86} height={23} priority />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      pathname === link.href
                        ? "bg-white text-navy hover:text-navy/80 hover:bg-white/80 shadow-lg"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => setQuoteOpen(true)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-white mb-1" />
              <div className="w-5 h-0.5 bg-white mb-1" />
              <div className="w-5 h-0.5 bg-white" />
            </button>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden bg-[#1a1a1e]/98 backdrop-blur-md border-t border-white/5 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-sm text-slate-300 hover:text-white border-b border-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { setMenuOpen(false); setQuoteOpen(true); }}
                className="mt-4 w-full text-center px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-full transition-colors"
              >
                Get a Quote
              </button>
            </div>
          )}
        </div>
      </header>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}

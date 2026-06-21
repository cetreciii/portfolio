"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#about", label: "About me" },
  { href: "/#work", label: "Projects" },
  { href: "/#articles", label: "Articles" },
  { href: "/#apps", label: "Published apps" },
  { href: "/#opensource", label: "Open source" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsOpen(false); };
    const onResize = () => { if (window.innerWidth >= 640) setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,0,0,0.06)] bg-white/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <span className="inline-block size-6 rounded-md bg-gradient-to-br from-[#E5271C] to-[#F04A40] shrink-0" />
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold tracking-tight text-ink leading-tight">Igor Tarantino</span>
            <span className="text-[10px] text-ink-mute leading-tight">iOS & visionOS Developer · Indie builder</span>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-6 text-[15px] font-medium text-[rgba(0,0,0,0.7)]">
          {/* Desktop links */}
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hidden sm:inline hover:text-ink transition-colors"
            >
              {label}
            </Link>
          ))}

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center rounded-md bg-accent px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            ✉️ Send a message
          </Link>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex h-9 w-9 items-center justify-center rounded-lg text-ink transition-colors hover:bg-canvas-warm"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu — slide down */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[rgba(0,0,0,0.06)] bg-white px-6 pb-5 pt-2 flex flex-col">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="border-b border-[rgba(0,0,0,0.06)] py-3.5 text-[16px] font-medium text-ink-soft transition-colors hover:text-ink last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-accent-dark"
            onClick={() => setIsOpen(false)}
          >
            ✉️ Send a message
          </Link>
        </div>
      </div>
    </header>
  );
}

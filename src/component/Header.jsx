import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { Button } from "./ui/Button";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });

  const navRef = useRef(null);
  const linkRefs = useRef({});

  /* ---- Scroll shadow on header ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Scrollspy via IntersectionObserver ---- */
  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    // Track visibility ratios per id, pick the most visible one near viewport top
    const ratios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        // Choose the section with the highest ratio that is at least somewhat visible
        let bestId = null;
        let bestRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        // Near the very top of page always prefer "top"
        if (window.scrollY < 120) bestId = "top";

        // Near the very bottom always prefer last section
        const nearBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 80;
        if (nearBottom) bestId = "contact";

        if (bestId) setActive(`#${bestId}`);
      },
      {
        // Slightly offset so a section becomes active when it reaches ~top of viewport
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Also listen on scroll to handle top/bottom edge cases (rootMargin can miss)
    const onScroll = () => {
      if (window.scrollY < 120) setActive("#top");
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (nearBottom) setActive("#contact");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ---- Animated pill positioning ---- */
  useLayoutEffect(() => {
    const el = linkRefs.current[active];
    const container = navRef.current;
    if (!el || !container) {
      setPill((p) => ({ ...p, opacity: 0 }));
      return;
    }
    const elRect = el.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    setPill({
      left: elRect.left - cRect.left,
      width: elRect.width,
      opacity: 1,
    });
  }, [active, scrolled]);

  // Recompute pill on resize
  useEffect(() => {
    const onResize = () => {
      const el = linkRefs.current[active];
      const container = navRef.current;
      if (!el || !container) return;
      const elRect = el.getBoundingClientRect();
      const cRect = container.getBoundingClientRect();
      setPill({
        left: elRect.left - cRect.left,
        width: elRect.width,
        opacity: 1,
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  const handleNav = (href) => {
    setOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/60 shadow-[0_4px_24px_-12px_rgba(37,99,235,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#top");
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-sm font-mono">P.</span>
          </div>
          <span className="font-semibold tracking-tight text-slate-900 text-[17px]">
            Prabhu V
          </span>
        </a>

        {/* Desktop nav with animated pill */}
        <nav
          ref={navRef}
          className="hidden lg:flex relative items-center p-1 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/80 shadow-sm"
        >
          {/* Sliding pill indicator */}
          <span
            aria-hidden="true"
            className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 shadow-md shadow-blue-500/30 transition-[left,width,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              left: `${pill.left}px`,
              width: `${pill.width}px`,
              opacity: pill.opacity,
            }}
          />

          {NAV.map((n) => {
            const isActive = active === n.href;
            return (
              <a
                key={n.href}
                href={n.href}
                ref={(el) => (linkRefs.current[n.href] = el)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(n.href);
                }}
                className={`relative z-10 px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            onClick={() => handleNav("#contact")}
            className="rounded-full bg-slate-900 hover:bg-blue-600 text-white h-10 px-5 shadow-md hover:shadow-xl hover:shadow-blue-500/30 transition-all group"
          >
            Let&rsquo;s talk
            <LuArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <LuX className="w-5 h-5" /> : <LuMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-xl pb-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-2">
            {NAV.map((n) => {
              const isActive = active === n.href;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(n.href);
                  }}
                  className={`relative flex items-center gap-3 px-4 py-3 text-[15px] font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`w-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "h-5 bg-gradient-to-b from-blue-600 to-sky-500"
                        : "h-0 bg-transparent"
                    }`}
                  />
                  {n.label}
                </a>
              );
            })}
            <Button
              onClick={() => handleNav("#contact")}
              className="w-full mt-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white h-11"
            >
              Let&rsquo;s talk
              <LuArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

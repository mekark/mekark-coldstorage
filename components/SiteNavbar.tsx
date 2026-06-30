"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero-section", pageHref: "/" },
  { label: "Portfolio", href: "#epc-card", pageHref: "/#epc-card" },
  { label: "Industries", href: "#sector-coverage", pageHref: "/#sector-coverage" },
  { label: "Why Choose", href: "#why-mekark", pageHref: "/#why-mekark" },
  { label: "Testimonials", href: "#testimonials", pageHref: "/#testimonials" },
];

const moreLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "Career", href: "/career", external: true },
  { label: "Data Centers", href: "https://mekark-datacenter.vercel.app/", external: true },
  { label: "Automotive", href: "https://mekark-automotive.vercel.app/", external: true },
  { label: "Textile", href: "https://mekark-textile.vercel.app/", external: true },
  { label: "Industrial Tanks", href: "https://mekark-tanks.vercel.app/", external: true },
  { label: "Logistics & Warehousing", href: "https://logics-ten.vercel.app/", external: true },
  { label: "Electronics", href: "https://mekark-electronics.vercel.app/", external: true },
  { label: "Windmill & Renewable Energy", href: "https://mekark-windmill.vercel.app/", external: true },
  { label: "MEP & Utility Systems", href: "https://mep-mekark.vercel.app/", external: true },
  { label: "Food", href: "https://mekark-food.vercel.app/", external: true },
  { label: "Factories", href: "https://mekark-factories.vercel.app/", external: true },
  { label: "Blog", href: "https://blog.mekark.com/", external: true },
];

type SiteNavbarProps = {
  variant?: "hero" | "page";
};

export default function SiteNavbar({ variant = "hero" }: SiteNavbarProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [moreMenuPosition, setMoreMenuPosition] = useState({ top: 0, left: 0 });
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const moreCloseTimeoutRef = useRef<number | null>(null);

  const openMoreMenu = () => {
    if (moreCloseTimeoutRef.current) {
      window.clearTimeout(moreCloseTimeoutRef.current);
      moreCloseTimeoutRef.current = null;
    }
    setMoreOpen(true);
  };

  const scheduleCloseMoreMenu = () => {
    moreCloseTimeoutRef.current = window.setTimeout(() => {
      setMoreOpen(false);
    }, 120);
  };

  useEffect(() => {
    if (!moreOpen || !moreButtonRef.current) return;

    const updatePosition = () => {
      const rect = moreButtonRef.current!.getBoundingClientRect();
      setMoreMenuPosition({
        top: rect.bottom,
        left: rect.left + rect.width / 2,
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [moreOpen]);

  useEffect(
    () => () => {
      if (moreCloseTimeoutRef.current) {
        window.clearTimeout(moreCloseTimeoutRef.current);
      }
    },
    [],
  );

  const resolveHref = (item: (typeof navItems)[number]) =>
    isHomePage ? item.href : item.pageHref;

  const headerClass =
    variant === "hero"
      ? "relative z-50 h-[86px] flex items-center justify-between overflow-visible"
      : "relative z-[100] h-[86px] flex items-center justify-between overflow-visible";

  const navLinkClass =
    "text-white text-[15px] font-medium transition-all duration-300 hover:text-white/70";

  return (
    <>
      <header className={headerClass}>
      <Link href="/" className="relative w-[130px] h-[60px] shrink-0">
        <Image
          src="/Images/LogoMekark.png"
          alt="Mekark"
          fill
          className="object-contain object-left"
        />
      </Link>

      <nav className="hidden lg:flex items-center gap-10">
        {navItems.map((item) => (
          <a key={item.label} href={resolveHref(item)} className={navLinkClass}>
            {item.label}
          </a>
        ))}

        <div
          className="relative"
          onMouseEnter={openMoreMenu}
          onMouseLeave={scheduleCloseMoreMenu}
        >
          <button
            ref={moreButtonRef}
            type="button"
            className={`flex items-center gap-1 ${navLinkClass}`}
            aria-expanded={moreOpen}
            aria-haspopup="true"
          >
            More
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
            />
          </button>

          {typeof document !== "undefined" &&
            createPortal(
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      position: "fixed",
                      top: moreMenuPosition.top,
                      left: moreMenuPosition.left,
                      transform: "translateX(-50%)",
                    }}
                    className="z-[9999] min-w-[240px] pt-3"
                    onMouseEnter={openMoreMenu}
                    onMouseLeave={scheduleCloseMoreMenu}
                  >
                    <div className="rounded-xl border border-white/15 bg-[#0a1219] py-2 shadow-2xl">
                      {moreLinks.map((link) =>
                        link.external ? (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-white text-[14px] font-medium transition-colors hover:bg-white/10 hover:text-white/90"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            key={link.label}
                            href={link.href}
                            className={`block px-4 py-2.5 text-[14px] font-medium transition-colors hover:bg-white/10 hover:text-white/90 ${
                              pathname === link.href ? "text-[#ED2024]" : "text-white"
                            }`}
                          >
                            {link.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>,
              document.body,
            )}
        </div>

        <Link
          href="/contact-us"
          className={`${navLinkClass} ${pathname === "/contact-us" ? "text-[#ED2024]" : ""}`}
        >
          Contact Us
        </Link>
      </nav>

      <a
        href={isHomePage ? "#footer-form" : "/#footer-form"}
        className="hidden lg:flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#111111] font-semibold transition-all duration-300 hover:scale-105"
      >
        Get Quote
      </a>

      <button
        type="button"
        className="lg:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`lg:hidden relative z-50 backdrop-blur-xl rounded-2xl p-6 mb-8 ${
              variant === "hero" ? "bg-black/70" : "bg-black/90 shadow-xl"
            }`}
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={resolveHref(item)}
                  className="text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div>
                <button
                  type="button"
                  className="flex items-center gap-1 text-white w-full"
                  onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                  aria-expanded={mobileMoreOpen}
                >
                  More
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileMoreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileMoreOpen && (
                  <div className="mt-3 ml-3 flex flex-col gap-3 border-l border-white/20 pl-4">
                    {moreLinks.map((link) =>
                      link.external ? (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 text-sm"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileMoreOpen(false);
                          }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={`text-sm ${
                            pathname === link.href
                              ? "text-[#ED2024] font-semibold"
                              : "text-white/80"
                          }`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileMoreOpen(false);
                          }}
                        >
                          {link.label}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>

              <Link
                href="/contact-us"
                className={`text-white ${pathname === "/contact-us" ? "text-[#ED2024] font-semibold" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <a
                href={isHomePage ? "#footer-form" : "/#footer-form"}
                className="bg-white text-black rounded-lg py-3 font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

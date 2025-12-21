import React, { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import ThemeToggle from "../../ui/ThemeToggle";
import useDarkMode from "../../../hooks/useDarkMode";

const menuItems = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useDarkMode();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const hamburgerSrc = "./HamburgerLight.svg";
  const closeSrc = "./CloseLight.svg";

  return (
    <>
      <header className={[
          "bg-transparent dark:bg-black h-84px fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-white/40 dark:bg-black/40 backdrop-blur-2xl"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-auto mx-auto px-4 lg:px-35">
          <div className="flex items-center justify-between py-6">
            {/* Logo */}
            <a href="#top" className="flex items-center">
              <img
                src="/LogoLight.svg"
                alt="Logo"
                className="h-8 w-auto dark:hidden"
              />
              <img
                src="/Logo.svg"
                alt="Logo"
                className="h-8 w-auto hidden dark:block"
              />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-3">
              {menuItems.map((item) => (
                <li key={item.label}>
                 <a href={item.href}
                    className={[
                        "inline-flex items-center justify-center",
                        "px-4 py-2 rounded-full",
                        "transition-all duration-200",
                        "cursor-default",
                        "font-semibold text-md text-(--neutral-950) dark:text-(--neutral-25)",
                        "hover:bg-(--neutral-25) dark:hover:bg-gray-700",
                    ].join(" ")}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Button onClick={() => (window.location.hash = "#contact")}>
                Let's Talk
              </Button>
            </div>

            {/* Mobile Right */}
            <div className="lg:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={[
                  "inline-flex items-center justify-center",
                  scrolled
                    ? "bg-white/40 dark:bg-black/30"
                    : "bg-white/20 dark:bg-black/20",
                  "transition-colors",
                ].join(" ")}
              >
                <img
                  src={open ? closeSrc : hamburgerSrc}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 object-contain dark:invert"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="h-22" />

      {/* Mobile Overlay Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-60 bg-white dark:bg-black">
          <div className="w-full mx-auto px-4 lg:px-30">
            <div className="flex items-center justify-between py-6">
              <a
                href="#top"
                className="flex items-center"
                onClick={() => setOpen(false)}
              >
                <img
                  src="/LogoLight.svg"
                  alt="Logo"
                  className="h-8 w-auto dark:hidden"
                />
                <img
                  src="/Logo.svg"
                  alt="Logo"
                  className="h-8 w-auto hidden dark:block"
                />
              </a>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="h-5 w-5">
                <img
                  src={closeSrc}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 object-contain dark:invert"
                />
              </button>
            </div>

            <div className="mt-2">
              <ul className="flex flex-col gap-8">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm font-semibold"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    window.location.hash = "#contact";
                  }}>
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
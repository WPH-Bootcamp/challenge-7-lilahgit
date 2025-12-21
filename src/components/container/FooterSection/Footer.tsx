import React from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => {

  const socials = [
    { name: "Facebook", href: "#", src: "./Socials/fb.svg" },
    { name: "Instagram", href: "#", src: "./Socials/ig.svg" },
    { name: "LinkedIn", href: "#", src: "./Socials/in.svg" },
    { name: "TikTok", href: "#", src: "./Socials/ttk.svg" },
  ];

  return (
    <section className="w-full bg-white dark:bg-black px-[16px] py-[24px] lg:px-[140px] lg:pt-10 lg:pb-29">
      <div
        className={[
          "mx-auto w-full",
          "rounded-[24px]",
          "bg-(--neutral-25) dark:bg-(--neutral-950)",
          "border border-white/10",
          "px-6 py-8 md:px-10 md:py-10",
        ].join(" ")}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Mobile logo */}
          <div className="md:hidden">
            <img
              src="./LogoLight.svg"
              alt="Your Logo"
              className="h-7 w-auto dark:hidden"
            />
            <img
              src="./Logo.svg"
              alt="Your Logo"
              className="h-7 w-auto hidden dark:block"
            />
          </div>

          {/* Title */}
          <h2 className="font-extrabold tracking-tight text-3xl md:text-4xl leading-tight">
            LET'S DISCUSS YOUR <br className="hidden md:block" />
            IDEAS
          </h2>

          {/* Desktop logo */}
          <div className="hidden md:block">
            <img
              src="./LogoLight.svg"
              alt="Your Logo"
              className="h-7 w-auto dark:hidden"
            />
            <img
              src="./Logo.svg"
              alt="Your Logo"
              className="h-7 w-auto hidden dark:block"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10" />

        {/* Bottom row */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Nav */}
          <nav>
            <ul className="flex flex-col gap-5 md:flex-row md:gap-10">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons*/}
          <div className="flex items-center gap-4 md:justify-end">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="inline-flex"
              >
                <img
                  src={s.src}
                  alt={s.name}
                  className="w-10 h-10 object-contain dark:invert"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
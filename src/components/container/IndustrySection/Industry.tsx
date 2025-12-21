import React, { useMemo, useState } from "react";

type IndustryKey = "fintech" | "ecommerce" | "healthcare";

type Industry = {
  key: IndustryKey;
  label: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const IndustrySection = () => {
  const industries: Industry[] = useMemo(
    () => [
      {
        key: "fintech",
        label: "Fintech",
        description:
          "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
        imageSrc: "/Fintech.svg",
        imageAlt: "Fintech preview",
      },
      {
        key: "ecommerce",
        label: "E-Commerce",
        description:
          "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
        imageSrc: "./ECommerce.svg",
        imageAlt: "E-Commerce preview",
      },
      {
        key: "healthcare",
        label: "Healthcare",
        description:
          "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
        imageSrc: "./Healthcare.svg",
        imageAlt: "Healthcare preview",
      },
    ],
    []
  );

  const [active, setActive] = useState<IndustryKey>("fintech");
  const current = industries.find((i) => i.key === active) ?? industries[0];

  return (
    <section className="w-full py-16 md:py-20  dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-neutral-25 text-3xl md:text-4xl font-extrabold">
            Built for Your Industry
          </h2>
          <p className="mt-3 dark:text-neutral-400">
            We've helped companies across industries launch smarter, faster, and more securely.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-col md:flex-row md:items-start gap-8 md:gap-10">
          {/* Left tabs */}
          <div className="md:w-[220px]">
            <div className="flex-col gap-3 md:gap-4">
              {industries.map((item) => {
                const isActive = item.key === active;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setActive(item.key)}
                    className={[
                      "group relative text-left w-full",
                      "flex items-center gap-2",
                      "py-3 md:py-4",
                      "outline-none",
                    ].join(" ")}
                  >

                    <span
                      className={[
                        "h-6 w-[3px] rounded-full transition-colors",
                        isActive
                          ? "bg-(--primary-200)"
                          : "bg-[#aaaaaa]",
                          "group-hover:bg-black dark:group-hover:bg-(--primary-200)",
                      ].join(" ")}
                    />
                    <span
                      className={[
                        "font-bold transition-colors",
                        isActive ? "text-[neutral-25]" : "text-[#aaaaaa]",
                        "group-hover:text-black dark:group-hover:text-white",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right details */}
          <div className="flex-1">
            <p className="text-neutral-25 max-w-2xl leading-relaxed">
              {current.description}
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={current.imageSrc}
                alt={current.imageAlt}
                className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
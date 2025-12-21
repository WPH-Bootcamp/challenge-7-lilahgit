import React, { useMemo, useState } from "react";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
};

const wrap = (idx: number, len: number) => ((idx % len) + len) % len;

const DESKTOP_OFFSET_PX = 614;

const HALF_CARD_PX = 297;

const Testimonials = () => {
  const quoteMarkSrc = "./Testimonial/Quotation.svg";
  const starsSrc = "./Testimonial/Rating.svg";

  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        quote:
          "“Working with this team was a game changer for our project. They understood our vision and turned it into reality efficiently and effectively.”",
        name: "John Lee",
        role: "Creative Director at Innovate Corp",
        avatarSrc: "./Testimonial/JohnLee.svg.svg",
      },
      {
        quote:
          "“The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.”",
        name: "Sarah Tan",
        role: "Product Manager at Finovate",
        avatarSrc: "./Testimonial/SarahTan.svg",
      },
      {
        quote:
          "“The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.”",
        name: "Emily Chen",
        role: "Marketing Head at Tech Solutions",
        avatarSrc: "./Testimonial/EmilyChen.svg.svg",
      },
    ],
    []
  );

  const [active, setActive] = useState(1);
  const len = testimonials.length;

  const prevIdx = wrap(active - 1, len);
  const nextIdx = wrap(active + 1, len);

  return (
    <section className="w-full py-16 md:py-20 bg-white dark:bg-black">
      <div className="mx-auto">
        {/* Heading */}
        <div className="text-center px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            What Partners Say About Working With Us
          </h2>
          <p className="mt-3 text-(--neutral-400)">
            Trusted voices. Real experiences. Proven results.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Frame */}
          <div className="relative h-[380px] md:h-[360px] flex items-center justify-center overflow-hidden">
            {/* LEFT (desktop) */}
            <div
              className="hidden md:block absolute z-10 opacity-40 transition-all duration-500"
              style={{ transform: `translateX(-${DESKTOP_OFFSET_PX}px)` }}
            >
              <TestimonialCard
                {...testimonials[prevIdx]}
                quoteMarkSrc={quoteMarkSrc}
                starsSrc={starsSrc}
                isActive={false}
              />
            </div>

            <div className="absolute z-20 transition-all duration-500">
              <TestimonialCard
                {...testimonials[active]}
                quoteMarkSrc={quoteMarkSrc}
                starsSrc={starsSrc}
                isActive={true}
              />
            </div>

            <div
              className="hidden md:block absolute z-10 opacity-40 transition-all duration-500"
              style={{ transform: `translateX(${DESKTOP_OFFSET_PX}px)` }}
            >
              <TestimonialCard
                {...testimonials[nextIdx]}
                quoteMarkSrc={quoteMarkSrc}
                starsSrc={starsSrc}
                isActive={false}
              />
            </div>
            <div
              className={[
                "hidden md:block pointer-events-none absolute left-0 top-0 h-full z-30",
                `w-[${HALF_CARD_PX}px]`,
                "backdrop-blur-md",
                "bg-linear-to-r from-white/80 to-transparent",
                "dark:from-black/80",
              ].join(" ")}
            />

            <div
              className={[
                "hidden md:block pointer-events-none absolute right-0 top-0 h-full z-30",
                `w-[${HALF_CARD_PX}px]`,
                "backdrop-blur-md",
                "bg-linear-to-l from-white/80 to-transparent",
                "dark:from-black/80",
              ].join(" ")}
            />
          </div>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => {
              const isOn = idx === active;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition-colors",
                    isOn
                      ? "bg-(--primary-200)"
                      : "bg-(--neutral-300) dark:bg-white/20",
                  ].join(" ")}
                />
              );
            })}
          </div>

          <div className="hidden md:block">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setActive((v) => wrap(v - 1, len))}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-16"
            />
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setActive((v) => wrap(v + 1, len))}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
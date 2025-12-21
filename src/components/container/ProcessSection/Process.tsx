import React, { useMemo, useState } from "react";

type StepItem = {
  title: string;
  desc: string;
};

const steps: StepItem[] = [
  { title: "Discovery & Consultation", desc: "Understand Your Needs & Goals" },
  { title: "Planning & Strategy", desc: "Build a Clear, Scalable Roadmap" },
  { title: "Design & Prototyping", desc: "Craft UX That Converts" },
  { title: "Development & Implementation", desc: "Deliver With Speed & Precision" },
  { title: "Testing & Optimization", desc: "Ensure Quality at Every Step" },
  { title: "Launch & Growth", desc: "Scale, Measure & Improve Continuously" },
];

const Process = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const chevronDown = "./ChevronDown.svg";
  const chevronUp = "./ChevronUp.svg";

  const items = useMemo(() => steps, []);

  const Card = ({
    title,
    desc,
    open,
    onClick,
    compact = false,
  }: {
    title: string;
    desc: string;
    open: boolean;
    onClick: () => void;
    compact?: boolean;
  }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className={[
          "w-full text-left",
          "rounded-[16px]",
          "border border-white/10",
          "bg-neutral-25 dark:bg-(--neutral-950)",
          compact ? "px-5 py-5" : "px-6 py-6",
          "transition-colors",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-bold">{title}</p>

            {/* accordion content */}
            <div
              className={[
                "grid transition-all duration-300 ease-out",
                open
                  ? "grid-rows-[1fr] opacity-100 mt-2"
                  : "grid-rows-[0fr] opacity-0 mt-0",
              ].join(" ")}
            >
              <p className="overflow-hidden opacity-60">
                {desc}
              </p>
            </div>
          </div>

          <img
            src={open ? chevronUp : chevronDown}
            alt=""
            aria-hidden="true"
            className="h-5 w-5 shrink-0 dark:invert"
          />
        </div>
      </button>
    );
  };

  return (
    <section id="process" className="w-full bg-white dark:bg-black">
      <div className="w-full mx-auto px-5 py-16 lg:px-35 lg:py-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our Process
          </h2>
          <p className="mt-3 text-(--neutral-600) dark:text-(--neutral-25) dark:opacity-60">
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* Desktop/Tablet */}
        <div className="mt-12 hidden md:block relative">
          {/* center line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10" />

          <div className="flex flex-col gap-10">
            {items.map((s, idx) => {
              const isLeft = idx % 2 === 0;
              const isOpen = openIndex === idx;

              return (
                <div key={s.title} className="relative">
                  {/* number */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                    <div className="h-10 w-10 rounded-full bg-(--primary-200) text-white font-bold text-sm flex items-center justify-center">
                      {idx + 1}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 items-center">
                    {/* Left column card */}
                    <div
                      className={
                        isLeft
                          ? "pr-14"
                          : "pr-14 opacity-0 pointer-events-none select-none"
                      }
                    >
                      <Card
                        title={s.title}
                        desc={s.desc}
                        open={isOpen}
                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      />
                    </div>

                    {/* Right column card */}
                    <div
                      className={
                        !isLeft
                          ? "pl-14"
                          : "pl-14 opacity-0 pointer-events-none select-none"
                      }
                    >
                      <Card
                        title={s.title}
                        desc={s.desc}
                        open={isOpen}
                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-10 md:hidden relative">
          {/* left line */}
          <div className="absolute left-5 top-0 h-full w-px bg-white/10" />

          <div className="flex flex-col gap-4">
            {items.map((s, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={s.title} className="relative pl-14">
                  {/* number */}
                  <div className="absolute left-0 top-6 z-10">
                    <div className="h-10 w-10 rounded-full bg-(--primary-200) text-white font-bold text-sm flex items-center justify-center">
                      {idx + 1}
                    </div>
                  </div>

                  <Card
                    title={s.title}
                    desc={s.desc}
                    open={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    compact
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
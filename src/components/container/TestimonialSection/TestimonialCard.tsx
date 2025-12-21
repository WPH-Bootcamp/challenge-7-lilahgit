import React from "react";

export type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  quoteMarkSrc: string;
  starsSrc: string;
  isActive: boolean;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatarSrc,
  quoteMarkSrc,
  starsSrc,
  isActive,
}) => {
  return (
    <div className="relative px-4">
      <img
        src={quoteMarkSrc}
        alt=""
        aria-hidden="true"
        className={[
          "absolute z-20",
          "-top-6 left-6",
          isActive ? "opacity-100" : "opacity-45",
          "h-12 w-auto",
        ].join(" ")}
      />

      <article
        className={[
          "w-full md:w-[594px]",
          "md:min-h-[292px]",
          "rounded-2xl border",
          "bg-white border-(--neutral-200)",
          "dark:bg-(--neutral-900) dark:border-white/10",
          "pt-4 md:pt-6 px-4 pb-12",
          "flex flex-col items-center text-center",
          "gap-4 md:gap-6",
        ].join(" ")}
      >
        {/* Rating*/}
        <img src={starsSrc} alt="Rating" className="h-6 w-auto" />

        {/* Quote */}
        <p className="px-6 text-sm md:text-lg font-semibold">
          {quote}
        </p>

        {/* Name + role */}
        <div>
          <p className="text-lg font-semibold">
            {name}
          </p>
          <p className="text-lg font-semibold text-(--primary-200)">
            {role}
          </p>
        </div>

        {/* Avatar overlap */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-9">
          <img
            src={avatarSrc}
            alt={name}
            className="h-18.75 rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </article>
    </div>
  );
};

export default TestimonialCard;
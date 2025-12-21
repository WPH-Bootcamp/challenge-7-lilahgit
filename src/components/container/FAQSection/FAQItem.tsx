import React from "react";

export type FAQItemProps = {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;

  plusIconSrc: string;
  minusIconSrc: string;
};

const FAQItem: React.FC<FAQItemProps> = ({
  id,
  question,
  answer,
  open,
  onToggle,
  plusIconSrc,
  minusIconSrc,
}) => {
  return (
    <div className="border-b border-(--neutral-200) dark:border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
      >
        <div>
          <h3 className="text-lg md:text-(--display-xs) font-bold">
            {question}
          </h3>
        </div>

        <img
          src={open ? minusIconSrc : plusIconSrc}
          alt={open ? "Collapse" : "Expand"}
          className="mt-1 h-6 w-6 shrink-0 dark:invert"
        />
      </button>

      <div
        id={`${id}-panel`}
        className={[
          "grid transition-[grid-template-rows] duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-(--neutral-600) dark:text-(--neutral-300) leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;

import React, { useMemo, useState } from "react";
import FAQItem from "./FAQItem";

type FAQData = {
  id: string;
  question: string;
  answer: string;
};

const FAQ = () => {
  const plusIconSrc = "./plusLight.svg";
  const minusIconSrc = "./minusLight.svg";

  const ctaImageSrc = "./Consultation.svg";

  const faqs: FAQData[] = useMemo(
    () => [
      {
        id: "faq-1",
        question: "What services do you offer?",
        answer:
          "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
      },
      {
        id: "faq-2",
        question: "How do I know if this is right for my business?",
        answer:
          "Book a free consult — we'll assess your goals and recommend the right approach.",
      },
      {
        id: "faq-3",
        question: "How much does a project cost?",
        answer:
          "Every project is different. Let's talk about your needs to get a tailored estimate.",
      },
      {
        id: "faq-4",
        question: "How long does it take?",
        answer: "Depends on scope — but we always prioritize quality and deadlines.",
      },
      {
        id: "faq-5",
        question: "Can I start with a small project first?",
        answer: "Absolutely. We often begin with MVPs or pilot projects.",
      },
    ],
    []
  );

  const [openId, setOpenId] = useState<string>(faqs[0]?.id ?? "");

  return (
    <section id="faq" className="w-full py-16 md:py-20 bg-white dark:bg-black">
      <div className="w-full mx-auto px-4 lg:px-30">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <h2 className="text-3xl sm:text-(--display-sm) font-bold">
            Need Help? Start <br className="hidden md:block" />
            Here.
          </h2>

          <p className="md:max-w-[320px] text-(--neutral-600) dark:text-var(--neutral-300) leading-relaxed md:text-right">
            Everything you need to <br className="hidden md:block" />
            know — all in one place.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-(--neutral-800)/30 dark:border-white/10" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_330px] lg:grid-cols-[1fr_330px] gap-6 lg:gap-18 items-start">
          <div>
              {faqs.map((item) => (
                <FAQItem
                  key={item.id}
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                  open={openId === item.id}
                  onToggle={() => setOpenId((prev) => (prev === item.id ? "" : item.id))}
                  plusIconSrc={plusIconSrc}
                  minusIconSrc={minusIconSrc}
                />
              ))}
          </div>

          {/* RIGHT: CTA card */}
          <aside className="w-100 md:w-82 justify-center">
            <div
              className={[
                "rounded-3xl bg-(--primary-200)",
                "p-6 md:p-6",
              ].join(" ")}
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                Let's talk it <br /> through
              </h3>
              <p className="mt-2 text-white/90">
                book a free consultation with <br className="hidden md:block" />
                our team.
              </p>

              {/* Image */}
              <div className="mt-5 rounded-[16px] overflow-hidden bg-white/10">
                <img
                  src={ctaImageSrc}
                  alt="Consultation"
                  className="w-full h-[170px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Button */}
              <button
                type="button"
                className=
                "mt-5 w-full rounded-full bg-black text-white dark:bg-white dark:text-black shadow-[inset_0_4px_4px_rgba(255,255,255,0.25)] font-semibold py-3"
              >
                Free Consultation
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

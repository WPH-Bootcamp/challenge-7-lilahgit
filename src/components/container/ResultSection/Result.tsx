import React from "react";

type ResultItem = {
  value: string;
  label: string;
};

const results: ResultItem[] = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Industry Awards Won" },
  { value: "100%", label: "Client Satisfaction Rate" },
];

const Result = () => {
  return (
    <section id="results" className="w-full bg-white dark:bg-black">
      <div className="mx-2 px-4 lg:px-35 lg:py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            End-to-End IT Solutions 
            <span className="hidden lg:inline"> </span>
            <br className="lg:hidden" />
            That Drive Results
          </h2>

          <p className="py-5 dark:text-neutral-400">
            From strategy to execution, we deliver solutions that
            <span className="hidden lg:inline"> </span>
            <br className="lg:hidden" />
            grow your business.
          </p>
        </div>

        {/* Circles */}
        <div className="w-full mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 justify-items-center">
          {results.map((item) => (
            <div
              key={item.label}
              className={[
                "w-45 h-45 lg:w-68.75 lg:h-68.75 rounded-full p-4",
                "flex flex-col items-center justify-center text-center",
                "border border-white/10 bg-neutral-25 dark:bg-neutral-950",
              ].join(" ")}
            >
              <p className="text-(--primary-200) text-[36px] md:text-[48px] font-bold">
                {item.value}
              </p>

              <p className="px-1 mt-2 lg:mt-3 text-sm md:text-xl font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Result;
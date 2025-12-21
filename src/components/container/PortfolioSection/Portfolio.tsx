import React from "react";
import PortfolioCard from "./PortfolioCard";

type Project = {
  category: string;
  title: string;
  imageSrc: string;
};

const projects: Project[] = [
  { category: "Landing Page", title: "Portfolio 1", imageSrc: "./Portfolio1.svg" },
  { category: "Landing Page", title: "Portfolio 2", imageSrc: "./Portfolio2.svg" },
  { category: "Landing Page", title: "Portfolio 3", imageSrc: "./Portfolio3.svg" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="w-full bg-white  dark:bg-black py-10 md:py-20">
      <div className="w-full mx-auto px-4">
        <div className="text-center">
          <h2 className="px-6 md:px-4 text-3xl md:text-4xl font-extrabold">
            From Vision to Launch! Projects We're Proud Of
          </h2>
          <p className="py-5 md:text-lg text-sm font-medium text-[#a4a7ae] mx-auto">
            Take a closer look at our recent work powering startups, enterprises,
            and everything in between.
          </p>
        </div>

        <div
          className={[
            "mt-6 md:mt-10 flex flex-col items-center gap-5",
            "md:flex-row md:justify-center md:items-stretch",
          ].join(" ")}
        >
          {projects.map((p) => (
            <PortfolioCard
              key={p.title}
              category={p.category}
              title={p.title}
              imageSrc={p.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import React from "react";

export type PortfolioCardProps = {
  category: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  category,
  title,
  imageSrc,
  imageAlt,
}) => {
  return (
    <article
      className= {[
        "rounded-2xl",
        "w-full md:w-[373px] md:h-[373px]",
        "flex flex-col",
      ].join(" ")}
    >
      
      <div className="flex-1">
        <img
          src={imageSrc}
          alt={imageAlt ?? title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text area */}
      <div className="flex-1">
        <p className="py-3 text-sm md:text-md font-medium text-(--primary-200)">
          {category}
        </p>
        <h3 className="text-xl sm:text-md font-bold">
          {title}
        </h3>
      </div>
    </article>
  );
};

export default PortfolioCard;
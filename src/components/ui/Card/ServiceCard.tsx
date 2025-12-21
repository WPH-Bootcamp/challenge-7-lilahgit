import React from "react";

type ServiceCardProps = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  className?: string;
};

const ServiceCard = ({
  iconSrc,
  iconAlt,
  title,
  description,
  className = "",
}: ServiceCardProps) => {
  return (
    <div
      className={[
        "relative w-full rounded-[16px]",
        "bg-(--neutral-25) dark:bg-(--neutral-950)",
        "overflow-visible",
        className,
      ].join(" ")}
    >
 
      <img
        src={iconSrc}
        alt={iconAlt}
        className={[
          "absolute left-5",
          "-top-6 lg:-top-6",
          "w-16 md:w-20 object-contain",
        ].join(" ")}
      />

      <div className="p-5 pt-12 lg:pt-16">
        <h3 className="font-bold text-(length:--text-md) lg:text-(length:--text-xl)">
          {title}
        </h3>

        <p className="mt-3 font-medium text-(--neutral-400) text-(length:--text-sm-size) lg:text-(length:--text-md)">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

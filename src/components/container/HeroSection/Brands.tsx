import React from "react";

type Brand = {
  name: string;
  src: string;
};

const brands: Brand[] = [
  { name: "Adobe", src: "./Brands/adobe.svg" },
  { name: "Upwork", src: "./Brands/upwork.svg" },
  { name: "Zoom", src: "./Brands/zoom.svg" },
  { name: "Postman", src: "./Brands/postman.svg" },
  { name: "Databricks", src: "./Brands/databricks.svg" },
  { name: "Airbnb", src: "./Brands/airbnb.svg" },
  { name: "Dropbox", src: "./Brands/dropbox.svg" },
  { name: "Paypal", src: "./Brands/paypal.svg" },
  { name: "Netflix", src: "./Brands/netflix.svg" },
];

const Brands: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="max-w mx-auto px-4 lg:px-30">
        {/* Title */}
        <div className="text-center">
          <p className="font-bold text-2xl">
            Trusted by Global Innovators & Leading Brands
          </p>
        </div>

        {/* Marquee */}
        <div className="mt-19 pb-12 md:pb-16 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-linear-to-r from-white dark:from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-linear-to-l from-white dark:from-black to-transparent" />
          <div className="flex w-max items-center gap-12 marquee">
            {brands.map((b) => (
              <img
                key={`a-${b.name}`}
                src={b.src}
                alt={b.name}
                draggable={false}
                className={[
                  "h-15 w-auto shrink-0",
                  "opacity-70 grayscale-100",
                  "hover:opacity-100 hover:grayscale-0",
                  "transition-all duration-300",
                ].join(" ")}
              />
            ))}

            {brands.map((b) => (
              <img
                key={`b-${b.name}`}
                src={b.src}
                alt={b.name}
                draggable={false}
                className={[
                  "h-[60px] w-auto shrink-0",
                  "opacity-70 grayscale-100",
                  "hover:opacity-100 hover:grayscale-0",
                  "transition-all duration-300",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

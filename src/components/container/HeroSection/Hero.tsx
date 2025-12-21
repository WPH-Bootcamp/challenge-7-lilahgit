import React from "react";
import Button from "../../ui/Button/Button";

const Hero = () => {
  return (
    <section id="top" className="w-full bg-white dark:bg-black">
      <div className="w-full px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row">
          {/* Hero Text */}
          <div
            className={[
              "w-full h-auto lg:w-[55%]",
              "pt-36 sm:pt-[60px] ",
              "lg:pl-35 lg:pt-[146px]",
            ].join(" ")}
          >
            <h1 className="font-bold text-6xl leading-17">
              Your Tech Partner for <br />
              <span className="text-(--primary-200)">Smarter Growth</span>
            </h1>

            <p
              className="mt-4 font-semibold max-w-140 text-(--neutral-700) dark:text-(--neutral-25)"
              style={{
                fontSize: "var(--text-xl-size)",
                lineHeight: "var(--text-xl-line)",
              }}
            >
              We deliver tailored IT solutions to help you scale with speed and
              confidence.
            </p>

            <div className="mt-8">
              <div className="hidden lg:block">
                <Button
                  variant="primary"
                  onClick={() => (window.location.hash = "#contact")}
                >
                  Let's Talk
                </Button>
              </div>

              {/* Mobile/Tablet */}
              <div className="lg:hidden">
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => (window.location.hash = "#contact")}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 flex justify-end z-10">
            <div className="w-full lg:w-full transform-gpu lg:-translate-y-22">
              <img
                src="./HeroLight.svg"
                alt="Hero"
                className="w-full h-auto dark:hidden"
              />
              <img
                src="./Hero.svg"
                alt="Hero"
                className="w-full h-auto hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from "react";
import ServiceCard from "../../ui/Card/ServiceCard";


type ServiceItem = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    iconSrc: "/ServicesIcon/WebDevelopment.svg",
    iconAlt: "Web Development icon",
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
  },
  {
    iconSrc: "/ServicesIcon/MobileApp.svg",
    iconAlt: "Mobile App Development icon",
    title: "Mobile App Development",
    description: "Native & cross-platform apps tailored to user needs.",
  },
  {
    iconSrc: "/ServicesIcon/UIUX.svg",
    iconAlt: "UI/UX Design icon",
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces",
  },
  {
    iconSrc: "/ServicesIcon/CloudSolutions.svg",
    iconAlt: "Cloud Solutions icon",
    title: "Cloud Solutions",
    description: "Secure and flexible cloud infrastructure for your growth.",
  },
  {
    iconSrc: "/ServicesIcon/SoftwareDevelopment.svg",
    iconAlt: "Software Development icon",
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
  },
  {
    iconSrc: "/ServicesIcon/ITInfrastructure.svg",
    iconAlt: "IT Infrastructure icon",
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
  },
  {
    iconSrc: "/ServicesIcon/CybersecurityServices.svg",
    iconAlt: "Cybersecurity Services icon",
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
  },
  {
    iconSrc: "/ServicesIcon/QA.svg",
    iconAlt: "QA Solutions icon",
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks.",
  },
  {
    iconSrc: "/ServicesIcon/ITConsulting.svg",
    iconAlt: "IT Consulting & Support icon",
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
  },
];

const Services = () => {
  return (
    <section id="service" className="w-full bg-white dark:bg-black">
      <div className="max-w-[1440px] mx-auto px-[20px] py-16 lg:px-[140px] lg:py-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Smart IT Solutions That Grow With You
          </h2>

          <p className="py-5 text-(--neutral-400) max-w-3xl mx-auto">
            Tailored tech to boost efficiency, security, and results.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              iconSrc={s.iconSrc}
              iconAlt={s.iconAlt}
              title={s.title}
              description={s.description}
              className={[
                "border border-(--neutral-200) dark:border-white/10",
                "hover:border-(--primary-200)",
                "transition-colors duration-200",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

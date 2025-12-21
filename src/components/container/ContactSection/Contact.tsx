import React, { useMemo, useState } from "react";
import Modal from "../Popup";

type ServiceKey =
  | "web"
  | "mobile"
  | "uiux"
  | "cloud"
  | "software"
  | "other";

const Contact = () => {
  const services = useMemo(
    () =>
      [
        { key: "web", label: "Web Development" },
        { key: "mobile", label: "Mobile App Development" },
        { key: "uiux", label: "UI/UX Design" },
        { key: "cloud", label: "Cloud Solutions" },
        { key: "software", label: "Software Development" },
        { key: "other", label: "Other" },
      ] as const,
    []
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    services: new Set<ServiceKey>(["web"]),
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupVariant, setPopupVariant] = useState<"success" | "error">("success");


  const toggleService = (key: ServiceKey) => {
    setForm((prev) => {
      const next = new Set(prev.services);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return { ...prev, services: next };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const isValid =
    form.name.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.message.trim().length > 0 &&
    form.services.size > 0;

  setPopupVariant(isValid ? "success" : "error");
  setPopupOpen(true);
};

  return (
    <section id="contact" className="w-full py-16 md:py-20 bg-white dark:bg-black">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-[120px]">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Ready to Start? Let's Talk.
            </h2>
            <p className="mt-3 text-(--neutral-600) dark:text-(--neutral-25) dark:opacity-60">
              Tell us what you need, and we'll get back to you soon.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="mt-12 mx-auto w-full max-w-[760px]"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[var(--neutral-950)] dark:text-[var(--neutral-25)]">
                Name
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                placeholder="Enter your name"
                className={[
                  "mt-3 w-full rounded-[12px] px-5 py-4",
                  "bg-transparent",
                  "border border-(--neutral-300) dark:border-white/15",
                  "placeholder:text-(--neutral-500) dark:placeholder:text-white/35",
                  "outline-none focus:ring-2 focus:ring-(--primary-200)/35 focus:border-(--primary-200)/60",
                ].join(" ")}
              />
            </div>

            {/* Email */}
            <div className="mt-6">
              <label className="block text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="Enter your email"
                className={[
                  "mt-3 w-full rounded-[12px] px-5 py-4",
                  "bg-transparent",
                  "border border-(--neutral-300) dark:border-white/15",
                  "placeholder:text-(--neutral-500) dark:placeholder:text-white/35",
                  "outline-none focus:ring-2 focus:ring-(--primary-200)/35 focus:border-(--primary-200)/60",
                ].join(" ")}
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-(--neutral-950) dark:text-(--neutral-25)">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                placeholder="Enter your message"
                className={[
                  "mt-3 w-full rounded-[12px] px-5 py-4",
                  "bg-transparent",
                  "border border-(--neutral-300) dark:border-white/15",
                  "placeholder:text-(--neutral-500) dark:placeholder:text-white/35",
                  "outline-none focus:ring-2 focus:ring-(--primary-200)/35 focus:border-(--primary-200)/60",
                  "min-h-[160px] resize-none",
                ].join(" ")}
              />
            </div>

            {/* Services */}
            <div className="mt-10">
              <p className="text-sm font-semibold">
                Services
              </p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-4">
                {services.map((s) => {
                  const checked = form.services.has(s.key);
                  return (
                    <label
                      key={s.key}
                      className="flex items-center gap-3 cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={checked}
                        onChange={() => toggleService(s.key)}
                      />

                      {/* Custom checkbox */}
                      <span
                        className={[
                          "h-5 w-5 rounded-[4px] flex items-center justify-center",
                          "border border-(--neutral-400)/70 dark:border-white/20",
                          "bg-transparent",
                          "peer-checked:bg-(--primary-200) peer-checked:border-(--primary-200)",
                          "transition-colors",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        {/* Check icon */}
                        <svg
                          className={[
                            "h-3.5 w-3.5",
                            checked ? "opacity-100" : "opacity-0",
                            "transition-opacity",
                          ].join(" ")}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M16.5 5.5L8.25 13.75L3.5 9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <span className="font-medium">
                        {s.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Send button */}
            <button
              type="submit"
              className={[
                "mt-10 w-full rounded-full py-4",
                "bg-(--primary-200) text-white font-bold",
                "hover:bg-(--primary-300) transition-colors",
                "shadow-[inset_0_4px_4px_rgba(255,255,255,0.25)]",
              ].join(" ")}
            >
              Send
            </button>
          </form>
        </div>

        <Modal
        open={popupOpen}
        variant={popupVariant}
        onClose={() => setPopupOpen(false)}
        />
    </section>
  );
};

export default Contact;
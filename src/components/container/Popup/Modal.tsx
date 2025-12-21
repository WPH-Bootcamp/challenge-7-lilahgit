import React, { useEffect } from "react";

type PopupVariant = "success" | "error";

type ModalProps = {
  open: boolean;
  variant: PopupVariant;
  onClose: () => void;
};

const Modal = ({ open, variant, onClose }: ModalProps) => {
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const isSuccess = variant === "success";

  const title = isSuccess ? "Message Received!" : "Oops! Something went wrong.";
  const desc = isSuccess
    ? "Thanks for reaching out — we'll get back to you as soon as possible."
    : "We couldn't send your message. Please try again or check your connection.";
  const cta = isSuccess ? "Back to Home" : "Try Again";

  const imgSrc = isSuccess ? "./Success.svg" : "./Failed.svg";

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-10">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close popup"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-[8px]"
      />

      {/* Modal */}
      <div className="relative w-full max-w-[518px]">
        {/* Gradient border 1px */}
        <div className="rounded-2xl bg-(--neutral-800) p-px">
          <div className="rounded-2xl overflow-hidden bg-(--neutral-950)">
            {/* Top image area */}
            <div className="px-10 flex items-center justify-center bg-(--neutral-900)">
              <img
                src={imgSrc}
                alt={isSuccess ? "Success" : "Failed"}
                className="h-[228px] sm: w-auto object-contain"
                draggable={false}
              />
            </div>

            <div className="h-px bg-white/10" />

            {/* Content */}
            <div className="px-10 py-10 text-center">
              <h3 className="font-bold text-xl text-(--neutral-25)">{title}</h3>
              <p className="mt-3 text-(--neutral-25) opacity-70">{desc}</p>

              <button
                type="button"
                onClick={onClose}
                className={[
                  "mt-8 w-90 rounded-full py-4",
                  "bg-(--primary-200) text-white font-bold text-md",
                  "hover:bg-(--primary-300) transition-colors",
                  "shadow-[inset_0_4px_4px_rgba(255,255,255,0.25)]",
                ].join(" ")}
              >
                {cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
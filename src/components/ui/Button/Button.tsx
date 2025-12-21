import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth,
  className,
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-1 rounded-full " +
    "text-sm font-bold " + 
    "transition-colors focus:outline-none focus:ring-2 focus:ring-(--primary-200)/35";

  const buttonFill =
    "bg-(--primary-200) text-white hover:bg-(--primary-300) " +
    "shadow-[inset_0_4px_4px_rgba(255,255,255,0.25)]";

  const size = "h-[44px] px-6";

  if (variant === "primary") {
    const isFull = fullWidth ?? false;
    return (
      <button
        className={[
          base,
          size,
          isFull ? "w-full" : "w-[197px]",
          buttonFill,
          className ?? "",
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }

  const isFull = fullWidth ?? true;
  return (
    <button
      className={[
        base,
        size,
        isFull ? "w-full" : "w-[361px]",
        buttonFill,
        className ?? "",
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
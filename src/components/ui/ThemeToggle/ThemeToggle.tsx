import React from "react";
import useDarkMode from "../../../hooks/useDarkMode";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={[
        "h-10 w-10 rounded-full",
        "inline-flex items-center justify-center",
        "bg-black dark:bg-white",
        "transition-colors",
        "text-xl"
      ].join(" ")}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
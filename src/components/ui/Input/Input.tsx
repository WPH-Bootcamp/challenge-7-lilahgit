import React from "react";

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  className?: string;
};

const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
  rows = 5,
  required = false,
  className = "",
}: InputProps) => {
  const base =
    "w-full rounded-[12px] border px-4 py-3 bg-transparent text-current " +
    "border-(--neutral-200) dark:border-white/10 " +
    "placeholder:text-(--neutral-500) "

  return (
    <label className="block">
      <span className="block mb-2 font-bold text-md sm:text-sm">{label}</span>

      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className={`${base} resize-none ${className}`}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          required={required}
          className={`${base} ${className}`}
        />
      )}
    </label>
  );
};

export default Input;
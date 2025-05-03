import { useEffect, useState } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  icon?: React.ReactNode;
}

export function InputField({
  id,
  label,
  value,
  onChange,
  icon,
}: InputFieldProps) {
  const [displayValue, setDisplayValue] = useState<string>(String(value));

  useEffect(() => {
    setDisplayValue(String(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
      .replace(",", ".")
      .replace(/[^0-9.]/g, "")
      .replace(/\.{2,}/g, ".")
      .replace(/^\./, "0.");

    setDisplayValue(inputValue);

    if (/^\d*\.?\d*$/.test(inputValue)) {
      const parsed = parseFloat(inputValue);
      onChange(isNaN(parsed) ? 0 : parsed);
    }
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-black mb-1 opacity-45"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          inputMode="decimal"
          id={id}
          value={displayValue}
          onChange={handleChange}
          className="appearance-none [&::-webkit-outer-spin-button]:appearance-none 
                     [&::-webkit-inner-spin-button]:appearance-none 
                     [moz-appearance:textfield] w-full px-4 py-2 border border-gray-300 
                     rounded-md shadow-sm pr-10 focus:ring-2 focus:ring-gold-300 
                     focus:border-gold-500 transition-all duration-200 ease-in-out"
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

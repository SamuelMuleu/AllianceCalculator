import { useState } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  hint?: string;
  unit?: string;
  value: number;
  max?: number;
  onChange: (value: number) => void;
  icon?: React.ReactNode;
}

function normalize(raw: string) {
  return raw
    .replace(",", ".")
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1")
    .replace(/^\./, "0.");
}

export function InputField({
  id,
  label,
  hint,
  unit,
  value,
  max = 100,
  onChange,
  icon,
}: InputFieldProps) {
  // The parent remounts this field (via `key`) to reset it
  const [displayValue, setDisplayValue] = useState(value ? String(value) : "");

  const parsed = parseFloat(displayValue.replace(",", "."));
  const outOfRange = !isNaN(parsed) && parsed > max;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = normalize(e.target.value);
    setDisplayValue(next.replace(".", ","));
    const n = parseFloat(next);
    onChange(isNaN(n) || n > max ? 0 : n);
  };

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-2 text-sm font-medium text-ink-100">
        {icon && <span className="text-gold-400" aria-hidden="true">{icon}</span>}
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          inputMode="decimal"
          autoComplete="off"
          id={id}
          value={displayValue}
          onChange={handleChange}
          placeholder="0,0"
          aria-invalid={outOfRange}
          aria-describedby={hint || outOfRange ? `${id}-hint` : undefined}
          className={`field pr-12 tabular-nums ${outOfRange ? "border-red-500 focus:border-red-500 focus:ring-red-500/30" : ""}`}
        />
        {unit && (
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm text-ink-400">
            {unit}
          </span>
        )}
      </div>
      {(hint || outOfRange) && (
        <p id={`${id}-hint`} className={`mt-1.5 text-xs ${outOfRange ? "text-red-400" : "text-ink-400"}`}>
          {outOfRange ? `Valor máximo: ${max} ${unit ?? ""}` : hint}
        </p>
      )}
    </div>
  );
}

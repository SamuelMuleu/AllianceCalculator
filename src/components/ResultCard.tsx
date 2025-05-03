

interface ResultCardProps {
  label: string;
  value: number;
  unit?: string;
  highlight?: boolean;
}

export function ResultCard({
  label,
  value,
  unit = "",
  highlight = false,
}: ResultCardProps) {
  return (
    <div
      className={`
      p-4 rounded-lg shadow-md mb-4 transition-all duration-300
      cursor-pointer 
      ${highlight ? "bg-[#D3E97A] border-l-4 border-green-800" : "bg-white"}
    `}
    >
      <h3 className="text-sm text-black mb-1 font-medium">{label}</h3>
      <div className="flex items-end">
        <span
          className={`
          text-2xl font-bold 
          ${highlight ? "text-gold-800" : "text-gray-800"}
        `}
        >
          {value.toFixed(2)}
        </span>
        {unit && <span className="ml-1 text-gray-600">{unit}</span>}
      </div>
    </div>
  );
}

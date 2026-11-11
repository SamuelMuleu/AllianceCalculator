interface ResultCardProps {
  label: string;
  value: string;
  unit?: string;
  detail?: string;
}

export function ResultCard({ label, value, unit, detail }: ResultCardProps) {
  return (
    <div className="rounded-xl border border-gold-500/25 bg-gradient-to-br from-gold-500/15 to-gold-500/5 p-5">
      <p className="text-sm font-medium text-gold-200">{label}</p>
      <p className="mt-2 flex items-baseline gap-1.5">
        <span className="text-4xl font-semibold tabular-nums text-ink-50">{value}</span>
        {unit && <span className="text-lg text-ink-300">{unit}</span>}
      </p>
      {detail && <p className="mt-2 text-xs text-ink-400">{detail}</p>}
    </div>
  );
}

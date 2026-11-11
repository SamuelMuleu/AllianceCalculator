import { useMemo, useState } from "react";
import { TbRulerMeasure, TbRulerMeasure2, TbCircleDashed } from "react-icons/tb";
import { InputField } from "./InputField";
import { ResultsDisplay } from "./ResultsDisplay";
import { RingMeasurements } from "../types";
import { calculateResults } from "../utils/calculations";
import { RING_SIZES_MAP } from "../utils/ringSizes";

const EMPTY: RingMeasurements = { internalCircumference: 0, height: 0, width: 0 };

export function RingForm() {
  const [measurements, setMeasurements] = useState<RingMeasurements>(EMPTY);
  const [ringSize, setRingSize] = useState("");
  const [resetKey, setResetKey] = useState(0);

  const results = useMemo(() => {
    const { internalCircumference, height, width } = measurements;
    return internalCircumference > 0 && height > 0 && width > 0
      ? calculateResults(measurements)
      : null;
  }, [measurements]);

  const update = (field: keyof RingMeasurements, value: number) =>
    setMeasurements((prev) => ({ ...prev, [field]: value }));

  const handleRingSize = (value: string) => {
    setRingSize(value);
    update("internalCircumference", RING_SIZES_MAP[Number(value)] ?? 0);
  };

  const reset = () => {
    setMeasurements(EMPTY);
    setRingSize("");
    setResetKey((k) => k + 1);
  };

  const filled = ringSize !== "" || measurements.height > 0 || measurements.width > 0;

  return (
    <div className="mx-auto w-full max-w-xl space-y-6">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-5 rounded-2xl border border-ink-800 bg-ink-900/70 p-6 shadow-2xl shadow-black/40 backdrop-blur sm:p-8"
      >
        <div>
          <label htmlFor="ringSize" className="mb-1.5 flex items-center gap-2 text-sm font-medium text-ink-100">
            <TbCircleDashed className="text-gold-400" aria-hidden="true" />
            Numeração da aliança
          </label>
          <select
            id="ringSize"
            value={ringSize}
            onChange={(e) => handleRingSize(e.target.value)}
            className="field cursor-pointer appearance-none bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239A958A' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Selecione a numeração</option>
            {Object.entries(RING_SIZES_MAP).map(([size, mm]) => (
              <option key={size} value={size}>
                Nº {size} · {mm.toLocaleString("pt-BR")} mm
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <InputField
            key={`height-${resetKey}`}
            id="height"
            label="Altura (espessura)"
            unit="mm"
            max={10}
            value={measurements.height}
            onChange={(v) => update("height", v)}
            icon={<TbRulerMeasure2 />}
          />
          <InputField
            key={`width-${resetKey}`}
            id="width"
            label="Largura"
            unit="mm"
            max={20}
            value={measurements.width}
            onChange={(v) => update("width", v)}
            icon={<TbRulerMeasure />}
          />
        </div>

        {filled && (
          <button
            type="button"
            onClick={reset}
            className="text-sm font-medium text-ink-300 underline-offset-4 hover:text-gold-400 hover:underline"
          >
            Limpar campos
          </button>
        )}
      </form>

      {results ? (
        <ResultsDisplay results={results} />
      ) : (
        <p className="rounded-xl border border-dashed border-ink-700 p-5 text-center text-sm text-ink-400">
          Preencha a numeração, a altura e a largura para ver a conquilha e o peso.
        </p>
      )}
    </div>
  );
}

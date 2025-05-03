import { useState, useEffect } from "react";
import {InputField} from "./InputField";
import { ResultsDisplay } from "./ResultsDisplay";
import { RingMeasurements, CalculationResults } from "../types";
import { calculateResults } from "../utils/calculations";
import { TbRulerMeasure, TbRulerMeasure2 } from "react-icons/tb";

export function RingForm() {
  const [measurements, setMeasurements] = useState<RingMeasurements>({
    internalCircumference: 0,
    height: 0,
    width: 0,
  });

  const [results, setResults] = useState<CalculationResults | null>(null);

  // Recalculate when measurements change
  useEffect(() => {
    if (
      measurements.internalCircumference > 0 &&
      measurements.height > 0 &&
      measurements.width > 0
    ) {
      setResults(calculateResults(measurements));
    } else {
      setResults(null);
    }
  }, [measurements]);

  const handleInputChange = (field: keyof RingMeasurements, value: number) => {
    setMeasurements((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex justify-center items-center ">
          Medidas da Aliança
        </h2>

        <InputField
          id="internalCircumference"
          label="Circunferência Interna"
          value={measurements.internalCircumference}
          onChange={(value) =>
            handleInputChange("internalCircumference", value)
          }
          
        />

        <InputField
          id="height"
          label="Altura da Aliança"
          value={measurements.height}
          onChange={(value) => handleInputChange("height", value)}
   
          icon={<TbRulerMeasure2 />}
        />
        

        <InputField
          id="width"
          label="Largura da Aliança"
          value={measurements.width}
          onChange={(value) => handleInputChange("width", value)}
          icon={<TbRulerMeasure/>}
        />
      </div>

      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

import { useState, useEffect } from "react";
import {InputField} from "./InputField";
import { ResultsDisplay } from "./ResultsDisplay";
import { RingMeasurements, CalculationResults } from "../types";
import { calculateResults } from "../utils/calculations";
import { TbRulerMeasure, TbRulerMeasure2 } from "react-icons/tb";
import { RING_SIZES_MAP } from "../utils/ringSizes";

export function RingForm() {
  const [measurements, setMeasurements] = useState<RingMeasurements>({
    internalCircumference: 0,
    height: 0,
    width: 0,
  });

    const [selectedRingSizeNumber, setSelectedRingSizeNumber] = useState<
    number | ""
  >("");

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

 const handleRingSizeSelect = (value: string) => {
    const ringNumber = parseInt(value);
    setSelectedRingSizeNumber(ringNumber);

    if (!isNaN(ringNumber) && RING_SIZES_MAP[ringNumber]) {
    
      setMeasurements((prev) => ({
        ...prev,
        internalCircumference: RING_SIZES_MAP[ringNumber],
      }));
    } else {
      
      setMeasurements((prev) => ({
        ...prev,
        internalCircumference: 0,
      }));
      
    }
  };
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
    

      <div className="mb-4">
          <label
            htmlFor="ringSizeSelect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Medida da Aliança
          </label>
          <select
            id="ringSizeSelect"
            value={selectedRingSizeNumber}
            onChange={(e) => handleRingSizeSelect(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Selecione a Medida</option>
            {Object.keys(RING_SIZES_MAP).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>
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

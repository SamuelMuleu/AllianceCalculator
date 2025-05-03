import { ResultCard } from "./ResultCard";
import { CalculationResults } from "../types";
import { motion } from "framer-motion";

interface ResultsDisplayProps {
  results: CalculationResults;
}

export function ResultsDisplay({ results }: ResultsDisplayProps) {
  const { suggestedConquilha, weight } = results;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="seu-estilo-aqui"
    >
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex justify-center p-2">
          Resultados do Cálculo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResultCard
            label="Conquilha Sugerida"
            value={suggestedConquilha}
            highlight={true}
          />

          <ResultCard
            label="Peso Necessário"
            value={weight}
            unit="g"
            highlight={true}
          />
        </div>
      </div>
    </motion.div>
  );
}

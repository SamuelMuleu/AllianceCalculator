import { motion } from "framer-motion";
import { ResultCard } from "./ResultCard";
import { CalculationResults } from "../types";

const fmt = (n: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function ResultsDisplay({ results }: { results: CalculationResults }) {
  const { suggestedConquilha, conquilhaValue, weight } = results;

  return (
    <motion.section
      aria-live="polite"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <h2 className="sr-only">Resultados do cálculo</h2>
      <ResultCard
        label="Conquilha sugerida"
        value={fmt(suggestedConquilha)}
        unit="mm"
        detail={`Valor calculado: ${fmt(conquilhaValue)} mm`}
      />
      <ResultCard label="Peso necessário" value={fmt(weight)} unit="g" detail="Peso estimado para a fundição" />
    </motion.section>
  );
}

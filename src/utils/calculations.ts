import { RingMeasurements, CalculationResults } from '../types';

const CONQUILHA_SIZES = [18, 19.8, 21.9, 24, 25.8];

export const calculateResults = (measurements: RingMeasurements): CalculationResults => {
  const { internalCircumference, height, width } = measurements;
  

  // Calculate the base value
  
  const baseValue = internalCircumference + 0.65 + height;
  
  // Calculate the conquilha value
  const conquilhaValue = baseValue + 0.65 + height;
  
  // Find the closest conquilha size
  const suggestedConquilha = findClosestConquilha(conquilhaValue);
  
  // Calculate the weight
  const weight = calculateWeight(baseValue, height, width);


  return {
    baseValue,
    conquilhaValue,
    suggestedConquilha,
    weight
  };
};

export const findClosestConquilha = (conquilhaValue: number): number => {
  return CONQUILHA_SIZES.reduce((prev, curr) => {
    return Math.abs(curr - conquilhaValue) < Math.abs(prev - conquilhaValue) ? curr : prev;
  });
};

export const calculateWeight = (baseValue: number, height: number, width: number): number => {
      const sumSide = 0.65 + height;


  return parseFloat(((baseValue * 3.14 * sumSide  * width) / 1000 * 16.75).toFixed(2));
};


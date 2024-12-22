import { ShipmentData, PredictionResult, predictionRules } from '../types/shipment';

export function predictDelay(data: ShipmentData): PredictionResult {
  let delayProbability = 0;

  // Weather impact
  delayProbability += predictionRules.weatherImpact[data.weather];

  // Traffic impact
  delayProbability += predictionRules.trafficImpact[data.traffic];

  // Vehicle type impact
  delayProbability += predictionRules.vehicleTypeImpact[data.vehicleType];

  // Distance impact
  if (data.distance > predictionRules.distanceThresholds.long) {
    delayProbability += 0.3;
  } else if (data.distance > predictionRules.distanceThresholds.medium) {
    delayProbability += 0.2;
  } else if (data.distance > predictionRules.distanceThresholds.short) {
    delayProbability += 0.1;
  }

  // Normalize probability
  delayProbability = Math.min(1, delayProbability);

  return {
    isDelayed: delayProbability > 0.5,
    confidence: Math.round(Math.abs(0.5 - delayProbability) * 200) // Convert to percentage
  };
}
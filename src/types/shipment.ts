export interface ShipmentData {
  origin: string;
  destination: string;
  shipmentDate: string;
  vehicleType: 'Truck' | 'Lorry' | 'Container' | 'Trailer';
  distance: number;
  weather: 'Clear' | 'Rain' | 'Fog';
  traffic: 'Light' | 'Moderate' | 'Heavy';
}

export interface PredictionResult {
  isDelayed: boolean;
  confidence: number;
}

// Simple decision tree rules
export const predictionRules = {
  weatherImpact: {
    Clear: 0,
    Rain: 0.3,
    Fog: 0.5
  },
  trafficImpact: {
    Light: 0,
    Moderate: 0.2,
    Heavy: 0.4
  },
  vehicleTypeImpact: {
    Truck: 0.1,
    Lorry: 0.15,
    Container: 0.2,
    Trailer: 0.25
  },
  distanceThresholds: {
    short: 300,
    medium: 600,
    long: 1000
  }
};
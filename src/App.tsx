import React, { useState } from 'react';
import ShipmentForm from './components/ShipmentForm';
import PredictionResult from './components/PredictionResult';
import { ShipmentData, PredictionResult as PredictionResultType } from './types/shipment';
import { predictDelay } from './utils/predictionModel';

function App() {
  const [predictionResult, setPredictionResult] = useState<PredictionResultType | null>(null);

  const handleSubmit = (data: ShipmentData) => {
    const result = predictDelay(data);
    setPredictionResult(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 bg-blue-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            
          </h1>
          
          <ShipmentForm onSubmit={handleSubmit} />
          <PredictionResult result={predictionResult} />
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { PredictionResult as PredictionResultType } from '../types/shipment';
import { CheckCircle, XCircle } from 'lucide-react';

interface Props {
  result: PredictionResultType | null;
}

export default function PredictionResult({ result }: Props) {
  if (!result) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Prediction Result</h3>
        {result.isDelayed ? (
          <XCircle className="w-8 h-8 text-red-500" />
        ) : (
          <CheckCircle className="w-8 h-8 text-green-500" />
        )}
      </div>
      
      <div className="mt-4">
        <p className="text-lg">
          Status: {' '}
          <span className={`font-medium ${result.isDelayed ? 'text-red-600' : 'text-green-600'}`}>
            {result.isDelayed ? 'Likely to be Delayed' : 'On Time'}
          </span>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Confidence: {result.confidence}%
        </p>
      </div>
    </div>
  );
}
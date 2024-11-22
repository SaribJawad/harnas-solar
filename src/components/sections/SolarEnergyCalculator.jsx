import React, { useState } from "react";
import { Calculator, Sun } from "lucide-react";

const SolarCalculator = () => {
  const [values, setValues] = useState({
    dailyUsage: 30,
    roofArea: 100,
    sunHours: 5,
    electricityRate: 0.12,
  });

  const [results, setResults] = useState({
    potentialProduction: 0,
    annualSavings: 0,
    carbonOffset: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const calculateSolar = () => {
    // Simplified calculations for demonstration
    const efficiency = 0.15; // Solar panel efficiency
    const potentialProduction =
      values.roofArea * efficiency * values.sunHours * 365;
    const annualSavings = potentialProduction * values.electricityRate;
    const carbonOffset = potentialProduction * 0.0007; // Rough estimate of CO2 savings per kWh

    setResults({
      potentialProduction: Math.round(potentialProduction),
      annualSavings: Math.round(annualSavings),
      carbonOffset: Math.round(carbonOffset),
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#046200] to-[#045501] p-4">
          <h2 className="text-white text-xl font-bold flex items-center gap-2">
            <Sun className="h-6 w-6" />
            Solar Energy Calculator
          </h2>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Daily Electricity Usage (kWh)
                </label>
                <input
                  type="number"
                  name="dailyUsage"
                  value={values.dailyUsage}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:[#046200] focus:border-[#046200] outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Available Roof Area (m²)
                </label>
                <input
                  type="number"
                  name="roofArea"
                  value={values.roofArea}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:[#046200] focus:border-[#046200] outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Peak Sun Hours per Day
                </label>
                <input
                  type="number"
                  name="sunHours"
                  value={values.sunHours}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:[#046200] focus:border-[#046200] outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Electricity Rate ($/kWh)
                </label>
                <input
                  type="number"
                  name="electricityRate"
                  value={values.electricityRate}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:[#046200] focus:border-[#046200] outline-none"
                  step="0.01"
                />
              </div>

              <button
                onClick={calculateSolar}
                className="w-full bg-[#046200] text-white p-3 rounded-md  hover:bg-[#1a5a18] transition-colors duration-300 flex items-center justify-center gap-2 "
              >
                <Calculator className="h-5 w-5" />
                Calculate
              </button>
            </div>

            {/* Results Section */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Results</h3>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">
                    Annual Energy Production
                  </div>
                  <div className="text-2xl font-bold text-[#145e2a]">
                    {results.potentialProduction.toLocaleString()} kWh
                  </div>
                </div>

                <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">
                    Estimated Annual Savings
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ${results.annualSavings.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-md shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">Carbon Offset</div>
                  <div className="text-2xl font-bold text-emerald-600">
                    {results.carbonOffset.toLocaleString()} kg CO₂
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;

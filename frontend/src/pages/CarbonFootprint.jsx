import React, { useState } from "react";

const CarbonFootprint = () => {
  const [distance, setDistance] = useState("");
  const [transport, setTransport] = useState("car");
  const [emissions, setEmissions] = useState(null);

  // Emission factors (kg CO2 per km)
  const emissionRates = {
    car: 0.21, // Example: 0.21 kg CO2 per km for a petrol car
    bus: 0.05,
    train: 0.03,
    bike: 0,
    walk: 0,
  };

  const calculateEmissions = () => {
    if (distance && !isNaN(distance)) {
      setEmissions((distance * emissionRates[transport]).toFixed(2));
    } else {
      setEmissions(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-semibold mb-6">Carbon Footprint Tracker</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <label className="block mb-2 text-lg">Distance (in km)</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter distance..."
        />

        <label className="block mb-2 text-lg">Transport Mode</label>
        <select
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="car">Car</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="bike">Bicycle</option>
          <option value="walk">Walking</option>
        </select>

        <button
          onClick={calculateEmissions}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Calculate Footprint
        </button>

        {emissions !== null && (
          <p className="mt-4 text-lg font-semibold">
            Estimated Emissions: {emissions} kg CO₂
          </p>
        )}
      </div>
    </div>
  );
};

export default CarbonFootprint;

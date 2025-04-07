import React from 'react';
import { ShieldCheck } from 'lucide-react'; // or use your own image if preferred

const Safe = () => {
  return (
    <section className="text-center py-20 bg-white relative overflow-hidden">
      {/* Background arcs or graphic (optional) can be added here */}

      <div className="flex justify-center  mb-6">
        <div className="bg-blue-600 p-4 rounded-2xl">
          <ShieldCheck className="text-white w-20 h-20" />
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl text-gray-600 font-bold leading-tight"> Ride{' '}
        <span className="text-cyan-400">Safe</span>{' '}
        <span className="text-blue-500">wit</span>
        <span className="text-indigo-400">h</span>{' '}
        <span className="text-indigo-600">Blu</span>
        <span className="text-blue-800">smart</span>
      </h2>

      <p className="text-gray-600 mt-4 max-w-xl mx-auto px-4 text-lg mb-6">
        Your safety is our priority. Trust us for safe rides, screened & trained driver-partners, and 24/7 support, ensuring worry-free travel.
      </p>
    </section>
  );
};

export default Safe;

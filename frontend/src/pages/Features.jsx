import React from 'react';

const FeatureCard = ({ title, subtitle, imgSrc }) => {
  return (
    <div className="relative w-[350px] h-[380px] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>

      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/70 to-transparent"></div>

      {/* Text Section */}
      <div className="absolute bottom-6 left-0 right-0 text-center p-4 transition-all duration-500 opacity-100 group-hover:opacity-0">
        <h3 className="text-xl font-semibold">{subtitle}</h3>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      {/* Hover Text Animation */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-lg font-semibold text-blue-600">🚗 Book Now & Enjoy the Ride!</p>
        <p className="text-sm text-gray-600 mt-2">Experience a smooth and comfortable journey.</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-12 bg-gray-100">
       <div className="group">
       {/* <FeatureCard 
          title="City Rides" 
          subtitle="Book" 
          imgSrc="/city-rides.png"
        />
      </div>
      <div className="group">
        <FeatureCard 
          title="Rental Rides" 
          subtitle="Hourly" 
          imgSrc="/rental-rides.png"
        />
      </div>
      <div className="group">
        <FeatureCard 
          title="Airport Rides" 
          subtitle="Book" 
          imgSrc="/airport-rides.png"
        /> */}
      </div>
      <div className="group">
        <FeatureCard 
          title="Pet-Friendly Rides" 
          subtitle="Bring Your Pet" 
          imgSrc="/pet.jpg"
        />
      </div>
      <div className="group">
        <FeatureCard 
          title="Women Drivers" 
          subtitle="Safe & Secure" 
          imgSrc="/women.jpg"
        />
      </div>
      <div className="group">
        <FeatureCard 
          title="Carbon Footprint" 
          subtitle="Eco-Friendly Rides" 
          imgSrc="/carbon.jpg"
        />
      </div>
    </div>
  );
};

export default Features;

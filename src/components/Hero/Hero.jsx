import React from "react";
import heroImg from "../../assets/Hero.jpg";

function Hero() {
  return (
    <div className="relative container mx-auto h-[550px] ">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero section"
        className="w-full h-full object-cover "
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Restaurant
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Enjoy delicious food and a cozy atmosphere with us.
        </p>
        
      </div>
    </div>
  );
}

export default Hero;

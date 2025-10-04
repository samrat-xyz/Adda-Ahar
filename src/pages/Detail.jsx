import React from "react";

function Detail({ details }) {
  const { strMealThumb, strMeal, strInstructions, strArea } = details;

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-gray-400">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="p-6 md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{strMeal}</h1>
          <p className="text-lg text-gray-500 mb-4">
            <span className="font-semibold text-gray-700">Dish From:</span> {strArea}
          </p>
          <p className="text-gray-700 leading-relaxed">
            <span className="text-lg font-semibold">Description:</span>{strInstructions.slice(0, 400)}...
          </p>
        </div>

        {/* Optional Button */}
        <div className="mt-3">
          <button className="btn btn-neutral btn-outline px-8 py-3 text-lg">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;

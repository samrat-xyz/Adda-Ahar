import React from "react";
import { Link } from "react-router";

function Item({ item }) {
  const { strMealThumb, strMeal, idMeal } = item;

  const price = Math.floor(Math.random() * 220) + 180;


  const description = `${strMeal} is one of our delicious seafood specials prepared with fresh ingredients and unique flavors.`;

  return (
    <div className="rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
      <div>
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-60 object-cover rounded-lg"
        />
      </div>

      <div className="space-y-2 mt-4">
        <p className="text-lg font-semibold">{strMeal}</p>
        <p>
          <span className="font-medium">Price:</span> {price} ৳
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Description:</span> {description}
        </p>

        <div className="flex items-center justify-center gap-8 p-3">
          <Link
            className="btn btn-neutral btn-outline px-8 py-3 text-lg"
          >
            Order
          </Link>
          <Link
            to={`/${idMeal}`}
            className="btn btn-neutral btn-outline px-8 py-3 text-lg"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;

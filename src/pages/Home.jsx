import React from "react";
import { useLoaderData } from "react-router";
import Item from "./Item";

function Home() {
  const data = useLoaderData();
  const items = data.meals;
  console.log("From Home :",items)
  return (
    <div className="mt-10 ">
      <h2 className="my-6 text-5xl font-bold text-gray-800 text-center">Our Seafood Menu</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-3">
        {items.map((item) => (
          <Item item={item} key={item.idMeal} />
        ))}
      </div>
    </div>
  );
}

export default Home;

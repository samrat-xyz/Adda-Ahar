import React from "react";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          About <span className="text-amber-500">আড্ডা আহার</span>
        </h1>
        <p className="text-gray-500 text-lg">
          Bringing flavors from around the world straight to your kitchen.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src="https://www.themealdb.com/images/media/meals/1520084413.jpg"
            alt="About FoodZone"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-amber-600">আড্ডা আহার</span> — your ultimate
            destination for discovering mouthwatering recipes and cooking ideas.
            We bring together the finest dishes from across the globe to help
            you cook like a pro right at home.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whether you’re an experienced chef or a complete beginner, we offer
            easy-to-follow recipes, ingredient details, and step-by-step
            cooking instructions to make your culinary journey exciting and
            fun.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make cooking accessible, enjoyable, and inspiring
            for everyone. So, grab your ingredients, turn up the heat, and let’s
            create something delicious together! 🍳
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-20 bg-amber-50 p-10 rounded-2xl shadow-md text-center">
        <h2 className="text-3xl font-bold text-amber-600 mb-3">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          To inspire millions of food lovers around the world by sharing
          authentic recipes, culinary stories, and creative cooking ideas that
          bring joy, flavor, and connection to every meal.
        </p>
      </div>
    </div>
  );
}

export default About;


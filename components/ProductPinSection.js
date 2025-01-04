"use client"; 

import React from "react";
import { PinContainer } from "./PinContainer"; // Ensure this is the correct path to your PinContainer component

const ProductPinSection = () => {
  const products = [
    {
      title: "Luxurious Chocolate",
      description: "Rich and creamy chocolate made from the finest cocoa.",
      image: "/assets/Artboard.png", // Replace with actual path in public folder
      href: "#",
    },
    {
      title: "Artisan Truffles",
      description: "Handcrafted truffles with unique flavors.",
      image: "/assets/Artboard.png", // Replace with actual path in public folder
      href: "#",
    },
    {
      title: "Chocolate Bars",
      description: "Classic chocolate bars with a modern twist.",
      image: "/assets/Artboard.png", // Replace with actual path in public folder
      href: "#",
    },
  ];

  return (
    <div className="bg-[radial-gradient(closest-side,_#2B2118,_#3E2C24)] py-16">
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <PinContainer
            key={index}
            title={product.title}
            href={product.href}
            className="w-[20rem] h-[20rem]"
          >
            <div className="flex flex-col items-center text-center">
              {/* Ensure correct path and check if the images exist */}
              <img
                src={product.image}
                alt={product.title}
                className="w-48 h-48 overflow-hidden rounded-full mb-4"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop if image is missing
                  e.target.src = "/assets/Artboard.png"; // Default image if missing
                }}
              />
              <h3 className="mt-4 text-xl font-bold text-gold">{product.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{product.description}</p>
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default ProductPinSection;

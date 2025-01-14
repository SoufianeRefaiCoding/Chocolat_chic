"use client";

import React from "react";
import { PinContainer } from "./PinContainer"; // Ensure this is the correct path to your PinContainer component
import { motion } from "framer-motion";
import noisette from "@/public/assets/noisette.png";
import Image from "next/image";

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
    {
      title: "Cocoa Nibs",
      description: "Perfect for baking or snacking, made from pure cocoa beans.",
      image: "/assets/Artboard.png", // Replace with actual path in public folder
      href: "#",
    },

  ];

  return (
    <div className="overflow-hidden">
      <div className=" py-16">
        <motion.h2
          className="font-cinzel text-4xl text-center text-gold mb-6 flex items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CHOCOLAT POUR LES ÉVÉNEMENTS
          <motion.div
            className="mx-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src={noisette}
              alt="Noisette"
              width={40}
              height={40}
              className="w-10 h-10 object-cover"
            />
          </motion.div>
        </motion.h2>
        <p className="text-center text-white/60 text-sm lg:text-base leading-relaxed mb-8 px-4 max-w-4xl mx-auto">
          Nous sommes fiers de vous offrir une expérience chocolatée unique pour vos occasions spéciales et sportives. Imaginez déguster du chocolat imprimé en forme de chemise d'équipe nationale ou en forme de la célèbre coupe d'Afrique.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-16 max-w-[calc(100vw-2rem)] mx-auto"
        >
          {products.map((product, index) => (
            <PinContainer
              key={index}
              title={product.title}
              href={product.href}
              className="w-full h-auto relative text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 to-red-500 p-1 mb-4 relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 transform group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop if image is missing
                      e.target.src = "/assets/default-image.png"; // Default image if missing
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gold mb-1">{product.title}</h3>
                {/* <p className="text-sm text-body-color leading-relaxed px-4 opacity-80">
                  {product.description}
                </p> */}
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPinSection;

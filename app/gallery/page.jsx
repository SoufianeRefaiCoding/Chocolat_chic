"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import galleryImage1 from "@/public/assets/Artboard9.png"; // Replace with your images
import galleryImage2 from "@/public/assets/Artboard9.png";
import galleryImage3 from "@/public/assets/Artboard9.png";
import galleryImage4 from "@/public/assets/Artboard9.png";
import galleryImage5 from "@/public/assets/Artboard9.png";
import galleryImage6 from "@/public/assets/Artboard9.png";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const images = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (<>
    <Header/>
    <div className="bg-[radial-gradient(closest-side,_#2B2118,_#3E2C24)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-cinzel text-gold">Galerie</h1>
          <p className="text-sm text-body-color mt-4">
            Explorez notre collection d’images mettant en valeur nos créations chocolatées uniques.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{opacity: 0, y: -50}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>
            </div>
          ))}
        </motion.div>

        {/* Modal for Viewing Images */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
              <Image
                src={selectedImage}
                alt="Selected Gallery Image"
                layout="responsive"
                width={800}
                height={600}
                objectFit="cover"
                className="rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>);
};

export default GalleryPage;

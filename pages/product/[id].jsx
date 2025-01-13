"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "react-use-cart";
import products from "@/components/productData"


const SingleProduct = () => {
    const { addItem } = useCart();
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  if (!params || !params.id) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg">
        Error: No product ID provided.
      </div>
    );
  }

  const productId = parseInt(params.id, 10);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center justify-center p-6 mt-20">
      {/* Main Product Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl flex flex-col md:flex-row items-center gap-8 animate-fade-in">
        {/* Main Product Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={selectedImage || product.image}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {product.description}
          </p>
          <p className="text-2xl font-semibold text-gold mb-6">
            ${product.price}
          </p>
          <button onClick={() => addItem(product)} className="bg-gold text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-gold-dark transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-10 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Gallery</h2>
        <div className="flex gap-4 overflow-x-auto">
          {product.gallery.map((image, index) => (
            <div
              key={index}
              className="flex-none w-28 h-28 rounded-lg overflow-hidden shadow cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

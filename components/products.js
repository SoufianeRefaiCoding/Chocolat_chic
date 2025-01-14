"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "react-use-cart";
import Link from "next/link";
import products from "@/components/productData";

const ProductSection = () => {
  const { addItem } = useCart();

  return (
    <div className=" py-16" id="products">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          className="font-cinzel text-4xl text-gold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Products
        </motion.h2>
        <motion.p
          className="text-base text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Discover our exquisite handcrafted chocolate creations, crafted with passion and precision.
        </motion.p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="relative bg-white rounded-lg shadow-xl p-6 overflow-hidden transform hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: product.id * 0.2 }}
          >
            {/* Floating Animation */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-chocolate-800 rounded-full opacity-80"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            ></motion.div>

            {/* Product Image */}
            <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md transform hover:scale-110 transition-transform"
              />
            </div>

            {/* Product Title */}
            <h3 className="font-cinzel text-xl text-gold text-center mb-2">{product.title}</h3>

            {/* Product Description */}
            {/* <p className="text-sm text-body-color text-center text-gray-700 leading-relaxed mb-4">
              {product.description}
            </p> */}

            {/* Price, Add to Cart, and View Details */}
            <div className="flex flex-col items-center gap-4">
              {/* Price */}
              <span className="  ">
                 <span className="text-yellow-600 text-2xl font-cinzel">{product.price}Dh </span>
                 <span className=" line-through mr-4">{product.Oldprice} Dh</span>
              </span>

              {/* Add to Cart */}
              <button
                onClick={() => addItem(product)}
                className="bg-gold text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
              >
                Add to Cart
              </button>

              {/* View Details Link */}
              {/* <Link href={`/product/${product.id}`}>
                <button className="bg-chocolate-800 text-offwhite px-4 py-2 mt-4 rounded-lg hover:bg-chocolate-900 transition">
                  View Details
                </button>
              </Link> */}
            </div>
            <Link href={`/product/${product.id}`} passHref>
              <div className="absolute inset-0 z-10 cursor-pointer"></div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <motion.a
          href="#explore-more"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 4px 15px rgba(255, 215, 0, 0.5)",
            backgroundColor: "#FFD700",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-gold to-yellow-500 px-8 py-4 text-lg font-semibold text-chocolate-900 rounded-full shadow-lg transition-transform"
        >
          Explore More Products
        </motion.a>
      </div>
    </div>
  );
};

export default ProductSection;

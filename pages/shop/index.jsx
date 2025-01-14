"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import products from "@/components/productData"; // Product data
import { useCart } from "react-use-cart";
import Link from "next/link";
const ShopPage = () => {
    const { addItem } = useCart();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered and searched products
  const filteredProducts = products.filter(
    (product) =>
      (filter === "all" || product.category === filter) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" text-white min-h-screen">
      {/* Page Header */}
      <header className="py-12 text-center">
        <motion.h1
          className="text-5xl font-extrabold font-cinzel text-gold mt-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Shop Our Collection
        </motion.h1>
        <motion.p
          className="text-white/70 mt-4 text-lg font-brittany"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Indulge in the finest handcrafted chocolates made with passion.
        </motion.p>
      </header>

      {/* Filters and Search */}
      <div className="flex flex-wrap justify-center items-center gap-6 py-6 px-8">
        {/* Filters */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {["all", "dark", "milk", "white"].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium  ${
                filter === category
                  ? "bg-gold text-dark shadow-md"
                  : "bg-white/20 hover:bg-white/30"
              } transition-all`}
              onClick={() => setFilter(category)}
            >
              {category === "all" ? "All" : `${category} Chocolate`}
            </button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.input
          type="text"
          placeholder="Search for chocolates..."
          className="px-4 py-3 w-80 rounded-full bg-white/10 text-white text-sm focus:ring-2 focus:ring-gold outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 pb-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* Animated Background Accent */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-gold/20 via-transparent to-transparent"
              animate={{
                opacity: [0.5, 0.2, 0.5],
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>

            {/* Product Image */}
            <div className="relative w-full h-60">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
               <Link href={`/product/${product.id}`} passHref>
              <div className="absolute inset-0 z-10 cursor-pointer"></div>
            </Link>
            </div>

            {/* Product Details */}
            <div className="p-6 relative z-10">
              <h3 className="text-lg font-bold font-cinzel text-gold">{product.title}</h3>
              <p className="text-sm text-gray-700 mt-2">
                {product.description.substring(0, 50)}...
              </p>

              {/* Price and Actions */}
              <div className="flex justify-between items-center mt-6">
              <span className="  ">
                 <span className="text-yellow-600 text-2xl font-cinzel">{product.price}Dh </span>
                 <span className=" line-through mr-4 text-gray-400">{product.Oldprice} Dh</span>
              </span>
                <motion.button   onClick={() => addItem(product)}
                  className="bg-gold text-dark px-3 py-2 rounded-full hover:bg-yellow-600 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </div>
           
          </motion.div>
          
        ))}
       
      </motion.div>
    </div>
  );
};

export default ShopPage;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Import your product images
import product1 from "../public/assets/Artboard.png";
import product2 from "../public/assets/Artboard9.png";
import product3 from "../public/assets/Artboard12.png";
import product4 from "../public/assets/Artboard10.png";

const products = [
    {
        id: 1,
        image: product1,
        title: "TASSE CAP",
        description: "Votre logo, votre histoire, sur chaque chocolat. Imprimez l'emblème de votre restaurant sur ces chocolats exquis et décorez vos tasses, les transformant en une délicieuse extension de votre marque. Ce n'est pas seulement un dessert, c'est une déclaration",
    },
    {
        id: 2,
        image: product2,
        title: "ROUND LOPS",
        description: "Faites plaisir à vos sens e t transformez chaque moment de repas en une symphonie de douceur grâce à notre chocolat de décoration ROUND LOOPS. Encouragez l e buzz sur les médias sociaux et l e marketing de bouche-a-oreille lorsque vos clients partagent leur expérience personnalisée du chocolat",
    },
    {
        id: 3,
        image: product3,
        title: "LA PLUME",
        description: "Surprenez vos clients en leur offrant une douce marque de reconnaissance. Qu'il s'agisse d'une occasion spéciale ou d'un repas régulier, nos chocolats décoratifs portant votre logo constituent un plat à emporter mémorable qui laissera une impression durable",
    },
    {
        id: 4,
        image: product4,
        title: "SPON BITE",
        description: "Chaque pièce témoigne de l'art de votre restaurant, faisant du dessert und élice visuel. créerune expérience inoubliable et personnalisée du dessert, Faites votre marque avec chaqu ebouchée!",
    },
];

const ProductSection = () => {
    return (
        <div className="bg-[radial-gradient(closest-side,_#2B2118,_#3E2C24)] py-16">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        className="relative bg-white rounded-lg shadow-lg p-4 overflow-hidden transform hover:scale-105 transition-transform"
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
                        <div className="relative w-full h-64 mb-4">
                            <Image
                                src={product.image}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>

                        {/* Product Title */}
                        <h3 className="font-cinzel text-lg text-gold text-center mb-2">{product.title}</h3>

                        {/* Product Description */}
                        <p className="text-sm text-body-color text-center text-gray-700 leading-relaxed">
                            {product.description}
                        </p>
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

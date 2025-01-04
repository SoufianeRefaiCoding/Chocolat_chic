"use client"
import Image from "next/image";
import background from "../public/assets/bckground.png";
import { motion } from "framer-motion";
import noisette from "../public/assets/noisette.png"; 

const About = () => {
    return (<>
        <div className="bg-[radial-gradient(closest-side,_#2B2118,_#3E2C24)] py-10 relative ">
            {/* Cadre (Frame) */}
            <div className="relative mx-auto max-w-4xl bg-white rounded-lg shadow-lg border-4 border-gold  pb-12">
                {/* Top Image */}
                <div className="relative w-full h-[100px] overflow-hidden rounded-t-lg">
                    <Image
                        src={background} // Replace with the actual path to your image
                        alt="Delicious Chocolate"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>

                {/* Text Content */}
                <div className="px-8">
                    {/* <h2 className="font-cinzel text-4xl text-center text-gold mb-6">About Us</h2> */}
                    <motion.h2
                            className="font-cinzel text-4xl text-center text-gold mb-6 flex items-center justify-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Noisette Image in Title */}
                            About Us
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
                                    src={noisette} // Noisette image
                                    alt="Noisette"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 object-cover"
                                />
                            </motion.div>
                           
                        </motion.h2>
                        <motion.p
                            className="text-base text-body-color leading-relaxed text-justify font-brittany"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >                        Welcome to Chocolatchec, where passion meets perfection in the art of chocolate craftsmanship.
                        Our journey began with a simple belief: that chocolate should not only delight the senses but
                        also tell a story. Every creation is a blend of tradition, innovation, and the finest ingredients.
                        Our master chocolatiers pour their heart and soul into each piece, ensuring every bite is a
                        celebration of flavor, texture, and artistry. Whether you’re indulging yourself or sharing the
                        joy with loved ones, Chocolatchec is here to elevate your chocolate experience.
                    </motion.p>
                    
                    {/* Animated Button */}
                    <div className="flex justify-center mt-8">
                        <motion.a
                            href="#explore"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0px 4px 15px rgba(255, 215, 0, 0.5)",
                                backgroundColor: "#FFD700",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block rounded-full bg-gradient-to-r from-gold to-yellow-500 px-8 py-4 text-lg font-semibold text-chocolate-900 shadow-lg transition-transform"
                        >
                            Learn More
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default About;
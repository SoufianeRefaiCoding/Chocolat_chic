"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage1 from "../public/assets/Artboard9.png"; // Replace with your images
import aboutImage2 from "../public/assets/Artboard12.png";
import aboutImage3 from "../public/assets/Artboard9.png";
import noisette from "@/public/assets/noisette.png";

const AboutUsSection = () => {
    return (
        <div className=" py-16" id="about-us">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 lg:px-16">
                {/* Left Section: Text */}
                <motion.div
                    className="lg:w-1/2 text-white space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        className="font-cinzel text-4xl  text-gold mb-6 flex items-start "
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        About us
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
                    </motion.h2>          <p className="text-sm lg:text-base text-white/80 leading-relaxed font-brittany">
                        Nous sommes fiers de vous offrir une expérience chocolatée unique
                        pour vos occasions spéciales et sportives. Imaginez déguster du
                        chocolat imprimé en forme de chemise d'équipe nationale ou en forme
                        de la célèbre coupe d'Afrique.
                    </p>
                    <p className="text-sm lg:text-base text-white/80 leading-relaxed font-brittany">
                        Nos créations sont fabriquées avec passion, en utilisant les
                        ingrédients les plus fins et les techniques les plus modernes, pour
                        garantir un produit qui incarne luxe et innovation.
                    </p>
                </motion.div>

                {/* Right Section: Images */}
                <motion.div
                    className="lg:w-1/2 grid grid-cols-2 gap-4 w-full ]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Image 1: Vertical */}
                    <div className="relative col-span-1 row-span-2 h-[28rem] rounded-lg overflow-hidden group">
                        <Image
                            src={aboutImage1}
                            alt="About Image 1"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 group-hover:scale-105 rounded-lg shadow-lg border-4 border-gold "
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>
                    </div>

                    {/* Image 2: Horizontal */}
                    <div className="relative col-span-1 h-[13rem] rounded-lg overflow-hidden group">
                        <Image
                            src={aboutImage2}
                            alt="About Image 2"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 group-hover:scale-105 rounded-lg shadow-lg border-4 border-gold "
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>
                    </div>

                    {/* Image 3: Horizontal */}
                    <div className="relative col-span-1 h-[13rem] rounded-lg overflow-hidden group">
                        <Image
                            src={aboutImage3}
                            alt="About Image 3"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500 group-hover:scale-105 rounded-lg shadow-lg border-4 border-gold "
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>
                    </div>
                </motion.div>
            </div>            
        </div>
    );
};

export default AboutUsSection;

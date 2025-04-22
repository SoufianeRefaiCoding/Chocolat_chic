"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import noisette from "@/public/assets/noisette.png";
import Chocolate_n from "@/public/assets/Chocolate_n.png";
import chocolateIcon from "@/public/assets/chocolateicon.png"; // Import the chocolate icon image
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css"; // Import the CSS module

const Hero = () => {
  // State to store the dynamic positions and animation values
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random positions and animations for particles on client side
    const generateParticles = () => {
      let particlesArr = [];
      for (let i = 0; i < 20; i++) {
        const style = {
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
          animationDuration: `${Math.random() * 10 + 15}s`,
          animationDelay: `${Math.random() * 10}s`,
        };
        particlesArr.push(style);
      }
      setParticles(particlesArr); // Set dynamic styles in state
    };

    generateParticles(); // Call the function when the component mounts
  }, []); // Empty dependency array means this effect runs only on mount (client-side)

  return (
    <>
    <motion.div
    className="hero-section text-center"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, type: "spring", stiffness: 50 }}
  >
      <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#2B2118,#3E2C24_35%,#523F34_60%,#2B2118_80%)]">
        {/* Chocolate Swimming Particles */}
        <div className={styles.chocolateParticles}>
          {particles.map((style, index) => (
            <div
              key={index}
              className={`${styles.chocolateParticle}`} // Apply the chocolate particle class
              style={style}
            />
          ))}
        </div>

        {/* Gradient Circle */}
        <div className="absolute rounded-[50%] w-[3000px] h-[1000px] top-[450px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,_#2B2118_80%,_#3E2C24_35%)] z-0 shadow-2xl shadow-[#fff]/90"></div>

        {/* Content Section */}
        <div className="relative z-10">
          <div className="text-8xl font-bold text-center max-w-[800px] mx-auto">
            <h1 className="font-cinzel text-gold text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Welcome to Chocolatchec
            </h1>
            <h3 className="font-cinzel text-offwhite mb-12 text-base !leading-relaxed sm:text-lg md:text-xl">
              Experience the Art of Chocolate Craftsmanship
            </h3>
            <p className="font-thin mb-12 text-white/55 !leading-relaxed text-base text-body-color sm:text-lg md:text-xl">
              Crafted with passion and precision, Chocolatchec brings you a blend of tradition and innovation in every bite. Elevate your taste experience with the finest ingredients and unparalleled artistry.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <motion.a
              href="shop"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 4px 15px rgba(255, 215, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-gold to-yellow-500 px-10 py-4 text-lg font-semibold text-chocolate-900 shadow-lg transition-transform"
            >
              🔥 Commande Now
            </motion.a>
            <motion.a
              href="#"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#3E2723",
                color: "#FFF",
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-transparent border border-gold px-10 py-4 text-lg font-semibold text-gold transition-colors hover:bg-chocolate-800 hover:text-white"
            >
              Contacter Nous
            </motion.a>
          </div>

          {/* Animated Floating Elements */}
          <motion.div
            className="absolute right-[100%] top-[150px]   sm:right-[5%] sm:top-[100px]"
            drag
            dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Image
              src={noisette}
              height={200}
              width={200}
              alt="Floating Noisette"
              draggable="false"
              className="drop-shadow-2xl rotate-12 sm:rotate-6"
            />
          </motion.div>

         

        </div>
      </div>
      </motion.div>
    </>
  );
};

export default Hero;

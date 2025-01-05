"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Add icons for social media

const Footer = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom,#2B2118,#3E2C24_35%,#523F34_60%,#2B2118_80%)] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">À Propos</h3>
            <p className="text-sm">
              ChocolatChic vous propose des créations chocolatées pour toutes
              vos occasions spéciales. Découvrez nos chocolats uniques en forme
              de vos souvenirs les plus précieux.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-gold">Accueil</a></li>
              <li><a href="/about" className="hover:text-gold">À Propos</a></li>
              <li><a href="/shop" className="hover:text-gold">Boutique</a></li>
              <li><a href="/contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-Nous</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gold">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gold">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gold">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gold">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactez-Nous</h3>
            <p className="text-sm">Email: contact@chocolatchic.com</p>
            <p className="text-sm">Téléphone: +212 123 456 789</p>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ChocolatChic. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

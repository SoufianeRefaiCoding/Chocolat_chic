"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from "@/public/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set active link based on the current pathname
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <header className="bg-gradient-to-r from-chocolate-800 via-chocolate-900 to-chocolate-800 text-offwhite shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <Image
              src={logo}
              alt="Chocolate Logo"
              width={120}
              height={40}
              className="hover:scale-110 transition-transform"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className={`hidden md:flex space-x-10 font-cinzel text-lg`}>
          <Link
            href="/"
            className={activeLink === "/" ? "activeLink" : "hover:text-gold"}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={activeLink === "/about" ? "activeLink" : "hover:text-gold"}
          >
            About Us
          </Link>
          <Link
            href="/products"
            className={activeLink === "/products" ? "activeLink" : "hover:text-gold"}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={activeLink === "/contact" ? "activeLink" : "hover:text-gold"}
          >
            Contact
          </Link>
          <button className="bg-gold text-chocolate-900 font-cinzel py-2 px-6 rounded shadow hover:bg-chocolate-700 hover:text-gold transition-all">
            Order Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-chocolate-800 text-offwhite text-lg divide-y divide-chocolate-600">
          <Link
            href="/"
            className={`block px-4 py-3 ${
              activeLink === "/" ? "activeLink" : "hover:bg-chocolate-700"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block px-4 py-3 ${
              activeLink === "/about" ? "activeLink" : "hover:bg-chocolate-700"
            }`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/products"
            className={`block px-4 py-3 ${
              activeLink === "/products" ? "activeLink" : "hover:bg-chocolate-700"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/contact"
            className={`block px-4 py-3 ${
              activeLink === "/contact" ? "activeLink" : "hover:bg-chocolate-700"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <button
            className="w-full bg-gold text-chocolate-900 font-cinzel py-3 mt-2 rounded shadow hover:bg-chocolate-700 hover:text-gold transition-all"
            onClick={() => setIsOpen(false)}
          >
            Order Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

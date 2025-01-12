"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from "@/public/assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [totalItems, setTotalItems] = useState(0); // State for total cart items
  const { totalUniqueItems } = useCart();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(window.location.pathname); // Set active link based on current pathname
    }
  }, []);
  useEffect(() => {
    setTotalItems(totalUniqueItems); // Update total items when cart changes
  }, [totalUniqueItems]);
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
          href="/#about-us"
          className={activeLink === "/about" ? "activeLink" : "hover:text-gold"}
        >
          About Us
        </Link>
        <Link
          href="/#products"
          className={activeLink === "/products" ? "activeLink" : "hover:text-gold"}
        >
          Products
        </Link>
        <Link
          href="/gallery"
          className={activeLink === "/gallery" ? "activeLink" : "hover:text-gold"}
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className={activeLink === "/contact" ? "activeLink" : "hover:text-gold"}
        >
          Contact
        </Link>
        <button className="bg-gold text-chocolate-900 font-cinzel py-2 px-6 rounded shadow hover:bg-chocolate-700 hover:text-gold transition-all">
          <Link href="/order">Order now</Link>
        </button>
        <Link href="/cart" className="relative">
          <FaShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      

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

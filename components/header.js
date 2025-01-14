"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from "@/public/assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "react-use-cart";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position
  const { totalUniqueItems } = useCart();

  // Update active link on route change
  useEffect(() => {
    const handleRouteChange = (url) => {
      setActiveLink(url);
    };

    setActiveLink(router.asPath);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  // Update total items when cart changes
  useEffect(() => {
    setTotalItems(totalUniqueItems);
  }, [totalUniqueItems]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add opacity and reduce height
      } else {
        setIsScrolled(false); // Reset styles
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLinkClass = (link) => {
    return activeLink === link
      ? "text-gold font-bold border-b-2 border-gold"
      : "text-offwhite hover:text-gold";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-chocolate-900 bg-opacity-90 py-2 shadow-lg"
          : "bg-gradient-to-r from-chocolate-800 via-chocolate-900 to-chocolate-800 py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center ">
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
        <nav className="hidden md:flex space-x-10 font-cinzel text-lg">
          <Link href="/" className={getLinkClass("/")}>
            Home
          </Link>
          <Link href="/#about-us" className={getLinkClass("/#about-us")}>
            About Us
          </Link>
          <Link href="/shop" className={getLinkClass("/shop")}>
            shop
          </Link>
          <Link href="/gallery" className={getLinkClass("/gallery")}>
            Gallery
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            Contact
          </Link>
          <Link href="/cart" className="relative">
          <FaShoppingCart size={24} className="text-white"/>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
              {totalItems}
            </span>
          )}
        </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Link href="/cart" className="relative md:hidden">
          <FaShoppingCart size={24} className="text-white"/>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
              {totalItems}
            </span>
          )}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none text-white"
        >
          {isOpen ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-chocolate-800 text-offwhite text-lg divide-y divide-chocolate-600">
          <Link
            href="/"
            className={`block px-4 py-3 ${getLinkClass("/")}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#about-us"
            className={`block px-4 py-3 ${getLinkClass("/#about-us")}`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/shop"
            className={`block px-4 py-3 ${getLinkClass("/shop")}`}
            onClick={() => setIsOpen(false)}
          >
            shop
          </Link>
          <Link
            href="/gallery"
            className={`block px-4 py-3 ${getLinkClass("/gallery")}`}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`block px-4 py-3 ${getLinkClass("/contact")}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

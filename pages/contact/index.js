"use client";

import { useState } from "react";
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";
const Contact = () => {







  return (
    <>
      <section

        className="bg-no-repeat bg-cover bg-bottom py-20"
        style={{ backgroundImage: "url('/assets/choco-01.jpg')" }}
      >

        <div className="  p-20 bg-black bg-opacity-35 rounded mx-8">
          <h1 className="text-white text-4xl font-bold mb-3 uppercase">Contact Me</h1>
          <p className="text-sm text-white w-full max-w-[750px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto omnis quod, delectus non aut nesciunt.
          </p>
          <ContactForm />
          {/* Contact Info */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 p-4 rounded-lg">
            <div className="flex items-center justify-center space-x-3 bg-black bg-opacity-40 px-8 py-10 rounded-xl">
              <FaEnvelope className="text-xl text-white" />
              <span className="text-xl text-white font-cinzel ">info@example.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-black bg-opacity-40 px-8 py-10 rounded-xl">
              <FaPhone className="text-xl text-white" />
              <span className="text-xl text-white font-cinzel">+123 456 7890</span>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-black bg-opacity-40 px-8 py-10 rounded-xl">
              <FaMapMarkerAlt className="text-xl text-white" />
              <span className="text-xl text-white font-cinzel">Sale Morocco</span>
            </div>
          </section>
          <section className="flex justify-center mt-8 space-x-4">
        <a href="#" className="text-blue-500 hover:text-blue-600">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-500">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-blue-700 hover:text-blue-800">
          <FaLinkedin size={24} />
        </a>
      </section>

        </div>


      </section>
    </>
  );
};

export default Contact;

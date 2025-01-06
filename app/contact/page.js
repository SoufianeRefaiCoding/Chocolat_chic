"use client";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
const Contact = () => {
 



    
  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "(+212) 691-425501",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "example@example.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Address",
      description: "Morocco, Rabat Sale",
    },
  ];

  return (
    <>
    <Header/>
    <section
    
      className="bg-no-repeat bg-cover bg-bottom py-20"
      style={{ backgroundImage: "url('/assets/choco-01.jpg')" }}
    >
     
      <div className="container mx-auto p-20 bg-black bg-opacity-35 rounded">
        <h1 className="text-white text-6xl font-bold mb-3 uppercase">Contact Me</h1>
        <p className="text-sm text-white w-full max-w-[750px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto omnis quod, delectus non aut nesciunt.
        </p>
        <ContactForm/>
      </div>
    

    </section>
    <Footer/>
    </> 
  );
};

export default Contact;

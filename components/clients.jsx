"use client";

import React from "react";
import Image from "next/image";

const ClientsSection = () => {
  const clients = [
    { name: "Client 1", logo: "/assets/client1.png" },
    { name: "Client 2", logo: "/assets/client2.png" },
    { name: "Client 3", logo: "/assets/client3.png" },
    { name: "Client 4", logo: "/assets/client4.png" },
    { name: "Client 5", logo: "/assets/client5.png" },
    { name: "Client 6", logo: "/assets/client16.png" },
    { name: "Client 7", logo: "/assets/client7.png" },
    { name: "Client 8", logo: "/assets/client8.png" },
    { name: "Client 9", logo: "/assets/client9.png" },
    { name: "Client 10", logo: "/assets/client10.png" },
    { name: "Client 11", logo: "/assets/client11.png" },
    { name: "Client 12", logo: "/assets/client12.png" },
  ];

  return (
    <div className="py-16 overflow-hidden">
      <h2 className="text-center text-gold font-cinzel text-4xl mb-8">Nos Clients</h2>
      <div className="text-white/60 text-center mb-8 text-body-color text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
        Nous sommes honorés de collaborer avec ces marques prestigieuses qui partagent notre passion pour la qualité et l'innovation.
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-4 lg:px-16 mx-auto place-items-center">
        {clients.map((client, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="relative w-24 h-24">
              <Image
                src={client.logo}
                alt={client.name}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;

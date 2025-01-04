"use client";
import React from "react";
import { motion } from "framer-motion";

export const PinPerspective = ({ title, href }) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-50 transition duration-500">
      <div className="absolute top-0 flex justify-center">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10"
        >
          <span className="text-white text-xs font-bold">{title}</span>
        </a>
      </div>
    </motion.div>
  );
};

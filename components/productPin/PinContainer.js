"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { PinPerspective } from "./PinPerspective";

export const PinContainer = ({ children, title, href, className, containerClassName }) => {
  const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn("relative group/pin z-50 cursor-pointer", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 top-1/2 flex justify-start items-start p-4 rounded-2xl shadow-lg bg-white/10 backdrop-blur-sm border border-white/10 transition duration-700"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      {href && <PinPerspective title={title} href={href} />}
    </div>
  );
};

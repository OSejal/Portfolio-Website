"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <motion.div 
      className="w-full h-full relative flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: "easeIn" } }}
    >
      {/* Rotating Dashed Circle Around Image */}
      <motion.div 
        className="absolute w-[360px] xl:w-[440px] h-[360px] xl:h-[440px] pointer-events-none select-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full" viewBox="0 0 506 506">
          <circle
            cx="253"
            cy="253"
            r="200"
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="20,15"
          />
        </svg>
      </motion.div>

      {/* Circular Image Wrapper */}
      <motion.div 
        className="w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] flex items-center 
        justify-center rounded-full overflow-hidden bg-white"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Image inside Circle */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image 
            src="/photo2.png"  
            priority 
            quality={100}
            fill 
            alt="Profile Image"
            className="object-cover rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Photo;
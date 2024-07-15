"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <motion.div 
        className="w-full h-full relative"
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay: 1.5, duration: 0.4, ease: "easeIn" },
          }}
        >
            {/* Image*/}
            <motion.div className="w-[298px] h-[298px] xl:w-[398px]
                xl:h-[398px] mix-blend-lighten absolute">
                <Image 
                src="/photo2.png"  
                priority 
                quality={100}
                fill 
                alt=""
                className="object-contain"
                />
            </motion.div>

            {/* circle*/}
            <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
            >
                <motion.circle 
                  cx="420" 
                  cy="255" 
                  r="380" 
                  stroke="black" 
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{strokeDasharray: "24 10 0 0"}}
                  animate={{
                    strokeDasharray: ["15 120 25 25" , "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],

                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  />
            </motion.svg>
            
    </motion.div>
  )
}

export default Photo;

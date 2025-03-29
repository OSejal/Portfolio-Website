"use client";

import { motion } from "framer-motion";
import splitScreen from "./splitScreen";
import { useInView } from "react-intersection-observer";

interface TextRevealProps {
  text: string;
}

export default function TextReveal({ text }: TextRevealProps) {
  const headingChars = splitScreen(text); // Splitting text into characters
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  return (
    <motion.h1
      ref={ref}
      className="text-4xl font-bold text-gray-800 "
    >
      {headingChars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
            ease: "easeInOut",
            delay: index * 0.05, // Stagger effect
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

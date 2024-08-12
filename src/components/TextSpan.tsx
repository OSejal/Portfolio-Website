"use client";

import { motion, useAnimationControls } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface TextSpanProps {
  children: ReactNode;
}

const TextSpan: React.FC<TextSpanProps> = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      scale: [1, 1.4, 0.75, 1.25, 0.9, 1],
      transition: {
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        duration: 0.8,
        ease: "easeInOut",
      },
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "../components/magicui/particles";

export default function ParticlesBackground({children}: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative w-full min-h-screen bg-background">
      {/* Particles Effect */}
      <Particles className="absolute inset-0 z-0" quantity={100} ease={80} color={color} refresh />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

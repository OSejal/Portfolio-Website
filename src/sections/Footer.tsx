"use client";

import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
    return (
      <div className="relative w-full p-4 text-white">
        {/* Scroll to Top Button */}
        <Link
          href="#home"
          className="absolute bottom-5 right-5 hover:scale-110 transition-transform duration-300"
        >
          <FaArrowUp className="bg-neutral-800 rounded-full animate-bounce w-8 h-12 p-2 text-white" />
        </Link>
      </div>
    );
}

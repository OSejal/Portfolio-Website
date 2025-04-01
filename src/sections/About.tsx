"use client";

import Education from "@/components/Education";
import Experience from "@/components/Experience";
import TextReveal from "@/components/textReveal";

export default function About() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center px-4 w-full">
      <div className="pb-2 calistoga">
        <TextReveal text="About Me" />
      </div>

      {/* Responsive Wrapper */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1200px] w-full">
        
        {/* Left Card - Education */}
        <div className="relative w-full md:w-[48%] lg:w-[550px]">
          <div className="relative z-10 min-h-[50vh] w-full 
            overflow-hidden rounded-xl border-2 border-black bg-slate-300 p-6">
            <Education />
          </div>

          {/* Shadow Border - Hidden on small screens */}
          <div className="absolute top-[-8px] right-[-8px] w-full h-full 
          bg-slate-700 rounded-xl -z-10 hidden md:block" />
        </div>

        {/* Right Card - Experience */}
        <div className="relative w-full md:w-[48%] lg:w-[550px]">
          <div className="relative z-10 min-h-[50vh] w-full 
            overflow-hidden rounded-xl border-2 border-black bg-slate-300 p-6">
            <Experience />
          </div>

          {/* Shadow Border - Hidden on small screens */}
          <div className="absolute top-[-8px] right-[-8px] w-full h-full 
          bg-slate-700 rounded-xl -z-10 hidden md:block" />
        </div>
      </div>
    </div>
  );
}

"use client";

import Education from "@/components/Education";
import Experience from "@/components/Experience";
import TextReveal from "@/components/textReveal";

export default function About() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
        <div className="pb-2">
          <TextReveal text="ABOUT ME" />
        </div>

        <div className="flex flex-row justify-between items-center gap-10 max-w-[1200px] w-full  mr-5">
        
        {/* Left Card */}
        <div className="relative">
          {/* Education Card */}
          <div className="relative z-10 min-h-[50vh] lg:w-[550px] w-full 
            overflow-hidden rounded-xl border-2 border-black bg-slate-300 p-6">
              <Education />
          </div>

          {/* Shadow Border */}
          <div className="absolute top-[-8px] right-[-8px] w-full h-full 
          bg-slate-700 rounded-xl -z-10" />
        </div>

        {/* Right Card */}
        <div className="relative">
          {/* Experience Card */}
          <div className="relative z-10 min-h-[50vh] lg:w-[550px] w-full 
            overflow-hidden rounded-xl border-2 border-black bg-slate-300 p-6">
              <Experience />
          </div>

          {/* Shadow Border*/}
          <div className="absolute top-[-8px] right-[-8px] w-full h-full 
           bg-slate-700 rounded-xl -z-10" />
        </div>
        
      </div>
    </div>
  );
}

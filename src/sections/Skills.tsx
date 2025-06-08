"use client";

import { IconCloudDemo } from "@/components/IconCloud";
import TextReveal from "@/components/textReveal";

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-10 pt-20 overflow-hidden w-full">
      <div className="pb-2 calistoga">
        <TextReveal text="Skills" />
      </div>

      {/* Shadow Card Border */}
      <div className="relative w-full max-w-[1100px]">
        {/* Main Card */}
        <div className="relative z-0 min-h-[15vh] w-full overflow-hidden rounded-xl border-2 border-black bg-slate-300 p-3">
          <h1 className="mt-5 ml-8 font-bold text-2xl font-serif">Technologies at a glance</h1>

          {/* Flex Wrapper for Skills & Icon Cloud (Responsive) */}
          <div className="flex flex-col lg:flex-row items-center gap-10
            transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
            
            {/* Skills List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center ml-8">
              {[
                "JavaScript",
                "Next.js",
                "MongoDB",
                "PostgreSQL",
                "TypeScript",
                "Prisma",
                "TailwindCSS",
                "React",
                "Node.js",
                "Express.js",
                "GraphQL",
                "Docker",
                "Firebase",
                "Figma",
                "Java"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Icon Cloud - Positioned Below Skills in Mobile */}
            <div className="mr-10">
              <IconCloudDemo />
            </div>

          </div>
        </div>

        {/* Shadow Border */}
        <div className="absolute top-[-8px] right-[-8px] w-full h-full bg-slate-700 rounded-xl -z-10 hidden md:block
        transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
      </div>
    </div>
  );
}
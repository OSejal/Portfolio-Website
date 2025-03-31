"use client";

import { IconCloudDemo } from "@/components/IconCloud";
import TextReveal from "@/components/textReveal";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-10 pt-20">
      <div className="pb-2">
        <TextReveal text="SKILLS" />
      </div>

      {/* Shadow Card Border */}
      <div className="relative">
        {/* Main Card */}
        <div
          className="relative z-0 min-h-[30vh] lg:w-[1100px] w-full
            overflow-hidden rounded-xl border-2 border-black bg-slate-300 p-6"
        >
          {/* Flex Wrapper for Skills & Icon Cloud */}
          <div className="flex flex-row items-center gap-10 ml-10">
            {/* Skills List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Skill Items */}
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
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black text-center"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Icon Cloud */}
            <div className="ml-24">
              <IconCloudDemo />
            </div>
          </div>
        </div>

        {/* Shadow Border */}
        <div className="absolute top-[-8px] right-[-8px] w-full h-full bg-slate-700 rounded-xl -z-10" />
      </div>
    </div>
  );
}

"use client";

import { IconCloudDemo } from "@/components/IconCloud";
import TextReveal from "@/components/textReveal";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import {
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaGithub,
    FaJava,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
    SiPrisma,
    SiC,
    SiMongodb,
    SiTypescript,
    SiPostgresql,
} from "react-icons/si";

const skills = {
  title: "Explore My Tech Stack",
    techStack: [
      { icon: FaReact, name: "ReactJs" },
      { icon: FaGithub, name: "Github" },
      { icon: FaJava, name: "Java" },
      { icon: FaJs, name: "JavaScript" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiPrisma, name: "Prisma" },
      { icon: SiC, name: "C" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiPostgresql, name: "PostgreSQL" },
    ],
};

export default function About() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="pb-2">
        <TextReveal text="SKILLS" />
      </div>

      {/* Shadow Card Border */}
        <div className="relative">
         {/* Main Card */}
          <div className="relative z-0 min-h-[50vh] lg:w-[1100px] w-full 
          overflow-hidden rounded-xl border-2 border-black bg-slate-300">

          {/* Flex Wrapper for Skills & Icon Cloud */}
            <div className="flex flex-row items-center gap-10">
             {/* Skills Icon Grid */}
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 space-between gap-6">
                {skills.techStack.map((skill, index) => (
                  <li key={index} className="flex flex-col items-center gap-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          {/* Render the icon dynamically */}
                            <div className="w-10 h-10 text-black">
                              <skill.icon className="w-full h-full" />
                            </div>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                      <span className="mt-2 text-sm">{skill.name}</span>
                  </li>
                    ))}
              </ul>

              {/* Icon Cloud Section */}
                <div>
                  <IconCloudDemo />
                </div>
            </div>
          </div>

          {/* Shadow Border */}
            <div className="absolute top-[8px] left-[8px] w-full h-full bg-slate-700 rounded-xl -z-10" />
            </div>
      </div>
    );
}

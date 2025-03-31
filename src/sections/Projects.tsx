"use client";

import React,  { useState} from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { TooltipContent, Tooltip, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import projects from "@/data/projects";
import SwiperArea from "@/components/swiperArea";
import TextReveal from "@/components/textReveal";

export default function Projects() {
  const [project, setProject] = useState(projects[0]);
   
    return (
      <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="mb-10 flex justify-center">
          <TextReveal text="PROJECTS" />
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
           xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-slate-800
              bg-gradient-to-tr from-white via-gray-600 to-black bg-clip-text text-transparent ">
                {project.num}
              </div>
              {/* project category*/}
              <h2 className="text-[42px] font-bold leading-none text-black
              group-hover:text-gray-500 transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-gray-900">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) =>{
                  return(
                    <li key={index} className="text-xl text-black">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-black/50"></div>
              {/* buttons */}
              <div className="p-3 flex items-center gap-4">

                {/* live project button */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                    <TooltipTrigger className="w-[50px] h-[50px] rounded-full p-2
                    bg-slate-300 flex items-center justify-center group hover:bg-slate-600">
                      <button className="flex items-center gap-2 text-black
                      hover:text-white transition-all duration-500 bg">
                        {/* <span>View Demo</span> */}
                        <BsArrowUpRight className="text-white text-2xl
                        "/>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={5}>
                      <span className="text-black">View Demo</span>
                    </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                    <TooltipTrigger className="w-[50px] h-[50px] rounded-full p-2
                    bg-slate-200 flex items-center justify-center group hover:bg-slate-600">
                      <button className="flex items-center gap-2 text-black
                      hover:text-white transition-all duration-500">
                        {/* <span>View Demo</span> */}
                        <BsGithub className="text-white text-2xl
                        "/>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent sideOffset={5}>
                      <span className="text-black">Github</span>
                    </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] overflow-hidden rounded-lg">
            <SwiperArea />
          </div>

        </div>
      </div>
      </div>
    );
  };

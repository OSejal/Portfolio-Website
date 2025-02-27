"use client";

import { motion } from "framer-motion";
import React,  {useState} from "react";
import WorkSliderBtn from "@/components/WorkSliderBtn";

import {Swiper, SwiperSlide} from "swiper/react";
import { Swiper as SwiperType } from 'swiper';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { TooltipContent, Tooltip, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

const projects = [
  {
    num: "01",
    category: "MERN",
    title: "Rock Scissor Game",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laborum laboriosam, nesciunt suscipit rerum asperiores", 
    stack: [{name: "HTML"}, {name: "CSS"}, {name:"JS"},],
      image: '/rps.png',
      demo: "https://rock-scissor-game.vercel.app/",
      github: "https://github.com/Sejal1411/Rock-Scissor-Game",
  },
  {
    num: "02",
    category: "MERN ",
    title: "Courses.io",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laborum laboriosam, nesciunt suscipit rerum asperiores", 
    stack: [{name: "Next.js"}, {name: "NextAuth"}, {name:"Mongo DB"}, 
      {name: "Tailwind.css"}],
      image: '',
      demo: "",
      github: "",
  },
  {
    num: "03",
    category: "MERN ",
    title: "Beautify",
    description: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laborum laboriosam, nesciunt suscipit rerum asperiores", 
    stack: [{name: "React.js"}, {name: "Node.js"}, {name:"Mongo DB"}, 
      {name: "Socket.io"}],
      image: '/public/pic3',
      demo: "",
      github: "",
  },
];

export default function Project() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
    return (
      <motion.section 
       initial={{opacity: 0}} 
       animate={{opacity: 1, transition: {delay: 2.4, duration:0.4, ease:"easeIn"},
       }} 
       className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
       >
       <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
           <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
           xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-slate-800
              text-outline">
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
                    bg-slate-200 flex items-center justify-center group hover:bg-slate-600">
                      <button className="flex items-center gap-2 text-black
                      hover:text-white transition-all duration-500">
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
           <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              >
              {projects.map((project, index) =>{
                return  <SwiperSlide key={index} className="w-full">
                  <div className="h-[130px] relative group flex justify-center
                  items-center bg-slate-200">
                  {/* overlay */}
                  <div className="absolute top-0 bottom-0 w-full h-full 
                  bg-black/10 z-10"></div>
                  {/* image */}
                  <div className="relative w-full h-full">
                    <Image src={project.image} fill alt={""} className="object-cover"/>
                  </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtn containerStyles="flex gap-2 absolute right-0 bottom-20px] 
               xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
               btnStyles="bg-slate-300 hover:bg-white-hover text-primary text-[22px]
               w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
           </div>
          </div>
        </div>
      </motion.section>
    );
  };
  
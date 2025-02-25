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
      image: '/public/pic2',
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
  }
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
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num*/}
                <div className="text-8xl leading-none font-extrabold text-slate-300
                 text-outline">
                  {project.num}
                </div>
                {/* project category*/}
                <h2 className="text-[42px] font-bold leading-none text-slate-700">
                  {project.category} project
                </h2>
                {/* project description */}
                <p className="text-black">{project.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index)=> {
                    return (
                    <li key={index} className="text-xl text-black">
                      {item.name}
                      {index != project.stack.length - 1 && ","}
                    </li>
                  );
                })}
                </ul>
                {/* border */}
                <div className="border border-slate-300"></div>
                {/* buttons */}
                <div className="flex items-center gap-4 ">
                {/* live project button */}
                  <Link href={project.demo}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[55px] h-[55px] rounded-full
                      bg-black flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-2xl
                        group-hover:text-white"/>

                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project Demo</p>
                      </TooltipContent>
                    </Tooltip>

                  </TooltipProvider>
                  </Link>

                {/* github project button */}
                  <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[55px] h-[55px] rounded-full
                      bg-black flex justify-center items-center group">
                        <BsGithub className="text-white text-2xl
                        group-hover:text-white"/>

                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
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
                  {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index}>
                    <Image 
                    src={project.image} 
                    alt={project.title} 
                    layout="responsive" 
                    width={500} 
                    height={300}/>
                    </SwiperSlide>
                  );
                  })}
                  <WorkSliderBtn 
                   containerStyles="flex gap-2 absolute right-0 bottom-
                   [calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                   xl:w-max xl:justify-none"
                   btnStyles="bg-black hover:bg-black-hover text-white text-[22px] w-[44px] h-[44px] flex 
                   justify-center items-center transition-all"
                   iconStyles="icon-class"
                   
                  />
                </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  
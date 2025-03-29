"use client";

import React,  {useRef, useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { TooltipContent, Tooltip, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Navigation, Pagination } from 'swiper/modules';

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
      image: '',
      demo: "",
      github: "",
  },
];

export default function Projects() {
  const [project, setProject] = useState(projects[0]);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
    return (
      <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
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

          <div className="w-full xl:w-[50%] overflow-hidden">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full h-[300px] "
              onSwiper={setSwiperInstance}
              onSlideChange={handleSlideChange}
              style={{ 
                "--swiper-navigation-color": "#000000",
                "--swiper-pagination-color": "#000000" 
              } as React.CSSProperties}
             >
             {projects.map((project, index) => (
              <SwiperSlide key={index}>
             <div className="w-full h-[300px] bg-slate-200 flex justify-center items-center relative">
              {project.image ? (
              <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
             />
            ) : (
            <div className="flex flex-col items-center justify-center text-gray-600">
              <span className="text-xl font-medium">{project.title}</span>
              <span className="text-sm">No image available</span>
            </div>
            )}
           </div>
            </SwiperSlide>
           ))}
          </Swiper>
          </div>

        </div>
      </div>
      </div>
    );
  };

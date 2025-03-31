"use client";

import React,  { useState} from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { TooltipContent, Tooltip, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import TextReveal from "@/components/textReveal";
import {Swiper, SwiperSlide} from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projects from "@/data/projects";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

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
    <div className="min-h-[80vh] flex flex-col justify-center xl:px-0 pt-30 gap-10">
      <div className="container mx-auto">
        <div className="mb-10 flex justify-center">
          <TextReveal text="PROJECTS" />
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Section - Project Details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              <div className="text-8xl font-extrabold text-slate-800 bg-gradient-to-tr from-white via-gray-600 to-black bg-clip-text text-transparent">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold text-black transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-gray-900">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-black">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-black/50"></div>

              {/* Buttons */}
              <div className="p-3 flex items-center gap-4">

                {/* Live Project Button */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full p-2 bg-slate-300 flex items-center justify-center group hover:bg-slate-600">
                        <BsArrowUpRight className="text-white text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent sideOffset={5}>
                        <span className="text-black">View Demo</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub Project Button */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full p-2 bg-slate-200 flex items-center justify-center group hover:bg-slate-600">
                        <BsGithub className="text-white text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent sideOffset={5}>
                        <span className="text-black">GitHub</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Swiper Slider */}
          <div className="w-full xl:w-[50%] overflow-hidden rounded-lg">
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
              {projects.map((proj, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[300px] bg-slate-200 flex justify-center items-center relative">
                    {proj.image ? (
                      <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-600">
                        <span className="text-xl font-medium">{proj.title}</span>
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
}

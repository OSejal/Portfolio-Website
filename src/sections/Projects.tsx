"use client";

import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import TextReveal from "@/components/textReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projects from "@/data/projects";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

export default function Projects() {
  const [project, setProject] = useState(projects[0]);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center xl:px-0 gap-10 pt-30">
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-10 flex justify-center">
          <TextReveal text="PROJECTS" />
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Section - Project Details */}
          <div className="w-full xl:w-[50%] flex flex-col gap-6 order-2 xl:order-none">
            <div className="text-8xl font-extrabold text-slate-800 bg-gradient-to-tr from-white via-gray-600 to-black bg-clip-text text-transparent">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold text-black capitalize">
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
              {[
                { href: project.demo, icon: <BsArrowUpRight />, label: "View Demo" },
                { href: project.github, icon: <BsGithub />, label: "GitHub" },
              ].map(({ href, icon, label }, index) => (
                <Link key={index} href={href}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full p-2 bg-slate-300 flex items-center justify-center group hover:bg-slate-600">
                        {icon}
                      </TooltipTrigger>
                      <TooltipContent sideOffset={5}>
                        <span className="text-black">{label}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Swiper Slider */}
          <div className="w-full xl:w-[50%] overflow-hidden rounded-lg">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full h-[300px]"
              onSlideChange={(swiper) => setProject(projects[swiper.activeIndex])}
              style={{
                "--swiper-navigation-color": "#000000",
                "--swiper-pagination-color": "#000000",
              } as React.CSSProperties}
            >
              {projects.map(({ image, title }, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[300px] bg-slate-200 flex justify-center items-center relative">
                    {image ? (
                      <Image src={image} alt={title} fill className="object-cover" />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-600">
                        <span className="text-xl font-medium">{title}</span>
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

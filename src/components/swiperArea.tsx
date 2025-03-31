"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projects from "@/data/projects";
import { useState } from "react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

export default function SwiperArea() {
  const [project, setProject] = useState(projects[0]);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const handleSlideChange = (swiper: SwiperType) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
      };

      return (
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
      )
}
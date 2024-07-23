"use client";

import { Description } from '@radix-ui/react-dialog';
import { title } from 'process';
import {FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs} 
  from 'react-icons/fa'

import {
  SiTailwindcss, SiNextdotjs
} from "react-icons/si";

const about = {
  title: 'About me',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut doloremque soluta, assumenda non nesciunt voluptate ipsum.',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sejal Sinha"
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 546234 56"
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "sejalsinha322@gmail.com"
    },
    {
      fieldName: "Web Developer",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi"
    },
  ]
};

//experience data
const experience = {
  icon: '',
  title: "My experience",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae illo voluptas quis voluptatum! ",
  items: [
    {
      company: "Yubi Health",
      position: "Full Stack developer",
      duration: " Sept 2022- Feb 2023"
    },
    {
      company: "Code Yourself",
      position: "MERN Stack developer",
      duration: "June 2024-present"
    },
    // {
    //   company: "Code Yourself",
    //   position: "MERN Stack developer",
    //   duration: "2024-present"
    // },
    // {
    //   company: "Code Yourself",
    //   position: "MERN Stack developer",
    //   duration: "2024-present"
    // }
  ]
};
//education data
const education = {
  icon: '',
  title: "My education",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae illo voluptas quis voluptatum! ",
  items: [
    {
      institution: " Heritage Institute of Technology",
      degree: "Btech",
      duration: "2021-2025"
    },
    {
      institution: "DAV Kapildev Public School",
      degree: "Senior Secondary",
      duration: "2018-2021"
    },
    {
      institution: "Bridgeford School",
      degree: "Primary & Secondary",
      duration: "2009-2018"
    }
  ]
}

//skills
const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae illo voluptas quis voluptatum!",
  skillList:[ 
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
  ]
};

import{ Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import{ Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';


export default function About() {
    return (
      <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0' 
        >

          <div className='container mx-auto'>
            <Tabs
             defaultValue='experience'
             className='flex flex-col xl:flex-row gap-[60px]'
            >
              <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 '>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about-me">About Me</TabsTrigger>

              </TabsList>

              <div className='min-h-[70vh] w-full'>

                <TabsContent value="experience" className='w-full'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-slate-700 mx-auto xl:mx-0">
                      {experience.description}
                    </p>
                    <ScrollArea className="h-[40=80px]">
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                        {experience.items.map((item, index)=> {
                          return <li 
                          key={index} 
                          className="bg-[#ececf2] h-[184px] py-6 px-10 
                          rounded-xl flex flex-col justify-center items-center 
                          lg:items-start gap-1"
                          >
                            <span className='text-black font-bold '>{item.duration}</span>
                            <h3 className="text-2xl max-w-[260px] min-h-[60px]
                            text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-full
                              bg-black'></span>
                              <p>
                                {item.company}
                              </p>
                            </div>

                          </li> 
                        })}
                      </ul>
                    </ScrollArea>

                  </div>
                </TabsContent>

                <TabsContent value="education" className='w-full'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-slate-700 mx-auto xl:mx-0">
                      {education.description}
                    </p>
                    <ScrollArea className="h-[40=80px]">
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                        {education.items.map((item, index)=> {
                          return <li 
                          key={index} 
                          className="bg-[#ececf2] h-[184px] py-6 px-10 
                          rounded-xl flex flex-col justify-center items-center 
                          lg:items-start gap-1"
                          >
                            <span className='text-black font-bold '>{item.duration}</span>
                            <h3 className="text-2xl max-w-[260px] min-h-[60px]
                            text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-full
                              bg-black'></span>
                              <p>
                                {item.institution}
                              </p>
                            </div>

                          </li> 
                        })}
                      </ul>
                    </ScrollArea>

                  </div>
                </TabsContent>

                <TabsContent value="skills" className='w-full h-full'>
                  <div className="flex flex-col gap-[30px]">
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                      <h3 className='text-4xl font-bold'>{skills.title}</h3>
                      <p className='max-w-[600px] text-white mx-auto xl:mx-0'>{skills.description}</p>
                    </div>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2
                    xl:gap-[30px]'>
                      {skills.skillList.map((skill, index)=> {
                        return <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-slate-100
                              rounded-full flex justify-center items-center group'>
                                <div className='text-6xl group-hover:text-slate-400
                                transition-all duration-300'>{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      })}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent 
                  value="about" 
                  className='w-full text-center xl:text-left'
                >
                  <div className='flex flex-col gap-[30px]'>
                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                    <p className='max-w-[600px] text-black/60 mx-auto xl:mx-0'>
                      {about.description}
                    </p>
                    <ul>
                      {about.info.map((item,index)=> {
                        return <li key={index}>
                          <span>{item.fieldName}</span>
                          <span>{item.fieldValue}</span>
                        </li>
                      })}
                    </ul>
                  </div>
                </TabsContent>

              </div>
            </Tabs>
          </div>
      </motion.div>
    );
  }
  

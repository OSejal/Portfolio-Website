"use client";

const about = {
  title: 'Beyond the Code',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ut doloremque soluta, assumenda non nesciunt voluptate ipsum.',
  info: [
    {
      name: "Painting",
      emoji: "🎨"
    },
    {
      name: "UI UX",
      emoji: "📱"
    },
    {
      name: "Music",
      emoji: "🎧"
    },
    {
      name: "Bibliophile",
      emoji: "📖"
    },
    {
      name: "Travel",
      emoji: "🧳"
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

import{ Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {ScrollArea} from "@/components/ui/scroll-area";
import Typing from "react-typing-effect";
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
              <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 
              '>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About Me</TabsTrigger>
              </TabsList>
              
              <div className='min-h-[70vh] w-full'>

                <TabsContent value="experience" className='w-full'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left overflow-hidden'>
                    <h3 className="text-4xl font-bold">
                      <Typing text={[experience.title]} speed={100} eraseSpeed={30} eraseDelay={1000}/>
                    </h3>
                    <p className="max-w-[600px] text-slate-700 mx-auto xl:mx-0">
                      {experience.description}
                    </p>
                    <ScrollArea className="h-[40=80px]">
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] pt-10 pr-1 pl-1'>
                        {experience.items.map((item, index)=> {
                          return <li 
                          key={index} 
                          className="bg-[#ececf2] h-[184px] py-6 px-10 
                          rounded-xl flex flex-col justify-center items-center 
                          lg:items-start gap-1 transition-all duration-300 ease-out 
                          hover:-translate-y-3 hover:shadow-xl hover:z-10 overflow-hidden 
                          cursor-pointer bg-gradient-to-r from-gray-400 to bg-gray"
                         
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
                    <h3 className="text-4xl font-bold">
                      <Typing text={[education.title]} speed={100} eraseSpeed={30} eraseDelay={1000}/>
                    </h3>
                    <p className="max-w-[600px] text-slate-700 mx-auto xl:mx-0">
                      {education.description}
                    </p>
                    <ScrollArea className="h-[40=80px]">
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] pt-5 pr-1 pl-1'>
                        {education.items.map((item, index)=> {
                          return <li 
                          key={index} 
                          className="bg-[#ececf2] h-[184px] py-6 px-10 
                          rounded-xl flex flex-col justify-center items-center 
                          lg:items-start gap-1 transition-all duration-300 ease-out 
                          hover:-translate-y-3 hover:shadow-xl hover:z-10 overflow-hidden 
                          cursor-pointer bg-gradient-to-r from-gray-400 to bg-gray"
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

                <TabsContent value="about" className='w-full'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className="text-4xl font-bold">
                      <Typing text={[about.title]} speed={100} eraseSpeed={30} eraseDelay={1000}/>
                    </h3>
                    <p className="max-w-[600px] text-slate-700 mx-auto xl:mx-0">
                      {about.description}
                    </p>
                    <ScrollArea className="h-[20=40px]">
                      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] pt-5 pr-1 pl-1'>
                        {about.info.map((item, index)=> {
                          return (
                          <div
                           key={index}
                           className="bg-[#ececf2] h-[10px] py-6 px-10 
                           rounded-xl inline-flex items-center  
                           lg:items-start gap-1 overflow-hidden 
                           cursor-pointer bg-gradient-to-r from-gray-400 to bg-gray">
                            <div className='flex items-center gap-2'>
                              <span className='w-[6px] h-[6px] rounded-full
                              bg-black'>{item.name}</span>
                              <span>{item.emoji}</span>
                            </div>
                            </div>
                          )
                        })}
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>

              </div>
            </Tabs>
        </div>
      </motion.div>
    );
  }
  

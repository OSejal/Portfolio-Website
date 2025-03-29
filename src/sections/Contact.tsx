"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";
import Typing from "react-typing-effect";
import TextReveal from "@/components/textReveal";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 8862889547",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sejal.1109.sinha@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Kolkata, West Bengal",
  },
];

export default function Contact() {
  return (
    <div className="py-6">
      <div className="container  flex flex-col gap-5 justify-items-center">
            <div className="text-center mb-12 px-4 sm:px-10 lg:px-8">
                <TextReveal text="HIRE ME"/>
            </div>
        <div className="flex flex-col xl:flex-row gap-[30px]">
          
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-slate-200 rounded-xl">
              <h2 className="text-3xl h2 text-gray-400 text-center">Let&apos;s <span className="text-black">                      
                <Typing text="connect" speed={100} eraseSpeed={30} eraseDelay={1000}/>
              </span></h2>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="tel" placeholder="Phone number" />
              </div>


              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />

              {/* btn */}
              <Button size="sm" variant="default" className="rounded-full max-w-[170px] px-8 
                transition-all duration-300 flex items-center justify-center
                overflow-hidden hover:text-white group bg-gradient-to-r from-gray-900 to bg-white">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
                transition-all duration-500 ">
                  Let's talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                duration-300 absolute text-[22px]"/>
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[42px] h-[42px] xl:w-[72px] xl:h-[72px] bg-slate-200 text-black rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-600">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

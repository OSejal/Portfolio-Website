"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BsArrowRight } from "react-icons/bs";
import TextReveal from "@/components/textReveal";
import Info from "@/components/info";
import Image from "next/image";



export default function Contact() {
  return (
    <div className="container flex flex-col gap-5 justify-items-center">
      <div className="text-center mb-5 px-4 sm:px-10 lg:px-8 calistoga">
        <TextReveal text="Hire Me ?" />
      </div>

        {/* Main Wrapper for Form & Info */}
      <div className="flex flex-col xl:flex-row justify-between items-start gap-40">
          
        {/* Form Section */}
        <div className="relative w-full xl:w-1/2">
          <form className="relative flex flex-col gap-6 p-10 bg-slate-300 rounded-xl border-2 border-black">
            <div className="flex items-center justify-center gap-5"> 
             <Image src="/link.png" alt="connect logo"  width={30} height={30} />
             <h2 className="text-3xl h2 text-gray-400 text-center">
             Let&apos;s <span className="text-black">connect</span>
             </h2>
            </div>
            

           {/* Input Fields */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="Firstname" />
            <Input type="text" placeholder="Lastname" />
            <Input type="email" placeholder="Email address" />
            <Input type="tel" placeholder="Phone number" />
           </div>

           {/* Textarea */}
           <Textarea className="h-[200px]" placeholder="Type your message here." />

           {/* Centered Button */}
           <div className="flex justify-center">
             <Button
              size="sm"
              variant="default"
              className="rounded-full max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center
              overflow-hidden hover:bg-gray-700 hover:text-white group bg-gradient-to-r from-gray-900 to bg-white"
             >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 text-black transition-all duration-500">
                Submit
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
             </Button>
           </div>
          </form>

         {/* Shadow Border - Placed Behind the Form */}
         <div className="absolute top-2 left-2 w-full h-full bg-slate-700 
         rounded-xl -z-10 hidden md:block" />

        </div>
         {/* Info Section */}
          <Info />
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa';
import { title } from "process";
import { Description } from "@radix-ui/react-dialog";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+41 5674 524",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sejal.1109.sinha@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Kolkata, WestBengal",
  },
];

import {motion} from "framer-motion";

export default function Contact() {
    return (
     <motion.section 
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 2.4, duration:0.4, ease: "easeIn"},
        }}
        className="py-6"
        >
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
              {/* form */}
              <div className="xl:h-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-slate-200 rounded-xl">
                  <h3 className="text-4xl text-black"> Let's Work Together</h3>
                  <p className="text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi obcaecati tempora, minus maiores quidem ipsum, 
                    quod debitis odio doloremque quasi. </p>
                    {/*Input*/}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <Input type="firstname" placeholder="Firstname"/>
                      <Input type="lastname" placeholder="Lastname"/>
                      <Input type="email" placeholder="Email address"/>
                      <Input type="phone" placeholder="Phone number"/>

                    </div>
                    {/* selelct*/}
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service"></SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select a service</SelectLabel>
                          <SelectItem value="est">Web Development</SelectItem>
                          <SelectItem value="cst"> UI/UX design</SelectItem>
                          <SelectItem value="mst">Frontend Development</SelectItem>

                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {/*textarea*/}
                    <Textarea className="h-[200px]"
                    placeholder="Type your message hre."/>
                </form>
              </div>
            
              <div className="flex-1 flex items-center xl:justify-end order-1 
              xl:order-none mb-8 xl:mb-0">
              </div>
            </div>
          </div>

     </motion.section>
    );
  }
  
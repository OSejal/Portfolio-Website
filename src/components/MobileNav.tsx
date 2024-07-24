"use client";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";


const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'about',
        path: '/about'
    },
    {
        name: 'contact',
        path: '/contact'
    },
    {
        name: 'projects',
        path: '/projects'
    },
    
];

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-black"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
            <h1 className="text-4xl font-semibold text-white">
                Sejal <span className="text-white">.</span>
            </h1>
            </Link>

        </div> 
        {/* nav */}
        <nav className="flex flex-col justify-center item-center gap-8 text-white">
          {links.map((link, index)=> {
            return <Link 
             href={link.path} 
             key={index} 
             className={`${
              link.path === pathname && 
              "text-white border-b-2 " } 
              text-xl capitalize 
              hover:text-slate-200 transition-all`}
            >
              {link.name}
            </Link>
          })}
        </nav>

      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

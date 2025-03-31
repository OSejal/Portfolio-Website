"use client"

import Image from "next/image"
import LiIcon from "@/components/LiIcon";

type DetailsProps = {
    position: string;
    company: string;
    time: string;
};

const Details: React.FC<DetailsProps> = ({ position, company, time }) => {
    return <li className="mt-5">
        <LiIcon />
        <div>
            <h3 className="capitalize font-medium text-slate-600">{position}&nbsp;<span className=" text-black">@{company}</span></h3>
            <span>
               {time}
            </span>
        </div>
    </li>
}


export default function Education() {
  return (
    <div className="flex flex-col items-center gap-3"> 
      {/* Image and Title */}
      <div className="flex flex-row items-center gap-3">
        <Image src="/education.png" alt="education logo"  width={30} height={30} />
        <h1 className="text-2xl font-normal text-center">Education</h1>
      </div>

      {/* Details Section */}
      <div className="w-full relative">
        <div className="absolute h-full w-[2px] bg-black top-2 left-4 origin-top"/>
        <ul className="w-full flex flex-col items-start justify-between ml-14">
          <Details position="MERN Developer" company="XYZ" time="4 months" />
          <Details position="MERN Developer" company="XYZ" time="4 months" />
          <Details position="MERN Developer" company="XYZ" time="4 months" />
        </ul>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
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
};

export default function Experience() {
  return (
    <div className="flex flex-col items-center gap-6 w-full px-4">
      {/* Title and Image Section */}
      <div className="flex flex-row items-center gap-3">
        <Image src="/expertise.png" alt="expertise logo" width={30} height={30} />
        <h1 className="text-2xl font-normal text-center">Experience</h1>
      </div>

      {/* Details Section (Timeline) */}
      <div className="w-full relative">
        <ul className="w-full flex flex-col items-start justify-between ml-10 md:ml-14">
          <Details position="SDE-FS" company="Secpen Labs" time="April-Present" />
          <Details position="MERN Developer" company="CodeYourself" time="1 month" />
          {/* <Details position="Software Engineer" company="DEF" time="1 year" /> */}
        </ul>
      </div>
    </div>
  );
}

import { FaArrowDown, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import TextSpan from "@/components/TextSpan";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Avatar from "@/components/Avatar";
import Link from "next/link";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Sejal1411" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sejal-sinha-8703b5303" },
  { icon: <FaTwitter />, path: "https://x.com/sejal1411" },
];

export default function Hero() {
  const sentence = "Sejal Sinha".split("");

  return (
    <div className="relative flex flex-col xl:flex-row items-center justify-between w-full mt-10 px-3">
      {/* Text */}
      <div className="text-center xl:text-left">
        <span className="text-lg font-medium md:text-2xl">Software Developer</span>
        <h1 className="h1 mt-5">
          Hello I&apos;m <br />
          <h1 className="text-gray-500 lg:text-6xl md:text-4xl">
            {sentence.map((letter, index) => (
              <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
            ))}
          </h1>
        </h1>
        

        {/* Buttons & Socials */}
        <div className="flex flex-col xl:flex-row items-center gap-6 md:gap-8 mt-10">
          <a
            href="/resume.pdf"
            download
            className="uppercase flex items-center gap-2 border-slate-700 hover:bg-slate-800 hover:text-white px-5 py-2 border rounded-lg text-sm md:text-lg font-semibold"
          >
            <span>Download Resume</span>
            <FiDownload />
          </a>
          <div className="mb-6 xl:mb-0">
            <Social
              containerStyles="flex gap-5 md:gap-6"
              iconStyles="w-10 h-10 md:w-9 md:h-9 border border-slate-700 rounded-full flex justify-center items-center text-black text-base hover:bg-slate-800 hover:text-white transition-all duration-500"
              socials={socials}
            />
          </div>
        </div>
      </div>

      {/* Avatar */}
      <div className="mt-6 xl:mt-0">
        <Avatar />
      </div>

      {/* Centered Arrow for Scrolling Down */}
      <Link
        href="#about"
        className="absolute lg:bottom-[-60px] md:left-[600px] md:bottom-2 sm:bottom-2  transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
      >
        <FaArrowDown className="bg-neutral-800 rounded-full animate-bounce w-8 h-8 p-2  text-white"  />
      </Link>
    </div>
  );
}



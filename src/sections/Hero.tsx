import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import TextSpan from "@/components/TextSpan";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Avatar from "@/components/Avatar";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Sejal1411" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/sejal-sinha-8703b5303" },
  { icon: <FaTwitter />, path: "https://x.com/sejal1411" },
];

export default function Hero()  {
    const sentence = "Sejal Sinha".split("");

    return (
    <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* Text */}
        <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <h1 className="text-gray-500">
                {sentence.map((letter, index) => (
                  <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
                ))}
              </h1>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/80">
              I specialize in MERN technologies and Frontend Development
            </p>
            {/* Buttons & Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/resume.pdf"
                download
                className="uppercase flex items-center gap-2 border-slate-700 hover:bg-slate-800 hover:text-white px-5 py-2 border rounded-lg text-lg font-semibold"
              >
                <span>Download Resume</span>
                <FiDownload />
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-slate-700 rounded-full flex justify-center items-center text-black text-base hover:bg-slate-800 hover:text-white hover:transition-all duration-500"
                  socials={socials}
                />
              </div>
            </div>
        </div>
          {/* Photo */}
          <div>
            <Avatar />
          </div>
        </div>
  )
}



import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Photo from "@/components/Photo";

const socials = [
  { icon: <FaGithub />, path: 'https://github.com' },
  { icon: <FaLinkedin />, path: 'https://linkedin.com' },
  { icon: <FaTwitter />, path: 'https://twitter.com' },
];
 
export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between
          xl:pt-8 xl:pb-24">
            {/*text */}
            <div className="text-center xl:text-left">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1">
                Hello I'm <br /><span className="text-gray-500">Sejal Sinha</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-black/80" >
                I specialise in MERN technologies and Frontend Development
              </p>

              {/* button and socials*/}

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button 
                 variant="outline" 
                 size="lg" 
                 className="uppercase flex items-center gap-2 border-slate-700 hover:bg-slate-800 hover:text-white"
                 >
                  <span>Download Resume</span>
                  <FiDownload />
                </Button>
                <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border
                border-slate-700 rounded-full flex justify-center items-center
                text-black text-base hover:bg-slate-800 hover:text-white
                hover:transition-all duration-500" socials={socials} />
                </div>
              </div>
            </div>
            
            {/* photo*/}

            <div>
              <Photo />
            </div>
          </div>
      </div>
    </section>
  );
};

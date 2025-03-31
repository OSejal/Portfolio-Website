// import { IconCloud } from "../icon-cloud";

import IconCloud from "./icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "git",
    "tailwindcss",
    "mysql",
    "github",
    "visualstudiocode",
    "figma",
    "mongodb",
    "c",
    "jira",
    "python",
    "docker",
    "html"
  ];

  
  export function IconCloudDemo() {
    const images = slugs.map(
      (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
    );
  
    return (
      <div className="relative flex items-center justify-center overflow-hidden max-w-md px-8 pb-4 min-w-48">
        <IconCloud iconSlugs={slugs} />
      </div>
    );
  }
  
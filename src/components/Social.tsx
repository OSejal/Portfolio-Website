import Link from "next/link";
import { FC } from 'react';




interface SocialProps {
    containerStyles: string;
    iconStyles: string;
    socials: Array<{
        path: string;
        icon: JSX.Element;
    }>;
}



const Social: FC<SocialProps> = ({ containerStyles, iconStyles, socials }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=> {
        return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        )
      })}
    </div>
  )
}

export default Social

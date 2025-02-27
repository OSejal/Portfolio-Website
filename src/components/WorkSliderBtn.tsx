"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { FC } from 'react';

interface WorkSliderBtnProps {
    containerStyles: string;
    btnStyles: string;
    iconStyles?: string; // Optional if you might not always use iconStyles
  }

  const WorkSliderBtn: FC<WorkSliderBtnProps> = ({ containerStyles, btnStyles, iconStyles }) => {
    const swiper = useSwiper();
    return (
      <div className={containerStyles}>
        <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
            <PiCaretLeftBold className={iconStyles} />
        </button>
        <button className={btnStyles} onClick={()=> swiper.slideNext()}>
            <PiCaretRightBold className={iconStyles} />
        </button>
      </div>
    );
  };
  
  export default WorkSliderBtn;


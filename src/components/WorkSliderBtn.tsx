"use client";

import { Swiper as SwiperType } from "swiper";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { FC } from 'react';

interface WorkSliderBtnProps {
    swiper: SwiperType | null;
    containerStyles: string;
    btnStyles: string;
    iconStyles?: string; // Optional if you might not always use iconStyles
  }

  const WorkSliderBtn: FC<WorkSliderBtnProps> = ({ swiper, containerStyles, btnStyles, iconStyles }) => {
    console.log("Swiper instance:", swiper);
    return (
      <div className={containerStyles}>
        <button className={btnStyles} onClick={() => swiper?.slidePrev()} disabled={!swiper}>
          <PiCaretLeftBold className={iconStyles} />
        </button>
        <button className={btnStyles} onClick={() => swiper?.slideNext()} disabled={!swiper}>
            <PiCaretRightBold className={iconStyles} />
        </button>
      </div>
    );
  };
  
  export default WorkSliderBtn;
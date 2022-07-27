import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { INTERNALS } from "next/dist/server/web/spec-extension/request";

import { favState } from "../atoms/dataAtoms";
import { useRecoilValue } from "recoil";

const Banner = ({ favouritesData }) => {
  const [current, setCurrent] = useState(0);
  const autoSlider = true;
  let slideInterval;
  let interval = 5000; // 5 seconds

  const [isActiveBtn, setIsActiveBtn] = useState(false);

  const nextSlide = () => {
    setCurrent(current === favouritesData.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? favouritesData.length - 1 : current - 1);
  };
  const autoNext = () => {
    slideInterval = setInterval(nextSlide, interval);
  };

  useEffect(() => {
    if (autoSlider) {
      autoNext();
      return () => {
        clearInterval(slideInterval);
      };
    }
  }, [current]);

  if (!Array.isArray(favouritesData) || favouritesData.length <= 0) {
    return null;
  }
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 bg-slate-400  ">
      <h1 className="text-green-500">{favouritesData.id}</h1>
      <div className="group">
        <ChevronLeftIcon
          className={`h-10 w-10 p-2 absolute top-1/3 rounded-full border-emerald-500 bg-violet-700 hover:bg-emerald-500/80 text-white hover:text-violet-700 left-[5%] z-20 cursor-pointer opacity-0 group-hover:opacity-100 `}
          onClick={prevSlide}
        />
        <ChevronRightIcon
          className={`h-10 w-10 p-2 absolute top-1/3 rounded-full border-emerald-500 bg-violet-700 hover:bg-emerald-500/80 text-white hover:text-violet-700 right-[5%] z-20 cursor-pointer opacity-0 group-hover:opacity-100 
        `}
          onClick={nextSlide}
        />

        {favouritesData.map((slide, index) => {
          return (
            <div
              className={`${
                index === current ? "slide active" : "slide"
              } absolute top-0 left-2/4 -translate-x-2/4 z-10 h-[60vh] w-[100vw] `}
              key={index}
            >
              {index === current && (
                <Image
                  src={slide.bannerImage}
                  objectFit="cover"
                  layout="fill"
                  className="select-none group"
                  priority
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex gap-x-[6px] left-2/4 -translate-x-2/4 absolute top-2 z-10">
        {Array.from({ length: 14 }).map((item, index) => (
          <div
            key={index}
            className={`${
              current === index ? "bg-emerald-300" : "bg-violet-700"
            } h-[15px] min-w-[15px] rounded-full  `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

{
  /* // .sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }) */
}

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import TextTruncate from "react-text-truncate";
import {
  bannerModalState,
  currentAnimeState,
  kitsuDataState,
} from "../atoms/dataAtoms";
import { useRecoilState, useRecoilValue } from "recoil";

const Banner = () => {
  const [current, setCurrent] = useRecoilState(currentAnimeState);
  const [showBannerModal, setShowBannerModal] =
    useRecoilState(bannerModalState);
  const trending = useRecoilValue(kitsuDataState);

  let slideInterval;
  let interval = 5000; // 5 seconds

  const nextSlide = () => {
    setCurrent(current === trending.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? trending.length - 1 : current - 1);
  };
  const autoNext = () => {
    slideInterval = setInterval(nextSlide, interval);
  };

  useEffect(() => {
    if (showBannerModal === false) {
      return () => {
        clearInterval(slideInterval);
      };
    }
  }, [current, showBannerModal]);

  return (
    <div className="mb-10">
      {trending.map((slide, index) => {
        return (
          <div
            key={index}
            className={`${
              index === current ? "slide active" : "slide"
            } group bg-slate-500`}
          >
            {index === current && (
              <div className=" flex min-h-[50vh] md:min-h-[60vh] xl:min-h-[80vh]  relative min-w-full ">
                <div className="bannerContainer z-10 min-h-[50vh] md:min-h-[60vh] xl:min-h-[80vh]  absolute w-full"></div>
                <Image
                  src={slide.attributes.coverImage.large}
                  objectFit="cover"
                  layout="fill"
                  className="select-none group  "
                  priority
                />

                <div className=" flex flex-col self-center md:ml-20 p-10 z-10 max-w-3xl  ">
                  <h2 className="md:text-3xl text-sky-500 font-semibold">
                    <span># {current + 1} </span> Popular
                  </h2>
                  <h1 className="text-base md:text-3xl xl:text-6xl  text-sky-300 font-bold">
                    {slide.attributes.titles.en ||
                      slide.attributes.titles.en_jp}
                  </h1>
                  <TextTruncate
                    line={2}
                    element="p"
                    truncateText="…"
                    text={slide.attributes.description}
                    className="text-sm md:font-bold md:text-base lg:text-xl text-gray-300 "
                  />
                  <button
                    onClick={() => {
                      setShowBannerModal(true);
                      clearInterval(slideInterval);
                    }}
                    className="flex  text-white text-sm md:text-base gap-x-2 items-center justify-center  rounded-full bg-green-500 max-w-[9rem]  md:max-w-[12rem] min-h-fit py-3 mt-8 hover:cursor-pointer z-30 "
                  >
                    <PlayIcon className="h-5 w-5" />
                    Watch Now
                  </button>
                </div>

                <div className=" absolute left-2/4 -translate-x-2/4 trans flex items-center justify-center self-end space-x-1 z-10  h-10 md:space-x-5 ">
                  <ChevronLeftIcon
                    className={`h-7 w-7 p-1  hidden md:inline rounded-full border-emerald-500 bg-violet-700 hover:bg-emerald-500/80 text-white hover:text-violet-700 left-[10%] z-10 cursor-pointer opacity-0 group-hover:opacity-100 `}
                    onClick={prevSlide}
                  />
                  {Array.from({ length: 14 }).map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        index === current ? "bg-emerald-300" : "bg-violet-700"
                      } h-[10px] min-w-[10px] rounded-full  `}
                    ></div>
                  ))}

                  <ChevronRightIcon
                    className={`h-7 w-7 p-1 hidden md:inline  rounded-full border-emerald-500 bg-violet-700 hover:bg-emerald-500/80 text-white hover:text-violet-700 right-[10%] z-10 cursor-pointer opacity-0 group-hover:opacity-100 
        `}
                    onClick={() => {
                      nextSlide();
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
// export { interval };

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

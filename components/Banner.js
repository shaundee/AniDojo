import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import TextTruncate from "react-text-truncate";
import {
  animeDataState,
  currentAnimeState,
  kitsuDataState,
  modalState,
} from "../atoms/dataAtoms";
import { useRecoilState, useRecoilValue } from "recoil";

const Banner = () => {
  // console.log(favouritesData[0].id);

  const [current, setCurrent] = useRecoilState(currentAnimeState);
  const [anime, setAnime] = useState(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const trending = useRecoilValue(kitsuDataState);

  const autoSlider = false;
  let slideInterval;
  let interval = 3000; // 5 seconds
  // console.log(animeData);
  // console.log(trending);

  // console.log(animeData[5]?.images.jpg.image_url);

  useEffect(() => {
    if (autoSlider) {
      autoNext();
      return () => {
        clearInterval(slideInterval);
      };
    }
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === trending.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? trending.length - 1 : current - 1);
  };
  const autoNext = () => {
    slideInterval = setInterval(nextSlide, interval);
  };

  if (!Array.isArray(trending) || trending.length <= 0) {
    return null;
  }

  return (
    <div className=" ">
      {trending.map((slide, index) => {
        return (
          <div
            key={index}
            className={`${
              index === current ? "slide active" : "slide"
            } group bg-slate-500`}
          >
            {index === current && (
              <div className=" flex min-h-[50vh] relative min-w-full ">
                <div className="bannerContainer flex z-10 min-h-[50vh] absolute w-full"></div>
                <Image
                  src={slide.attributes.coverImage.large}
                  objectFit="cover"
                  layout="fill"
                  className="select-none group "
                  priority
                />

                <div className=" flex flex-col self-start  absolute md:ml-20 p-10 z-10 max-w-lg ">
                  <h2 className="text-lg text-sky-500 font-semibold">
                    <span># {current + 1} </span> Popular
                  </h2>
                  <h1 className="text-2xl md:text-6xl text-sky-500 font-bold">
                    {slide.attributes.titles.en ||
                      slide.attributes.titles.en_jp}
                  </h1>
                  <TextTruncate
                    line={3}
                    element="p"
                    truncateText="…"
                    text={slide.attributes.description}
                    className="text-lg text-sky-300"
                  />
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setAnime(null);
                    }}
                    className="flex text-white text-sm md:text-base gap-x-2 items-center justify-center  rounded-full bg-green-500 max-w-[9rem]  md:max-w-[12rem] h-12 mt-8 hover:cursor-pointer z-30 "
                  >
                    <PlayIcon className="h-5 w-5" />
                    Watch Now
                  </button>
                </div>

                <div className="flex gap-x-[6px] self-end z-10 w-auto items-center mx-auto mb-5">
                  <ChevronLeftIcon
                    className={`h-10 w-10 p-2 mr-5 rounded-full border-emerald-500 bg-violet-700 hover:bg-emerald-500/80 text-white hover:text-violet-700 left-[10%] z-10 cursor-pointer opacity-0 group-hover:opacity-100 `}
                    onClick={prevSlide}
                  />
                  {Array.from({ length: 14 }).map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        index === current ? "bg-emerald-300" : "bg-violet-700"
                      } h-[15px] min-w-[15px] rounded-full  `}
                    ></div>
                  ))}

                  <ChevronRightIcon
                    className={`h-10 w-10 p-2 ml-5 rounded-full border-emerald-500 bg-violet-700 hover:bg-emerald-500/80 text-white hover:text-violet-700 right-[10%] z-10 cursor-pointer opacity-0 group-hover:opacity-100 
        `}
                    onClick={nextSlide}
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

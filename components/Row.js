import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useEffect, useRef, useState } from "react";
import TextTruncate from "react-text-truncate";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  animesDataState,
  animesModalState,
  bannerModalState,
  currentAnimeState,
  modalState,
} from "../atoms/dataAtoms";
import Cards from "./Cards";

const Row = ({ animes, title }) => {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // console.log(animesData);
  return (
    <div className="mb-10 group">
      <h2
        className="w-56 cursor-pointer text-sm font-semibold text-[#c2baba] transition duration-200 
        hover:text-white md:text-2xl mb-5"
      >
        {title}
      </h2>
      <div className=" flex scrollbar-hide relative auto">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto cursor-pointer opacity-0 h-16 w-16  text-sky-500 hover:text-purple-800 
          hover:scale-125 md:group-hover:opacity-100 ${!isMoved && "hidden"}`}
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="  scrollbar-hide flex items-center space-x-2.5 overflow-x-scroll md:-ml-2"
        >
          {animes.map((anime) => (
            <div key={anime.id}>
              <Cards anime={anime} />

              <TextTruncate
                line={1}
                element="h1"
                truncateText="…"
                text={
                  anime.attributes.titles.en || anime.attributes.titles.en_jp
                }
                className="mx-auto text-center flex self-end h-14 items-center justify-center text-sm md:text-base font-bold text-sky-300 z-10 bg-neutral-900 p-2"
              />
            </div>
          ))}
        </div>

        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-4 z-40 m-auto h-16 w-16 rounded-md cursor-pointer opacity-0 
          hover:scale-125 md:group-hover:opacity-100 text-sky-500 hover:text-purple-800`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Row;

{
  /* <div
  ref={rowRef}
  className="  scrollbar-hide flex items-center space-x-2.5 overflow-x-scroll md:-ml-2"
>
  {movies.map((movie) => (
    <Thumbnail key={movie.id} movie={movie} />
  ))}
</div>; */
}

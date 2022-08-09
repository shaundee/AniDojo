import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  animesDataState,
  animesModalState,
  currentAnimeState,
  modalState,
} from "../atoms/dataAtoms";
import Cards from "./Cards";

const Row = ({ animes, title }) => {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);
  const [AnimesShowModal, setAnimesShowModal] =
    useRecoilState(animesModalState);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const current = useRecoilValue(currentAnimeState);
  const [animesData, setAnimesData] = useRecoilState(animesDataState);

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
    <div className=" space-y-0.5 md:space-y-2">
      <h2
        className="w-56 cursor-pointer text-sm font-semibold text-[#c2baba] transition duration-200 
        hover:text-white md:text-2xl"
      >
        {title}
      </h2>
      <div className="scrollbar-hide group relative ">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto cursor-pointer opacity-0 h-12 w-20 hover:text-emerald-500/80 text-purple-900 
          hover:scale-125 group-hover:opacity-100 ${!isMoved && "hidden"}`}
          onClick={() => handleClick("left")}
        />
        <div
          ref={rowRef}
          className="  scrollbar-hide flex items-center space-x-2.5 overflow-x-scroll md:-ml-2"
        >
          {animes.map((anime) => (
            <div key={anime.id} onClick={() => setShowModal(true)}>
              <Cards anime={anime} />
              <h1>
                {anime.attributes.titles.en || anime.attributes.titles.en_jp}
              </h1>
            </div>
          ))}
        </div>

        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-4 z-40 m-auto h-12 w-20 cursor-pointer opacity-0 
            hover:scale-125 group-hover:opacity-100 text-purple-900`}
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

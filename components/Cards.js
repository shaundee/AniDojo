import { PlayIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  animeDataState,
  animesDataState,
  animesModalState,
  bannerModalState,
  currentAnimeState,
  modalState,
} from "../atoms/dataAtoms";

const Cards = ({ anime }) => {
  const [showModal, setShowModal] = useRecoilState(animesModalState);
  const [animesData, setAnimesData] = useRecoilState(animesDataState);

  //   console.log(animeData[0]?.images.jpg.image_url);
  //   console.log(anime);

  return (
    <div
      className=" flex group relative h-60 w-44 md:w-56 md:h-80 cursor-pointer transition duration-200 ease-out  md:hover:scale-105  mb-10"
      onClick={() => {
        setShowModal(true);
        setAnimesData(anime);
      }}
    >
      <Image
        src={anime.attributes.posterImage.large}
        className="rounded-sm object-cover md:rounded hover:opacity-30 ease-in duration-75"
        layout="fill"
      />
      <PlayIcon className="h-16 w-16 opacity-0 group-hover:opacity-100 relative self-center mx-auto -z-10" />
    </div>
  );
};

export default Cards;

import Image from "next/image";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  animeDataState,
  animesDataState,
  animesModalState,
  currentAnimeState,
  modalState,
} from "../atoms/dataAtoms";

const Cards = ({ anime }) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const current = useRecoilValue(currentAnimeState);
  const [showAnimesModal, setShowAnimesModal] =
    useRecoilState(animesModalState);
  const [animesData, setAnimesData] = useRecoilState(animesDataState);
  //   console.log(animeData[0]?.images.jpg.image_url);
  //   console.log(anime);

  return (
    <div className=" relative h-96 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-105 ">
      <a
        href={`https://www.youtube.com/watch?v=${anime?.attributes.youtubeVideoId} `}
      >
        <Image
          src={anime.attributes.posterImage.large}
          className="rounded-sm object-cover md:rounded"
          layout="fill"
        />
      </a>
      {/* {useEffect(() => {
        setAnimesData(anime?.attributes.youtubeVideoId);
      }, [anime])}
      {console.log(animesData)} */}
    </div>
  );
};

export default Cards;

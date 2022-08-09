import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { animeDataState } from "../atoms/dataAtoms";

const Slider = ({ data }) => {
  const [favourites, setFavourites] = useState(1);
  const animeData = useRecoilValue(animeDataState);
  console.log(animeData[0]?.title);
  console.log(animeData);
  return (
    <div className="bg-green-900 h-screen ">
      {animeData[0]?.title}
      {/* {animeData.map((slide, index) => {
        return <div key={index}>sadsad {slide.title}</div>;
      })} */}
      adadad
    </div>
  );
};

export default Slider;

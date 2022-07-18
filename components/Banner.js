import Image from "next/image";
import React from "react";

const Banner = ({ topTrending }) => {
  return (
    <div>
      {topTrending.map((topTrending) => {
        return (
          <div key={topTrending.id}>
            <img src={topTrending.coverImage.extraLarge} />
          </div>
        );
      })}
      <div></div>
    </div>
  );
};

export default Banner;

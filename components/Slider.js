import React, { useState } from "react";

const Slider = ({ trending }) => {
  // console.log(trending);
  const [favourites, setFavourites] = useState(1);

  return (
    <div>
      <img src={trending.bannerImage} />
    </div>
  );
};

export default Slider;

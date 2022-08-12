import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  bannerModalState,
  currentAnimeState,
  kitsuDataState,
} from "../atoms/dataAtoms";
import MuiModal from "@mui/material/Modal";
import ReactPlayer from "react-player";
import {
  CheckIcon,
  PlayIcon,
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from "@heroicons/react/outline";

const BannerModal = () => {
  const current = useRecoilValue(currentAnimeState);
  const [showBannerModal, setShowBannerModal] =
    useRecoilState(bannerModalState);
  const trending = useRecoilValue(kitsuDataState);

  const handleClose = () => {
    setShowBannerModal(false);
  };

  return (
    <MuiModal
      open={showBannerModal}
      onClose={() => {
        handleClose();
      }}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={() => {
            handleClose();
            setShowBannerModal(false);
          }}
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          {trending.map((anime, index) => (
            <div key={anime.id}>
              {index === current && (
                <div>
                  <ReactPlayer
                    url={` https://www.youtube.com/watch?v=${anime.attributes.youtubeVideoId}`}
                    width="100%"
                    height="100%"
                    style={{ position: "absolute", top: "0", left: "0" }}
                    playing
                    controls
                  />
                </div>
              )}
            </div>
          ))}

          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="modalButton">
                <PlusIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default BannerModal;

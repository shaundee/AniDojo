import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  animeDataState,
  animesDataState,
  animesModalState,
  bannerModalState,
  currentAnimeState,
  kitsuDataState,
  modalState,
} from "../atoms/dataAtoms";
import MuiModal from "@mui/material/Modal";
import ReactPlayer from "react-player";
import {
  CheckCircleIcon,
  CheckIcon,
  PlayIcon,
  PlusIcon,
  PlusSmIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from "@heroicons/react/outline";

const RowsModal = ({}) => {
  const [showModal, setShowModal] = useRecoilState(animesModalState);

  const trending = useRecoilValue(kitsuDataState);
  const animesData = useRecoilValue(animesDataState);

  const handleClose = () => {
    setShowModal(false);
  };

  // console.log(animesData);
  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={handleClose}
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          <div>
            <div>
              <ReactPlayer
                url={` https://www.youtube.com/watch?v=${animesData?.attributes.youtubeVideoId}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                playing
                controls
              />
            </div>
          </div>
          {console.log(animesData)}
          <div className="absolute bottom-20 flex w-full items-center justify-between px-10">
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

export default RowsModal;

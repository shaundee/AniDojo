import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import Banner from "../components/Banner.js";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  animesModalState,
  bannerModalState,
  kitsuDataState,
} from "../atoms/dataAtoms.js";
import BannerModal from "../components/BannerModal.js";
import Row from "../components/Row.js";
import requests from "../utils/requests.js";
import RowsModal from "../components/RowsModal.js";

const Home = ({
  trendingAnime,
  popularAnime,
  actionAnime,
  comedyAnime,
  dramaAnime,
  romanceAnime,
  allAnime,
}) => {
  // console.log(trendingAnime);

  const showModal = useRecoilValue(animesModalState);
  const showBannerModal = useRecoilValue(bannerModalState);
  const [trending, setTrending] = useRecoilState(kitsuDataState);

  useEffect(() => {
    if (trendingAnime) {
      setTrending(trendingAnime);
    }
  }, [trendingAnime]);

  // console.log(allAnime);

  return (
    <div className={`  ${showModal && "!h-screen overflow-hidden"}`}>
      <Head>
        <title>Anime dojo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col  ">
        <Banner />
        <section className="w-[90vw] mx-auto">
          <Row title="Trending" animes={popularAnime} />
          <Row title="Action" animes={actionAnime} />
          <Row title="Comedy" animes={comedyAnime} />
          <Row title="Horror" animes={dramaAnime} />
          <Row title="Romance" animes={romanceAnime} />
        </section>
      </main>
      {showModal && <RowsModal />}
      {showBannerModal && <BannerModal />}
    </div>
  );
};

// genres mal_id

export default Home;
export const getServerSideProps = async () => {
  const [
    { data: trendingAnime },
    { data: popularAnime },
    { data: actionAnime },
    { data: comedyAnime },
    { data: dramaAnime },
    { data: romanceAnime },
    { data: allAnime },
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchPopular).then((res) => res.json()),
    fetch(requests.fetchAction).then((res) => res.json()),
    fetch(requests.fetchComedy).then((res) => res.json()),
    fetch(requests.fetchDrama).then((res) => res.json()),
    fetch(requests.fetchRomance).then((res) => res.json()),
    fetch(requests.fetchAllAnime).then((res) => res.json()),
  ]);

  return {
    props: {
      trendingAnime,
      popularAnime,
      actionAnime,
      comedyAnime,
      dramaAnime,
      romanceAnime,
      allAnime,
    },
  };
};

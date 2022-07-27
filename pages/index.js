import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import favouritesURL, {
  favouritesOptions,
  trendingURL,
  trendingOptions,
} from "../utils/requests.js";

import Banner from "../components/Banner.js";
import { useRecoilState } from "recoil";
import { favState, trendState } from "../atoms/dataAtoms.js";
import { concatAST } from "graphql";

const Home = ({ favouritesData, trendingData }) => {
  // console.log(data.Page.topTrending[0].title);

  return (
    <div className=" ">
      <Head>
        <title>Anime dojo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <p>{topTrending.id}</p> */}
      <Banner favouritesData={favouritesData} />
      <main className=" ">
        {/* <div>
          {topTrending.map((topTrending) => {
            return (
              <h1 className="tex-bold text-green-700" key={topTrending.id}>
                name: {topTrending.title.romaji} Id: {topTrending.id}
              </h1>
            );
          })}
        </div> */}
      </main>
      <div></div>
    </div>
  );
};

export default Home;
export const getServerSideProps = async () => {
  const {
    data: {
      Page: { media: favouritesData },
    },
  } = await (await fetch(favouritesURL, favouritesOptions)).json();

  const {
    data: {
      Page: { media: trendingData },
    },
  } = await (await fetch(trendingURL, trendingOptions)).json();

  return {
    props: {
      favouritesData,
      trendingData,
    },
  };
};

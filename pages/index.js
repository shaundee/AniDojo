import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import url, { options } from "../utils/requests.js";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Banner from "../components/Banner.js";

const Home = ({ topTrending, pageInfo }) => {
  console.log(topTrending);
  // console.log(pageInfo);
  // console.log(data.Page.media[0].title);

  return (
    <div className=" flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Anime dojo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner topTrending={topTrending} />
      {/* <main className="  flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div> anime title: {media[0].title.romaji}</div>
        <div>
          {media.map((media) => {
            return (
              <h1 className="tex-bold text-green-700" key={media.id}>
                name:{media.title.romaji} Id: {media.id}
              </h1>
            );
          })}
        </div>
      </main> */}
      <div></div>
    </div>
  );
};

export default Home;
export const getServerSideProps = async () => {
  const {
    data: {
      Page: { media: topTrending },
    },
  } = await (await fetch(url, options)).json();
  console.log("lol");
  return {
    props: {
      topTrending,
    },
  };
};

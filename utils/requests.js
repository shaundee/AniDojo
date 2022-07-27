// Build the Anime Query!!!
let topFavourited = `
query ($id: Int, $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(id: $id, sort: [FAVOURITES_DESC], type: ANIME) {
      id
      title {
        romaji
      }
      favourites
      bannerImage
      description
    }
    pageInfo{
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
  }
}
`;
let topTrending = `
query ($id: Int, $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(id: $id, sort: [TRENDING_DESC], type: ANIME) {
      id
      title {
        romaji
      }
 
    }
 
  }
}
`;

let variables = {
  page: 1,
  perPage: 14,
};

let favouritesURL = "https://graphql.anilist.co",
  favouritesOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: topFavourited,
      variables: variables,
    }),
  };

let trendingURL = "https://graphql.anilist.co",
  trendingOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: topTrending,
      variables: variables,
    }),
  };

export default favouritesURL;
export { favouritesOptions, trendingURL, trendingOptions };

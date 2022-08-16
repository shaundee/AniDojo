const genres = {
  action: 1,
  adventure: 2,
  awardWinning: 46,
  comedy: 4,
  drama: 8,
  fantasy: 10,
  romance: 22,
  sliceOfLife: 36,
};

const requests = {
  fetchTrending: ` https://kitsu.io/api/edge/trending/anime?&sort=-favoritesCount`,
  fetchPopular: `https://kitsu.io/api/edge/anime?sort=userCount&page[limit]=20`,
  fetchAction: ` https://kitsu.io/api/edge/anime?filter[categories]=Action&sort=-favoritesCount&page[limit]=20`,
  fetchComedy: `https://kitsu.io/api/edge/anime?filter[categories]=comedy&sort=-favoritesCount&page[limit]=20`,
  fetchDrama: ` https://kitsu.io/api/edge/anime?filter[categories]=horror&sort=-favoritesCount&page[limit]=20`,
  fetchRomance: ` https://kitsu.io/api/edge/anime?filter[categories]=romance&sort=-favoritesCount&page[limit]=20`,
};
export default requests;

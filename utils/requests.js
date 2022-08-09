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
  fetchPopular: `https://kitsu.io/api/edge/anime?sort=userCount`,
  fetchAction: ` https://kitsu.io/api/edge/anime?filter[categories]=Action&sort=-favoritesCount`,
  fetchComedy: `https://kitsu.io/api/edge/anime?filter[categories]=comedy&sort=-favoritesCount`,
  fetchDrama: ` https://kitsu.io/api/edge/anime?filter[categories]=horror&sort=-favoritesCount`,
  fetchRomance: ` https://kitsu.io/api/edge/anime?filter[categories]=romance&sort=-favoritesCount`,
  fetchAllAnime: ` https://kitsu.io/api/edge/anime`,
};
export default requests;

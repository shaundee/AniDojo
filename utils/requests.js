// Build the Anime Query!!!
var query = `
query ($id: Int, $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(id: $id, sort: [TRENDING_DESC], type: ANIME) {
      id
      title {
        romaji
      }
      trending
      source
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      description
    }
  }
}
`;

var variables = {
  page: 1,
  perPage: 15,
};

var url = "https://graphql.anilist.co",
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  };

export default url;
export { options };

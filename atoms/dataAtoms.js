import { atom } from "recoil";

export const bannerModalState = atom({
  key: "bannerModalState",
  default: false,
});
export const animesModalState = atom({
  key: "animesModalState",
  default: false,
});
export const animeDataState = atom({
  key: "animeDataState",
  default: [],
});
export const kitsuDataState = atom({
  key: "kitsuDataState",
  default: [],
});
export const currentAnimeState = atom({
  key: "currentAnimeState",
  default: 0,
});
export const animesDataState = atom({
  key: "animesDataState",
  default: null,
});

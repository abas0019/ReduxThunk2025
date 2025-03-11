import { faker } from "@faker-js/faker/locale/en";

// This file has nothing to do with Redux
// It exports functions that create random
// movies and song


export const createRandomSong = () => {
  return faker.music.songName();
};

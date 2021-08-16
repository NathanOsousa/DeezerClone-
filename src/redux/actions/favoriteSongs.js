import {SET_FAVOURITE_SONGS, RESET_FAVOURITE_SONGS} from '../mapping';

export function setFavouriteSongs(info) {
  return {
    type: SET_FAVOURITE_SONGS,
    info,
  };
}
export function resetFavouriteSongs() {
  return {
    type: RESET_FAVOURITE_SONGS,
  };
}

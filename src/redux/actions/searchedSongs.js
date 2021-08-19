import {SET_SEARCHED_SONGS, RESET_SEARCHED_SONGS} from '../mapping';

export function setSearchedSongs(info) {
  return {
    type: SET_SEARCHED_SONGS,
    info,
  };
}
export function resetSearchedSongs() {
  return {
    type: RESET_SEARCHED_SONGS,
  };
}

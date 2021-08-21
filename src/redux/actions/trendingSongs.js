import {SET_TRENDING_SONGS, RESET_TRENDING_SONGS} from '../mapping';

export function setTrendingSongs(info) {
  return {
    type: SET_TRENDING_SONGS,
    info,
  };
}
export function resetTrendingSongs() {
  return {
    type: RESET_TRENDING_SONGS,
  };
}

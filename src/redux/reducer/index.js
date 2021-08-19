import {
  SET_FAVOURITE_SONGS,
  RESET_FAVOURITE_SONGS,
  SET_SEARCHED_SONGS,
  RESET_SEARCHED_SONGS,
} from '../mapping';
import update from 'immutability-helper';
import {INITIAL_STATE} from './constants';

export default function songsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FAVOURITE_SONGS:
      return update(state, {
        favouriteSongs: {
          $set: action.info,
        },
      });
    case RESET_FAVOURITE_SONGS:
      return update(state, {
        favouriteSongs: {
          $set: INITIAL_STATE.favouriteSongs,
        },
      });
    case SET_SEARCHED_SONGS:
      return update(state, {
        searchedSongs: {
          $set: action.info,
        },
      });
    case RESET_SEARCHED_SONGS:
      return update(state, {
        favouriteSongs: {
          $set: INITIAL_STATE.searchedSongs,
        },
      });
    default:
      return state;
  }
}

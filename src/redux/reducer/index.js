import {SET_FAVOURITE_SONGS, RESET_FAVOURITE_SONGS} from '../mapping';
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
    default:
      return state;
  }
}

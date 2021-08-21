import {
  SET_FAVOURITE_SONGS,
  RESET_FAVOURITE_SONGS,
  SET_SEARCHED_SONGS,
  RESET_SEARCHED_SONGS,
  SET_TRENDING_SONGS,
  RESET_TRENDING_SONGS,
  SET_CUREENT_LIST,
  RESET_CUREENT_LIST,
} from '../mapping';
import update from 'immutability-helper';
import {INITIAL_STATE} from './constants';

export default function songsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_FAVOURITE_SONGS:
      return update(state, {
        favouriteSongs: {
          $push: action.info,
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
    case SET_TRENDING_SONGS:
      return update(state, {
        trendingSongs: {
          $set: action.info,
        },
      });
    case RESET_TRENDING_SONGS:
      return update(state, {
        favouriteSongs: {
          $set: INITIAL_STATE.trendingSongs,
        },
      });
    case SET_CUREENT_LIST:
      return update(state, {
        currentList: {
          $set: action.info,
        },
      });
    case RESET_CUREENT_LIST:
      return update(state, {
        currentList: {
          $set: INITIAL_STATE.currentList,
        },
      });
    default:
      return state;
  }
}

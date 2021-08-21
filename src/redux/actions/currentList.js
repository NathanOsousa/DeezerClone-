import {SET_CUREENT_LIST, RESET_CUREENT_LIST} from '../mapping';

export function setCurrentList(info) {
  return {
    type: SET_CUREENT_LIST,
    info,
  };
}
export function resetCurrentList() {
  return {
    type: RESET_CUREENT_LIST,
  };
}

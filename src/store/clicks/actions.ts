import * as types from './types';

export const setClicksState = (clicks:number):types.SetClicksStateTypes => {
  return {
    type: types.SET_CLICKS_STATE,
    payload: clicks,
  };
};

import * as types from './types.js';

export const setClicksState = clicks => {
  return {
    type: types.SET_CLICKS_STATE,
    payload: clicks,
  };
};

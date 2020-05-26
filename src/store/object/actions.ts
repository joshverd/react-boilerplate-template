import * as types from './types';

export const setName = (name:string):types.SetNameTypes => {
  return {
    type: types.SET_NAME,
    payload: name,
  };
};

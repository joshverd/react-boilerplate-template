import { Reducer } from 'redux';
import * as types from './types';

const defaultState: types.RequestsState = 0;

const reducer: Reducer<types.RequestsState | undefined> = (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_REQUEST_COUNT: {
      state = action.payload;

      break;
    }
  }

  return state;
}

export default reducer;

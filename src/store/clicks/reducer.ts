import { Reducer } from 'redux';
import { ClicksStateType } from './types';

// Default state of this reducer
const defaultState:ClicksStateType = 0;

const reducer:Reducer<ClicksStateType> = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_CLICKS_STATE': {
      state = action.payload;

      break;
    };
  };

  return state;
};

export default reducer;

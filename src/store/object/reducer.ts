import { Reducer } from 'redux';
import { ObjectType } from './types';

const defaultState:ObjectType = {
  name: 'Default Name!',
};

const reducer:Reducer<ObjectType> = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_NAME': {
      state = {
        ...state,
        name: action.payload,
      };

      break;
    };
  };

  return state;
}

export default reducer;

import { combineReducers, createStore } from 'redux';

// Importing reducers
import ClicksReducer from './clicks/reducer';
import ObjectReducer from './object/reducer';

// Importing reducer types
import { ClicksStateType } from './clicks/types';
import { ObjectType } from './object/types';

const allReducers = combineReducers({
  clicks: ClicksReducer,
  object: ObjectReducer,
});

// Making the StoreTypes type global, so we don't have to import it in every component file we use it in
declare global {
  type StoreTypes = {
    clicks: ClicksStateType,
    object: ObjectType,
  };
};

// Exporting a function that, when run, will create a store using allReducers
export default createStore(allReducers);

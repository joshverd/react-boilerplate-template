import { combineReducers, createStore } from 'redux';

// Importing reducers
import RequestsReducer from './requests/reducer';

// Importing reducer types
import { RequestsState } from './requests/types';

const allReducers = combineReducers({
  requests: RequestsReducer,
});

// Making the ReduxState type global, so we don't have to import it in every component file we use it in
//
// Pretty sure this is an antipattern but I think it saves a ton of time if every component needs access.
declare global {
  type ReduxState = {
    requests: RequestsState,
  }
}

// Exporting the created store using the above reducers.
export default createStore(allReducers);

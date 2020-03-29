import { combineReducers } from 'redux';

// Importing reducers
import Clicks from './clicks.js';

const allReducers = combineReducers({
  clicks: Clicks,
});

export default allReducers;

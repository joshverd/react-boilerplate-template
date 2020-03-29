const defaultState = 0;

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_CLICKS_STATE': {
      state = action.payload;

      break;
    };
    default: {
      console.warn(`Unknown action type of "${action.type}" on reducer.`);

      break;
    };
  };

  return state;
};

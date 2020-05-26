export const SET_CLICKS_STATE = 'SET_CLICKS_STATE';

// The types that should be on this action
export type SetClicksStateTypes = {
  type: string,
  payload: number,
};

// 'Type' naming scheme should be used even if we are dealing with an object
export type ClicksStateType = number;

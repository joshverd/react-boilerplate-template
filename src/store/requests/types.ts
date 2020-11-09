export const SET_REQUEST_COUNT = 'SET_REQUEST_COUNT';

export type SetRequestCount = {
  type: typeof SET_REQUEST_COUNT,
  payload: number,
}

export type RequestsState = number;

import * as types from './types';

export const setRequestCount = (requestCount: number): types.SetRequestCount => {
  return {
    type: types.SET_REQUEST_COUNT,
    payload: requestCount,
  }
}

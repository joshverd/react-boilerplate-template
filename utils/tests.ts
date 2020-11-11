// Types
import type GlobalObject from 'types/GlobalObject';

export default {
  mockGlobalObject,
}

// Generate a mocked global object and return it
function mockGlobalObject(): GlobalObject {
  let global: GlobalObject = {
    numberOfRequests: 0,
  }

  return global;
}

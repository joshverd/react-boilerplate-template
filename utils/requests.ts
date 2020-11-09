import type GlobalObject from 'types/GlobalObject';

export default {
  incrementRequests,
}

function incrementRequests(
  {
    global,
  } : {
    global: GlobalObject,
  },
) {
  // Increment global number of requests
  global.numberOfRequests++;
}

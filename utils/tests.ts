import express from 'express';

// Types
import type GlobalObject from 'types/GlobalObject';
import type { Router } from 'express';

export default {
  mockGlobalObject,
  mockExpressApp,
}

// Accepts a global object and routes, then returns an express application
function mockExpressApp(
  {
    global,
    routes,
  } : {
    global: GlobalObject,
    routes: {
      [route: string]: (global: GlobalObject) => Router,
    },
  },
) {
  const app = express();

  // Loop through the routes
  for(const [route, router] of Object.entries(routes)) {
    // For each route, run the router function, passing in the proper parameters
    app.use(route, router(global));
  }

  return app;
}

// Generate a mocked global object and return it
function mockGlobalObject(): GlobalObject {
  let global: GlobalObject = {
    numberOfRequests: 0,
  }

  return global;
}

import express from 'express';
import * as http from 'http';
import * as path from 'path';
import bodyParser from 'body-parser';

// Importing the config file
import config from './config';

// Types
import type GlobalObject from 'types/GlobalObject';

// Express app setup
const app = express();
const server = http.createServer(app);

// bodyParser for 'POST' requests
app.use(bodyParser());

// Public folder will server static assets
app.use(express.static(path.join(__dirname, 'public')));

// A global object that all route files will have access to.
//  This is good for keeping a list of connected users, or for
//  calling data once and then caching it for the rest of the application
//  to use.
let global: GlobalObject = {
  numberOfRequests: 0,
};

// Routes!
// Pass the global object in as a variable on the function that is returned from `./routes/example.js`
app.use('/api/requests', require('./routes/requests/requests')(global));

// Starting the server
server.listen(config.backend.port, () => {
  console.log(`Backend started on port ${config.backend.port}.`);
});

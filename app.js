const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');

// Importing the config file
const config = require('./config.js');

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
let global = { };

// Routes!
// Pass the global object in as a variable on the function that is returned from `./routes/example.js`
app.use('/api/example', require('./routes/example.js')(global));

// Starting the server
server.listen(config.backend.port, () => {
  console.log(`Backend started on port ${config.backend.port}.`);
});

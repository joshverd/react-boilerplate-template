const express = require('express');
// In route files, import the express router
const router = express.Router();
const config = require('../config.js');

// Importing utils
const example = require('../utils/example.js');

module.exports = (global) => {
  // Returns an array of randomly-generated users
  router.get('/get', (req, res) => {
    // Calling example's generateUsers function
    example.generateUsers({
      count: 10,
      names: [
        'john',
        'bill',
        'joe',
        'josh',
        'ethan',
        'thomas',
        'bob',
        'jane',
        'michelle',
      ],
      ages: [
        10,
        20,
        44,
        18,
        92,
        72,
        85,
        17,
        19,
        35,
        44,
        58,
        81,
      ],
    }, (users) => {
      // Sending the randomly generated users in the response
      return res.send({
        success: true,
        data: users,
      });
    });
  });

  return router;
};

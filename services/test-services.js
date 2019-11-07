'use strict';

const connection = require('./database-connection');

const testGet = () => new Promise((resolve, reject) => {
  connection.query('SELECT * FROM players;', (err, res) => (err ? reject(err) : resolve(res)));
});

module.exports = { testGet };
  
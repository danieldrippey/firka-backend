'use strict';

const connection = require('./database-connection');

const registerPlayer = (username, password) => new Promise((resolve, reject) => {
  const query = 'INSERT INTO players(username, password) VALUES (?, ?);';
  connection.query(query, [username, password], (err, res) => (err ? reject(err) : resolve(res)));
});

module.exports = { registerPlayer };

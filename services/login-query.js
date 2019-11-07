'use strict';

const connection = require('./database-connection');

const findPlayer = (username, password) => new Promise((resolve, reject) => {
  const query = 'SELECT username, password FROM players WHERE username=? AND password=?;';
  connection.query(query, [username, password], (err, res) => (err ? reject(err) : resolve(res)));
});

module.exports = { findPlayer };

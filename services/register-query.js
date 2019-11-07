'use strict';

const connection = require('./database-connection');

const checkNewPlayerName = (username) => new Promise((resolve, reject) => {
  const query = 'SELECT username FROM players WHERE username=?;';
  connection.query(query, [username], (err, res) => (err ? reject(err) : resolve(res)));
});

module.exports = { checkNewPlayerName };

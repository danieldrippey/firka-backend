'use strict';

const connection = require('./database-connection');

const responseQuery = (username) => new Promise((resolve, reject) => {
  const query = 'SELECT id, username, display_name, victories, avatar FROM players WHERE username=?;';
  connection.query(query, [username], (err, res) => (err ? reject(err) : resolve(res[0])));
});

module.exports = { responseQuery };

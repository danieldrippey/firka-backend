'use strict';

const connection = require('./database-connection');

const responseQuery = (id) => new Promise((resolve, reject) => {
  const query = 'SELECT id, username, display_name, victories, avatar FROM players WHERE id=?;';
  connection.query(query, [id], (err, res) => (err ? reject(err) : resolve(res[0])));
});

module.exports = { responseQuery };

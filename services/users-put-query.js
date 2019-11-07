'use strict';

const connection = require('./database-connection');

const updateVictory = (id) => new Promise((resolve, reject) => {
  let query = 'UPDATE players SET victories = victories + 1 WHERE id = ?;'
  connection.query(query, id, (err, res) => (err ? reject(err) : resolve(res)));
});

module.exports = { updateVictory }

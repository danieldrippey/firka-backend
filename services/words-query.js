'use strict';

const connection = require('./database-connection');
let numberofPlayers = 3;
const getWords = () => new Promise((resolve, reject) => {
  connection.query(`SELECT content FROM words ORDER BY RAND() LIMIT ${numberofPlayers};`, (err, res) => (err ? reject(err) : resolve(res)));
});

module.exports = { getWords }

'use strict';

const connection = require('./database-connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerPlayer = (username, password) => new Promise((resolve, reject) => {  
  const hash = bcrypt.hashSync(password, saltRounds);
  const query = 'INSERT INTO players(username, password) VALUES (?, ?);';
  connection.query(query, [username, hash], (err, res) => (err ? reject(err) : resolve(res)));
});

module.exports = { registerPlayer };

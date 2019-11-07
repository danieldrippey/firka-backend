'use strict';

const connection = require('./database-connection');

const getUsers = () => new Promise((resolve, reject) => {
  connection.query(`SELECT id, username, display_name, victories, avatar FROM players ORDER BY victories DESC LIMIT 10;`, (err, res) => (err ? reject(err) : resolve(res)));
});

module.exports = { getUsers }

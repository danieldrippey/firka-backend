'use strict';

const usersService = require('../services/users-query');

const gettingUsers = (req, res) => {
  usersService.getUsers()
  .then((response) => res.send(response))
  .catch(() =>res.status(500).send({message: 'Something went wrong.'}));
};

module.exports = gettingUsers;

'use strict';

const testQuery = require('../services/test-services');

const getPlayers = (req, res) => {
  testQuery.testGet()
    .then((players) => res.send(players))
    .catch(() => res.status(500).send({ message: 'Something went wrong, please try again later.' }));
};

module.exports = getPlayers;

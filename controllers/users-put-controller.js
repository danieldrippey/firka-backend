'use strict';

const updateVictory = require('../services/users-put-query');

const userWon = (req, res) => {
  const id = req.params.id;
  updateVictory.updateVictory(id)
    .then(res.sendStatus(200))
    .catch(() => res.status(500).send({ message: 'Something went wrong.' }));
};

module.exports = userWon;

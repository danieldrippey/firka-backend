'use strict';

const wordsService = require('../services/words-query');

const gettingWords = (req, res) => {
  wordsService.getWords()
  .then((response) => res.send(response))
  .catch(() =>res.status(500).send({message: 'Something went wrong.'}));
};

module.exports = gettingWords;

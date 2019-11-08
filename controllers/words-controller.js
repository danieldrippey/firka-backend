'use strict';

const wordsService = require('../services/words-query');

const gettingWords = (req, res) => {
  wordsService.getWords()
  .then((response) => response.map(function(element) {
    return element.content;
  }))
  .then((response) => res.send(response))
  .catch(() =>res.status(500).send({message: 'Something went wrong.'}));
};

module.exports = gettingWords;

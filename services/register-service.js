'use strict';

const jwt = require('jsonwebtoken');
const registerQuery = require('./register-query');
const registerToDatabase = require('./register-into-db');
const registerResponseQuery = require('./register-response-query');

async function registerService(username, password) {
  const secret = process.env.SECRET;
  try {
    const foundUser = await registerQuery.checkNewPlayerName(username);
    if (!foundUser.length) {
      const token = jwt.sign({ username }, secret, {
        expiresIn: process.env.TOKEN_LIFE,
      });
      const register = await registerToDatabase.registerPlayer(username, password);
      const id = register.insertId;
      const playerDetails = await registerResponseQuery.responseQuery(id);
      const response = { playerDetails, token };
      return response;
    }
    return null;
  } catch (error) {
    throw new Error();
  }
}

module.exports = registerService;

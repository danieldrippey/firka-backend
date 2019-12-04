'use strict';

const jwt = require('jsonwebtoken');
const loginQuery = require('./login-query');
const loginResponseQuery = require('./login-response-query');
const bcrypt = require('bcrypt');

async function loginService (username, password) {
  const secret = process.env.SECRET;
  try {
    const foundPlayer = await loginQuery.findPlayer(username);
    if (!foundPlayer.length) {
      return null;
    }
    const match = await bcrypt.compare(password, foundPlayer[0].password);
    if (!match) {
      return null;
    } 
    const token = jwt.sign({ username }, secret, {
      expiresIn: process.env.TOKEN_LIFE,
    });
    const playerDetails = await loginResponseQuery.responseQuery(username);
    const response = { playerDetails, token };
    return response;
  } catch (error) {
    throw new Error();
  }
}

module.exports = loginService;

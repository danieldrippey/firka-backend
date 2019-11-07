'use strict';

const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.body.token, process.env.SECRET);
    const authenticatedUsername = decoded.username;
    req.username = authenticatedUsername;
    next();
  } catch (error) {
    if (error.message === 'invalid signature' || error.message === 'jwt must be provided') {
      res.status(401).json({ message: 'You are not authorized.' });
    } else if (error.message === 'jwt expired') {
      res.status(401).json({ message: 'Expired token.' });
    } else {
      next(error);
    }
  }
};

module.exports = verifyToken;

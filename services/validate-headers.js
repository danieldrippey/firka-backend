'use strict';

const validateHeaders = (req, res, next) => {
  if (req.headers['content-type'] !== 'application/json') {
    return res.status(415).json({ message: 'Content-type must be application/json.' });
  }
  return next();
};

module.exports = validateHeaders;

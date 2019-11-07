'use strict';

const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({ message: `Missing ${validationErrors.errors[0].param}.` });
  }
  return next();
};

module.exports = validateFields;

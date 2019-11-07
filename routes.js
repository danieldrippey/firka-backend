const { check } = require('express-validator');
const router = require('express').Router();
const testController = require('./controllers/test-contoller');
const registerController = require('./controllers/register-controller');
const loginController = require('./controllers/login-controller');

const checkFields = require('./services/field-validator');
const validateHeaders = require('./services/validate-headers');

const validate = [validateHeaders, checkFields];

router.get('/', testController);

router.post('/register', [
  check('username').isLength({ min: 1 }),
  check('password').isLength({ min: 1 }),
  validate,
], registerController);

router.post('/login', [
  check('username').isLength({ min: 1 }),
  check('password').isLength({ min: 1 }),
  validate,
], loginController);

module.exports = router;

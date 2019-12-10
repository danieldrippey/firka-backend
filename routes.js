const { check } = require('express-validator');
const router = require('express').Router();
const registerController = require('./controllers/register-controller');
const loginController = require('./controllers/login-controller');
const wordsController = require('./controllers/words-controller');
const usersController = require('./controllers/users-controller');
const increaseWin = require('./controllers/users-put-controller');

const refreshController = require('./controllers/refresh-controller');
const authenticate = require('./services/jwt-authenticator');
const checkFields = require('./services/field-validator');
const validateHeaders = require('./services/validate-headers');


const validate = [validateHeaders, checkFields];

let path = require("path");

router.get('/words', wordsController);
router.get('/users', usersController);

router.put('/users/:id', increaseWin);

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

router.post('/refresh', validateHeaders, authenticate, refreshController);

router.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'no file was uploaded.' })
  }

  const file = req.files.file;

  file.mv(path.join(__dirname, `../firka-frontend/public/avatars/${file.name}`), err => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/avatars/${file.name}` });
  })
});

module.exports = router;

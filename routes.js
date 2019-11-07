const router = require('express').Router();
const testController = require('./controllers/test-contoller');

router.get('/', testController);

module.exports = router;

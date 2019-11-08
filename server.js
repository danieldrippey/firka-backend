'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT || 4000;

app.use(fileUpload());
app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Something went wrong.' });
});

app.listen(port, () => {
  console.log(`Application started on port ${port}.`);
});

module.exports = app;

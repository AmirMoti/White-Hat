const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const http = require('./producthttp');
const session = require('express-session');
var MongoStore = require('connect-mongo')(session);

const app = express();

//connect to Mongo DB
mongoose.connect("mongodb://localhost:27017/white-hat", () => { })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((error) => {
    console.log('error');
    console.log('Connection to database failed!');
  });
var db = mongoose.connection;

// fixed headers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "white-hat")));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

app.use('/wh', http);
module.exports = app;


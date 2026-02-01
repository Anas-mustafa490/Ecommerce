const express = require('express');
const router = require('./api');
const _ = express.Router();
_.use("/api", router);
module.exports = _;
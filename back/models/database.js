'use strict';

//db name: project_amaSon

var config = require('../config/config.json');
var Sequelize = require('sequelize');

module.exports = new Sequelize(config.database, config.username, config.password, config);
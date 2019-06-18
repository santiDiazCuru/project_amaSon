const express = require('express');
const chalk = require('chalk')
const app = express();



//Levanta server

app.listen(8000);
console.log(chalk.magenta('amaSon_project en el server ') + chalk.white(8000))
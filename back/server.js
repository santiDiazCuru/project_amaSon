const express = require('express');
const chalk = require('chalk')
const app = express();
const db = require('./models/database')

const path = require('path');
const bodyParser = require('body-parser')
//const apiRoutes = require('./server/routes/index');

const cookieParser = require('cookie-parser');
const session = require("express-session");

// Requiring passport as we've configured it
//const passport = require("./config/passport");

// SESSION
// app.use(session({ secret: "omdb" }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname + '/public'))); 

//app.use('/api', apiRoutes)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public', 'index.html'))
});

//Levanta server

db.sync()
   .then(function () {
      app.listen(8000)
      console.log(chalk.magenta.underline.bold('Aguante el servidor ') + chalk.blue.underline.bold(8000 + '!'))
   })
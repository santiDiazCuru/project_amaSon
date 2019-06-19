const express = require('express');
const chalk = require('chalk')
const app = express();
const db = require('./models/database')
const Products = require('./models/Products')
const path = require('path');
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
//const apiRoutes = require('./server/routes/index');

const cookieParser = require('cookie-parser');
const session = require("express-session");
// for (let i = 50; i >0; i--) {
//    Products.create({
//       titulo: "Carlos",
//      descripcion: "Pito Grande",
//      precio: 20.00,
//      stock: 50,
//    })
// }

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

app.use('/', indexRouter)

app.get('/*', function(req,res){
   res.sendFile(path.join(__dirname + '/public', 'index.html'))
})


//Levanta server

db.sync({force:false})
   .then( ()=> {
      app.listen(8000)
      console.log(chalk.yellow.bold('amaSon ') + chalk.white.bold('- ')  + chalk.red.bold(8000) + chalk.red.bold('! ') + chalk.white.bold(':)'))
   })
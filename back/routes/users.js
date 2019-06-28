const express = require("express");
const Router = express.Router();
const User = require("../models/Users");
const passport = require('../config/passport');
const OC = require('../models/index')

Router.get('/', function (req, res) {
    User.findAll({order: [['id', 'DESC']]})
        .then(users => res.json(users))
})

Router.post('/register', function (req, res) {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (user) return res.status(500).send('el usuario ya existe')
            if (!user) return User.create(req.body)
                .then(newUser => res.send(newUser))
        })
})

Router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err) }
        if (!user) {
            req.session.message = info.message;
            return res.send('X') // Devuelve el error Invalid mail o pass
        }
        req.logIn(user, function (err) {
            if (err) { res.send('X') } // Ver que error es
            return res.json(user);// Retorna el mail del usuario si esta correcto
        });
    })(req, res, next);
});

Router.get("/isLoggedIn", function (req, res) {
    let Session = req.session.passport;
    let session = {
        id: (Session) ? Session.user.id : '',
        username: (Session) ? Session.user.username : '',
        email: (Session) ? Session.user.email : '',
        isAdmin: (Session) ? Session.user.isAdmin : ''
    }

    Session && res.json(session)
});


Router.get("/logout", function (req, res) {
    req.session.destroy();
    console.log('deslogeado')
    res.send('Deslogeado')
});

Router.put('/changeAdminStatus/:userId', function (req, res) {
    console.log( req.body.isAdmin,req.params.userId
        )
    User.update({
        isAdmin: req.body.isAdmin
    },
        {
            where: {
                id: req.params.userId
            }
        }
    ).then(user => res.json(user))
})


Router.get(`/delete/:userId`, function (req, res) {
    // console.log('entre a deleteUser')
    User.destroy({ where: { id: req.params.userId } })
        .then((user) => {
            res.send('usuario eliminado')
            console.log('elimine un usuario?!?!: ', user)
        })
})



module.exports = Router;
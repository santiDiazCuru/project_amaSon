const express = require("express");
const Router = express.Router();
const Review = require("../models/Reviews");

Router.post('/', (req, res) => {
    console.log("ASDASDASDSDASDASDASD", req.body)
    Review.create({
        valoracion: req.body.valoracion,
        comentario: req.body.comentario,
    })
    .then(review => {let user = review.setUser(req.body.userId)
    let product = review.setProduct(req.body.productId)
    Promise.all([user, product])
    .then(finalReview => console.log("SOY FINAL REVIEW", finalReview))
    })
    
      })


      module.exports = Router;
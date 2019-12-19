const express = require("express");
const Router = express.Router();
const Compra = require("../models/index").Compras;
const OC = require("../models/index").OC;
const Product = require("../models/index").Products;
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

Router.get("/carrito/:id", function(req, res) {
  OC.findOne({
    where: {
      userId: req.params.id,
      estado: "carrito"
    }
  })
    .then(OC => {
      if (!OC) return [];
      if (OC) {
        return Compra.findAll({
          where: {
            OCId: OC.id
          },
          include: {
            model: Product,
            as: "product",
            attributes: ["img1", "titulo", "precio"]
          },
          order: [["id", "DESC"]]
        });
      }
    })
    .then(compras => res.json(compras));
});

// BUSQUEDA POR ESTADOS
//===================================
Router.get("/estados/:id/:status/:admin", function(req, res) {
  console.log(req.params.admin, req.params.status);
  if (req.params.status == "todos" && req.params.admin == "false") {
    console.log("pero entra a 1");
    var objFiltro = {
      userId: req.params.id
    };
  } else if (req.params.admin == "false") {
    console.log("pero entra a 2");
    var objFiltro = {
      userId: req.params.id,
      estado: req.params.status
    };
  } else if (req.param.status == "todos" && req.params.admin == "true") {
    console.log("deberia entrar aca");
    var objFiltro = {};
  } else if (req.params.status !== "todos") {
    console.log("pero entra a 4");
    var objFiltro = {
      estado: req.params.status
    };
  }
  Compra.findAll({
    include: [
      {
        model: OC,
        as: "OC",
        attributes: ["id", "fecha", "estado", "createdAt"],
        where: objFiltro
      },
      {
        model: Product,
        as: "product",
        attributes: ["img1", "titulo", "precio"]
      }
    ],
    attributes: ["id", "cantidad", "OCId"],
    order: [["id", "DESC"]]
  }).then(OC => {
    res.json(OC);
  });
});

// BUSQUEDA POR OC
//===================================
Router.get("/oc/:id", function(req, res) {
  Compra.findAll({
    include: [
      {
        model: OC,
        as: "OC",
        where: {
          id: req.params.id
        },
        attributes: []
      },
      {
        model: Product,
        as: "product"
      }
    ],
    attributes: []
  }).then(OC => {
    res.json(OC);
  });
});

Router.put("/update/:compraId", function(req, res) {
  Compra.update(
    { cantidad: req.body.nuevaCantidad },
    { where: { id: req.params.compraId } }
  ).then(() => res.send("cantidad actualizada!"));
});

Router.get(`/delete/:compraId`, function(req, res) {
  Compra.destroy({ where: { id: req.params.compraId } }).then(compra => {});
  res.send("producto eliminado");
});
Router.get("/empty/:userId", function(req, res) {
  OC.findOne({
    where: {
      userId: req.params.userId,
      estado: "carrito"
    }
  })
    .then(OC => {
      let OCid = OC.id;
      OC.destroy();
      OC.save();
      return OCid;
    })
    .then(OCid => Compra.destroy({ where: { OCId: OCid } }))
    .then(() => res.send("listo!"));
});

Router.get("/:id", function(req, res) {
  OC.findAll({
    where: {
      userId: req.params.id
    }
  }).then(compras => res.json(compras));
});
Router.get("/updatecarrito/:userId", function(req, res) {
  OC.findOne({
    where: {
      userId: req.params.userId,
      estado: "carrito"
    }
  }).then(compras => {
    res.json(compras);
  });
});

Router.post("/add/:userId", function(req, res) {
  OC.findOrCreate({
    where: {
      userId: req.params.userId,
      estado: "carrito"
    }
  })
    .then(result => {
      return Compra.findOrCreate({
        where: {
          productId: req.body.productId,
          OCId: result[0].id
        }
      });
    })
    .then(result => {
      if (!result[1]) {
        result[0].cantidad = result[0].cantidad + 1;
        result[0].save().then(() => {});
        res.send("listoo");
      } else {
        res.send("entro al else  tambmien listoo");
      }
    });
});
Router.patch("/status", function(req, res) {
  OC.update(
    { estado: req.body.newStatus },
    { where: { id: req.body.OCid } }
  ).then(() => res.send(200));
});

Router.patch("/status/:userId", function(req, res) {
  OC.findOne({
    where: {
      userId: req.params.userId,
      estado: "carrito"
    }
  }).then(oc => {
    if (oc) {
      oc.estado = req.body.newStatus;
      oc.save().then(() => {
        res.send("listoo");
      });
    } else res.send("listoo");
  });
});
//Ejemplo de find or create
// User
//   .findOrCreate({where: {username: 'sdepold'}, defaults: {job: 'Technical Lead JavaScript'}})
//   .then(([user, created]) => {
//     console.log(user.get({
//       plain: true
//     }))
//     console.log(created)

module.exports = Router;

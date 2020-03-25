const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");

routes.post("/ongs", OngController.store);
routes.get("/ongs", OngController.index);

module.exports = routes;

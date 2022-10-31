module.exports = app => {
  const visitante = require("../controllers/visitante.controller.js");

  var router = require("express").Router();

  //
  router.post("/", visitante.crear);
  //
  router.get("/", visitante.consultarTodos);
  router.get("/uid", visitante.obtenerUID);
  router.get("/:id", visitante.consultarPID);
  //
  router.put("/:id", visitante.actualizarPID);
  //
  router.delete("/:id", visitante.borrarPID);
    
  app.use('/api/visitante', router);
};

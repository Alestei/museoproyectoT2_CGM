module.exports = app => {
  const visita_guiada_salas = require("../controllers/visita_guiada_salas.controller.js");

  var router = require("express").Router();

  //
  router.post("/", visita_guiada_salas.crear);
  //
  router.get("/", visita_guiada_salas.consultarTodos);
  router.get("/:id", visita_guiada_salas.consultarPID);
  //
  router.put("/:id", visita_guiada_salas.actualizarPID);
  //
  router.delete("/:id", visita_guiada_salas.borrarPID);
    
  app.use('/api/visita_guiada_salas', router);
};

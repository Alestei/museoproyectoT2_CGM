module.exports = app => {
  const visita_guiada_visitante = require("../controllers/visita_guiada_visitante.controller.js");

  var router = require("express").Router();

  //
  router.post("/", visita_guiada_visitante.crear);
  //
  router.get("/", visita_guiada_visitante.consultarTodos);
  router.get("/:id", visita_guiada_visitante.consultarPID);
  //
  router.put("/:id", visita_guiada_visitante.actualizarPID);
  //
  router.delete("/:id", visita_guiada_visitante.borrarPID);
    
  app.use('/api/visita_guiada_visitante', router);
};

module.exports = app => {
  const visita_guiada = require("../controllers/visita_guiada.controller.js");

  var router = require("express").Router();

  //
  router.post("/", visita_guiada.crear);
  //
  router.get("/", visita_guiada.consultarTodos);
  router.get("/uid", visita_guiada.obtenerUID);
  router.get("/:id", visita_guiada.consultarPID);
  //
  router.put("/:id", visita_guiada.actualizarPID);
  //
  router.delete("/:id", visita_guiada.borrarPID);
    
  app.use('/api/visita_guiada', router);
};

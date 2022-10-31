module.exports = app => {
  const visita_guiada_idioma = require("../controllers/visita_guiada_idioma.controller.js");

  var router = require("express").Router();

  //
  router.post("/", visita_guiada_idioma.crear);
  //
  router.get("/", visita_guiada_idioma.consultarTodos);
  router.get("/:id", visita_guiada_idioma.consultarPID);
  //
  router.put("/:id", visita_guiada_idioma.actualizarPID);
  //
  router.delete("/:id", visita_guiada_idioma.borrarPID);
    
  app.use('/api/visita_guiada_idioma', router);
};

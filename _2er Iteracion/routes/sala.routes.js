module.exports = app => {
  const sala = require("../controllers/sala.controller.js");

  var router = require("express").Router();

  //
  router.post("/", sala.crear);
  //
  router.get("/", sala.consultarTodos);
  router.get("/:id", sala.consultarPID);
  //
  router.put("/:id", sala.actualizarPID);
  //
  router.delete("/:id", sala.borrarPID);
    
  app.use('/api/sala', router);
};

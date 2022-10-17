module.exports = app => {
    const guia = require("../controllers/guia.controller.js");
  
    var router = require("express").Router();
  
    //
    router.post("/", guia.crear);
    //
    router.get("/", guia.consultarTodos);
    router.get("/uid", guia.obtenerUID);
    router.get("/:id", guia.consultarPID);
    //
    router.put("/:id", guia.actualizarPID);
    //
    router.delete("/:id", guia.borrarPID);
      
    app.use('/api/guia', router);
  };
  
module.exports = app => {
    const guiaIdioma = require("../controllers/guia_idioma.controller.js");
  
    var router = require("express").Router();
  
    //
    router.post("/", guiaIdioma.crear);
    //
    router.get("/", guiaIdioma.consultarTodos);
    router.get("/lang/:id", guiaIdioma.consultarIPID);
    router.get("/:id", guiaIdioma.consultarPID);
    //
    router.put("/:id", guiaIdioma.actualizarPID);
    router.put("/pidg/:idi/:idg", guiaIdioma.actualizarPIDG);
    //
    router.delete("/:id", guiaIdioma.borrarPID);
    router.delete("/pidi/:idi/:idg", guiaIdioma.borrarPIDI);

    app.use('/api/guia_idioma', router);
  };
  
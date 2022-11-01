module.exports = app => {
    const idioma = require("../controllers/idioma.controller.js");
  
    var router = require("express").Router();
  

    router.get("/", idioma.consultarTodos);
    router.get("/:id", idioma.consultarPID);

    app.use('/api/idioma', router);
  };
  
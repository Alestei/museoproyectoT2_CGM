const idioma = require("../models/idioma.model.js");


exports.consultarTodos = (req,res) => {
    idioma.consultarTodos( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la consulta."
      });
      else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))

    });
};

exports.consultarPID = (req,res, id) => {
  idioma.consultarPID(id, (err, data) => {
  if (err)
    res.status(500).send({
      message:
        err.message || "Error en la consulta."
    });
    else
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(data))
  });
};



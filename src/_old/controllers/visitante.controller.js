const Visitante = require("../models/visitante.model.js");

exports.crear = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacío"
    });
  }

  // Crear 
  const visitante = new Visitante({
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    correo : req.body.correo
  });

 
  Visitante.crear(visitante, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error al crear registro."
      });
    else res.send(data);
  });

};

exports.consultarTodos = (req,res) => {
    Visitante.consultarTodos( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la consulta."
      });
      else res.send(data);
    });
};

exports.obtenerUID = (req,res) => {
  Visitante.obtenerUID((err, data) => {
  if (err)
    res.status(500).send({
      message:
        err.message || "Error en la consulta."
    });
    else res.send(data);
  });
};

exports.consultarPID = (req,res) => {
    Visitante.consultarPID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la consulta."
      });
      else res.send(data);
    });
};


exports.actualizarPID = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacío"
    });
  }

  // Nuevos datos 
  const visitante = new Visitante({
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    correo : req.body.correo
  });

 
  Visitante.actualizarPID(req.params.id, visitante, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la actualización del registro con ID " + req.params.id
      });
    else res.send(data);
  });

};

exports.borrarPID = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacío"
    });
  }

 
  Visitante.borrarPID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data);
  });

};
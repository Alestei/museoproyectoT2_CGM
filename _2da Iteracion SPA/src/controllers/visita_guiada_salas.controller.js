const Visita_Guiada_Salas = require("../models/visita_guiada_salas.model.js");

exports.crear = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacío"
    });
  }

  // Crear 
  const visita_guiada_salas = new Visita_Guiada_Salas({
    ID_VG : req.body.ID_VG,
    ID_sala : req.body.ID_sala
  });

 
  Visita_Guiada_Salas.crear(visita_guiada_salas, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error al crear registro."
      });
    else res.send(data);
  });

};

exports.consultarTodos = (req,res) => {
  Visita_Guiada_Salas.consultarTodos( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la consulta."
      });
      else res.send(data);
    });
};

exports.consultarPID = (req,res) => {
  Visita_Guiada_Salas.consultarPID(req.params.id, (err, data) => {
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
  const visita_guiada_salas = new Visita_Guiada_Salas({
    ID_VG : req.body.ID_VG,
    ID_sala : req.body.ID_sala
  });

 
  Visita_Guiada_Salas.actualizarPID(req.params.id, visita_guiada_salas, (err, data) => {
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

 
  Visita_Guiada_Salas.borrarPID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data);
  });

};
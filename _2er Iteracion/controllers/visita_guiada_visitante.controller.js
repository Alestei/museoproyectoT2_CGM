const Visita_Guiada_Visitante = require("../models/visita_guiada_visitante.model.js");

exports.crear = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacío"
    });
  }

  // Crear 
  const visita_guiada_visitante = new Visita_Guiada_Visitante({
    ID_VG : req.body.ID_VG,
    ID_visitante : req.body.ID_visitante
  });

 
  Visita_Guiada_Visitante.crear(visita_guiada_visitante, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error al crear registro."
      });
    else res.send(data);
  });

};

exports.consultarTodos = (req,res) => {
  Visita_Guiada_Visitante.consultarTodos( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la consulta."
      });
      else res.send(data);
    });
};

exports.consultarPID = (req,res) => {
  Visita_Guiada_Visitante.consultarPID(req.params.id, (err, data) => {
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
  const visita_guiada_visitante = new Visita_Guiada_Visitante({
    ID_VG : req.body.ID_VG,
    ID_visitante : req.body.ID_visitante
  });


 
  Visita_Guiada_Visitante.actualizarPID(req.params.id, visita_guiada_visitante, (err, data) => {
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

 
  Visita_Guiada_Visitante.borrarPID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data);
  });

};
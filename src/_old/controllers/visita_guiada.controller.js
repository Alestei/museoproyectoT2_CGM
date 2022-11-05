const Visita_Guiada = require("../models/visita_guiada.model.js");

exports.crear = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacío"
    });
  }

  // Crear 
  const visita_guiada = new Visita_Guiada({
    nombreVisita: req.body.nombreVisita,
    FHora : req.body.FHora,
    ID_guia : req.body.ID_guia
  });

 
  Visita_Guiada.crear(visita_guiada, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error al crear registro."
      });
    else res.send(data);
  });

};

exports.consultarTodos = (req,res) => {
  Visita_Guiada.consultarTodos( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la consulta."
      });
      else res.send(data);
    });
};

exports.consultarPID = (req,res) => {
  Visita_Guiada.consultarPID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la consulta."
      });
      else res.send(data);
    });
};

exports.obtenerUID = (req,res) => {
  Visita_Guiada.obtenerUID((err, data) => {
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
  const visita_guiada = new Visita_Guiada({
    nombreVisita: req.body.nombreVisita,
    FHora : req.body.FHora,
    ID_guia : req.body.ID_guia
  });


 
  Visita_Guiada.actualizarPID(req.params.id, visita_guiada, (err, data) => {
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

 
  Visita_Guiada.borrarPID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data);
  });

};
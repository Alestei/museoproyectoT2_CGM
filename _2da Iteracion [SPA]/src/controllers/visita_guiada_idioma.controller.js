const Visita_Guiada_Idioma = require("../models/visita_guiada_idioma.model.js");

exports.crear = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacío"
    });
  }

  // Crear 
  const visita_guiada_idioma = new Visita_Guiada_Idioma({
    ID_VG : req.body.ID_VG,
    ID_idioma : req.body.ID_idioma
  });

 
  Visita_Guiada_Idioma.crear(visita_guiada_idioma, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error al crear registro."
      });
    else res.send(data);
  });

};

exports.consultarTodos = (req,res) => {
  Visita_Guiada_Idioma.consultarTodos( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la consulta."
      });
      else res.send(data);
    });
};

exports.consultarPID = (req,res) => {
  Visita_Guiada_Idioma.consultarPID(req.params.id, (err, data) => {
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
  const visita_guiada_idioma = new Visita_Guiada_Idioma({
    ID_VG : req.body.ID_VG,
    ID_idioma : req.body.ID_idioma
  });

 
  Visita_Guiada_Idioma.actualizarPID(req.params.id, visita_guiada_idioma, (err, data) => {
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

 
  Visita_Guiada_Idioma.borrarPID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data);
  });

};
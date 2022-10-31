const GuiaIdioma = require("../models/guia_idioma.model.js");

exports.crear = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacío"
    });
  }

  // Crear 
  const guiaIdioma = new GuiaIdioma({
    ID_guia : req.body.ID_guia,
    ID_idioma : req.body.ID_idioma,
  });

 
GuiaIdioma.crear(guiaIdioma, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error al crear registro."
      });
    else res.send(data);
  });

};

exports.consultarTodos = (req,res) => {
    GuiaIdioma.consultarTodos( (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la consulta."
      });
      else res.send(data);
    });
};

exports.consultarPID = (req,res) => {
    GuiaIdioma.consultarPID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la consulta."
      });
      else res.send(data);
    });
};

exports.consultarIPID = (req,res) => {
  GuiaIdioma.consultarIPID(req.params.id, (err, data) => {
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
  const guiaIdioma = new GuiaIdioma({
    ID_guia : req.body.ID_guia,
    ID_idioma : req.body.ID_idioma,

  });

 
  GuiaIdioma.actualizarPID(req.params.id, guiaIdioma, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error en la actualización del registro con ID " + req.params.id
      });
    else res.send(data);
  });

};

exports.actualizarPIDG = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacío"
    });
  }

  // Nuevos datos 
  const guiaIdioma = new GuiaIdioma({
    ID_guia : req.body.ID_guia,
    ID_idioma : req.body.ID_idioma,

  });

 
  GuiaIdioma.actualizarPIDG(req.params.idi, req.params.idg, guiaIdioma, (err, data) => {
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

 
  GuiaIdioma.borrarPID(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data);
  });

};

exports.borrarPIDI = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacío"
    });
  }

 
  GuiaIdioma.borrarPIDI(req.params.idi, req.params.idg, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data);
  });

};
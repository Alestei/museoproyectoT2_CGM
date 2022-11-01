const GuiaIdioma = require("../models/guia_idioma.model.js");
const {getPostData} = require('../utils/utils')

exports.crear = async (req, res) => {
  try {
    const body =  await getPostData(req); 
    const {ID_guia, ID_idioma} = JSON.parse(body); 
    const guiaIdioma = new GuiaIdioma({
      ID_guia,
      ID_idioma
    });
    
    GuiaIdioma.crear(guiaIdioma, (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(data))
    });

} catch (error) {
    console.log(error)
}


};

exports.consultarTodos = (req,res) => {
    GuiaIdioma.consultarTodos( (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(data))
    });
};

exports.consultarPID = (req,res, id) => {
    GuiaIdioma.consultarPID(id, (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(data))
    });
};

exports.consultarIPID = (req,res, id) => {
  GuiaIdioma.consultarIPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
  });
};

exports.actualizarPID = async (req, res, id) => {
  try {
    const body =  await getPostData(req); 
    const {ID_guia, ID_idioma} = JSON.parse(body); 

    const guiaIdioma = new GuiaIdioma({
      ID_guia,
      ID_idioma
    });
    
  GuiaIdioma.actualizarPID(id, guiaIdioma, (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(data))
    });

} catch (error) {
    console.log(error)
}

};

exports.actualizarPIDG = async (req, res, idi, idg) => {
  try {
    const body =  await getPostData(req); 
    const {ID_guia, ID_idioma} = JSON.parse(body); 

    const guiaIdioma = new GuiaIdioma({
      ID_guia,
      ID_idioma
    });
    
    GuiaIdioma.actualizarPIDG(idi, idg, guiaIdioma, (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(data))
    });

} catch (error) {
    console.log(error)
}

};


exports.borrarPID = (req, res, id) => {
 
  GuiaIdioma.borrarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
  });

};

exports.borrarPIDI = (req, res, idi, idg) => {

  GuiaIdioma.borrarPIDI(idi, idg, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
  });

};
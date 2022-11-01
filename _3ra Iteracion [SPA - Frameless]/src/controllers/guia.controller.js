const Guia = require("../models/guia.model.js");
const {getPostData} = require('../utils/utils')

exports.crear = async (req, res) => {
  try {
    const body =  await getPostData(req); 
    const {nombre, apellido} = JSON.parse(body); 
    const guia = new Guia({
      nombre,
      apellido
    });
    
    Guia.crear(guia, (err, data) => {
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
    Guia.consultarTodos( (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(data))
    });
};

exports.obtenerUID = (req,res) => {
  Guia.obtenerUID((err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
  });
};

exports.consultarPID = (req,res,id) => {
    Guia.consultarPID(id, (err, data) => {
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
    const {nombre, apellido} = JSON.parse(body); 
    const guia = new Guia({
      nombre,
      apellido
    });
    
    Guia.actualizarPID(id, guia, (err, data) => {
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

  Guia.borrarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
  });

};
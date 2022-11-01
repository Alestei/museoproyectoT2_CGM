const Visitante = require("../models/visitante.model.js");
const {getPostData} = require('../utils/utils')

exports.crear =  async (req, res) => {
    try {
        const body =  await getPostData(req); 
        const {nombre, apellido, correo} = JSON.parse(body); 
        const visitante = new Visitante({
            nombre,
            apellido,
            correo
        });
        
    Visitante.crear(visitante, (err, data) => {
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
    Visitante.consultarTodos( (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(data))
    });
};

exports.obtenerUID = (req,res) => {
  Visitante.obtenerUID((err, data) => {
  if (err){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(err))
  }else 
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(data))
  });
};

exports.consultarPID = (req,res,id) => {
    Visitante.consultarPID(id, (err, data) => {
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
    const {nombre, apellido, correo} = JSON.parse(body); 
    
    const visitante = new Visitante({
        nombre,
        apellido,
        correo
    });
    
    Visitante.actualizarPID(id, visitante, (err, data) => {
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
  Visitante.borrarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
  }else 
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(data))
  });

};
const Sala = require("../models/sala.model.js");
const {getPostData} = require('../utils/utils')

exports.crear = async (req, res) => {
  try {
    const body =  await req.body;  
    const {nombre_sala} = JSON.parse(body); 
    const sala = new Sala({
      nombre_sala
    });
    
    Sala.crear(sala, (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
           res.end(JSON.stringify(data, null, '  '))
    });

} catch (error) {
    console.log(error)
}


};

exports.consultarTodos = (req,res) => {
  Sala.consultarTodos( (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });
};

exports.obtenerUID = (req,res) => {
  Sala.obtenerUID((err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });
};

exports.consultarPID = (req,res, id) => {
  Sala.consultarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });
};


exports.actualizarPID = async (req, res, id) => {
  try {
    const body =  await req.body;  
    const {nombre_sala} = JSON.parse(body); 
    const sala = new Sala({
      nombre_sala
    });
    
    Sala.actualizarPID(id, sala, (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
           res.end(JSON.stringify(data, null, '  '))
    });

} catch (error) {
    console.log(error)
}


};

exports.borrarPID = (req, res, id) => {


  Sala.borrarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });

};
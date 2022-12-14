const Guia = require("../models/guia.model.js");

exports.crear = async (req, res) => {
  try {
    const body =  await req.body;  
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
          res.end(JSON.stringify(data, null, '  '))
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
          res.end(JSON.stringify(data, null, '  '))
    });
};

exports.obtenerUID = (req,res) => {
  Guia.obtenerUID((err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data, null, '  '))
  });
};

exports.consultarPID = (req,res,id) => {
    Guia.consultarPID(id, (err, data) => {
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
          res.end(JSON.stringify(data, null, '  '))
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
        res.end(JSON.stringify(data, null, '  '))
  });

};
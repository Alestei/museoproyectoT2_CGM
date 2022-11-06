const Visita_Guiada = require("../models/visita_guiada.model.js");

exports.crear = async (req, res) => {
  try {
    const body =  await req.body;  
    const {nombreVisita, FHora, ID_guia} = JSON.parse(body); 
    const visita_guiada = new Visita_Guiada({
      nombreVisita,
      FHora,
      ID_guia,
    });
    
 
    Visita_Guiada.crear(visita_guiada, (err, data) => {
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
  Visita_Guiada.consultarTodos( (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });
};

exports.consultarPID = (req,res, id) => {
  Visita_Guiada.consultarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });
};

exports.obtenerUID = (req,res) => {
  Visita_Guiada.obtenerUID((err, data) => {
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
    const {nombreVisita, FHora, ID_guia} = JSON.parse(body); 
    const visita_guiada = new Visita_Guiada({
      nombreVisita,
      FHora,
      ID_guia,
    });
    
 
    Visita_Guiada.actualizarPID(id, visita_guiada, (err, data) => {
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

  Visita_Guiada.borrarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });

};
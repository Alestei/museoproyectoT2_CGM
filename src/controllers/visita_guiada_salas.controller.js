const Visita_Guiada_Salas = require("../models/visita_guiada_salas.model.js");

exports.crear = async (req, res) => {
  try {
    const body =  await req.body;  
    const {ID_VG, ID_sala} = JSON.parse(body); 

    const visita_guiada_salas = new Visita_Guiada_Salas({
      ID_VG ,
      ID_sala
    });
  
  
 
    Visita_Guiada_Salas.crear(visita_guiada_salas, (err, data) => {
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
  Visita_Guiada_Salas.consultarTodos( (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });
};

exports.consultarPID = (req,res, id) => {
  Visita_Guiada_Salas.consultarPID(id, (err, data) => {
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
    const {ID_VG, ID_sala} = JSON.parse(body); 

    const visita_guiada_salas = new Visita_Guiada_Salas({
      ID_VG,
      ID_sala
    });
    
 
 
    Visita_Guiada_Salas.actualizarPID(id, visita_guiada_salas, (err, data) => {
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

 
  Visita_Guiada_Salas.borrarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });

};
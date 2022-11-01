const Visita_Guiada_Visitante = require("../models/visita_guiada_visitante.model.js");
const {getPostData} = require('../utils/utils')

exports.crear = async (req, res) => {
  try {
    const body =  await getPostData(req); 
    const {ID_VG, ID_visitante} = JSON.parse(body); 

    const visita_guiada_visitante = new Visita_Guiada_Visitante({
      ID_VG,
      ID_visitante
    });
    
 
    Visita_Guiada_Visitante.crear(visita_guiada_visitante, (err, data) => {
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
  Visita_Guiada_Visitante.consultarTodos( (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });
};

exports.consultarPID = (req,res, id) => {
  Visita_Guiada_Visitante.consultarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });
};


exports.actualizarPID = async (req, res) => {
  try {
    const body =  await getPostData(req); 
    const {ID_VG, ID_visitante} = JSON.parse(body); 

    const visita_guiada_visitante = new Visita_Guiada_Visitante({
      ID_VG,
      ID_visitante
    });
  
 
    Visita_Guiada_Visitante.actualizarPID(id, visita_guiada_visitante, (err, data) => {
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
  Visita_Guiada_Visitante.borrarPID(id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred"
      });
    else res.send(data);
  });

};
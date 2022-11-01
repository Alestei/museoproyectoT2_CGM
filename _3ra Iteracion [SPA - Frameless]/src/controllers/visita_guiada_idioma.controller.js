const Visita_Guiada_Idioma = require("../models/visita_guiada_idioma.model.js");
const {getPostData} = require('../utils/utils')

exports.crear = async (req, res) => {
  try {
    const body =  await getPostData(req); 
    const {ID_VG, ID_idioma} = JSON.parse(body); 
    
    const visita_guiada_idioma = new Visita_Guiada_Idioma({
      ID_VG,
      ID_idioma
    });
    
 
    Visita_Guiada_Idioma.crear(visita_guiada_idioma, (err, data) => {
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
  Visita_Guiada_Idioma.consultarTodos( (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });
};

exports.consultarPID = (req,res, id) => {
  Visita_Guiada_Idioma.consultarPID(id, (err, data) => {
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
    const body =  await getPostData(req); 
    const {ID_VG, ID_idioma} = JSON.parse(body); 
    
    const visita_guiada_idioma = new Visita_Guiada_Idioma({
      ID_VG,
      ID_idioma
    });
    
 
    Visita_Guiada_Idioma.actualizarPID(id, visita_guiada_idioma, (err, data) => {
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

exports.borrarPID = (req, res , id) => {

  Visita_Guiada_Idioma.borrarPID(req.params.id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
         res.end(JSON.stringify(data, null, '  '))
  });
};

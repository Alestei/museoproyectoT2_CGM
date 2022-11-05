const GuiaIdioma = require("../models/guia_idioma.model.js");

exports.crear = async (req, res) => {
  try {
    const body =  await req.body;  
    console.log('GUIAIDIOMA' + '-> ' + JSON.parse(body))
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
          res.end(JSON.stringify(data, null, '  '))
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
          res.end(JSON.stringify(data, null, '  '))
    });
};

exports.consultarPID = (req,res, id) => {
    GuiaIdioma.consultarPID(id, (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(data, null, '  '))
    });
};

exports.consultarIPID = (req,res, id) => {
  GuiaIdioma.consultarIPID(id, (err, data) => {
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
          res.end(JSON.stringify(data, null, '  '))
    });

} catch (error) {
    console.log(error)
}

};

exports.actualizarPIDG = async (req, res, idi, idg) => {
  try {
    const body =  await req.body;  
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
          res.end(JSON.stringify(data, null, '  '))
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
        res.end(JSON.stringify(data, null, '  '))
  });

};

exports.borrarPIDI = (req, res, idi, idg) => {

  GuiaIdioma.borrarPIDI(idi, idg, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data, null, '  '))
  });

};
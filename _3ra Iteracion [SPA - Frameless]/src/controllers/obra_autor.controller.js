const Obra_autor = require("../models/obra_autor.model.js");

exports.crear = async (req, res) => {
  try {
    const body =  await req.body;  
    const {obraAutor} = JSON.parse(body); 
    const obra_autor = new Obra_autor({
      obraAutor
    });
    
    Obra_autor.crear(obra_autor, (err, data) => {
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
    Obra_autor.consultarTodos( (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(data, null, '  '))
    });
};

exports.obtenerUID = (req,res) => {
  Obra_autor.obtenerUID((err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data, null, '  '))
  });
};

exports.consultarPID = (req,res,id) => {
    Obra_autor.consultarPID(id, (err, data) => {
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
    const {obraAutor} = JSON.parse(body); 
    const obra_autor = new Obra_autor({
      obraAutor
    });
    
    Obra_autor.actualizarPID(id, obra_autor, (err, data) => {
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

  Obra_autor.borrarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data, null, '  '))
  });

};
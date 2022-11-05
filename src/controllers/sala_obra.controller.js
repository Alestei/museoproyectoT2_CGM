const Sala_obra = require("../models/sala_obra.model.js");

exports.crear = async (req, res) => {
  try {
    const body =  await req.body;  
    const {ID_obra, ID_sala} = JSON.parse(body); 
    const sala_obra = new Sala_obra({
      ID_obra,
      ID_sala
    });
    
    Sala_obra.crear(sala_obra, (err, data) => {
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
    Sala_obra.consultarTodos( (err, data) => {
      if (err){
        res.writeHead(400, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(err))
       }else 
          res.writeHead(200, {'Content-Type': 'application/json'})
          res.end(JSON.stringify(data, null, '  '))
    });
};

exports.obtenerUID = (req,res) => {
  Sala_obra.obtenerUID((err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data, null, '  '))
  });
};

exports.consultarPID = (req,res,id) => {
    Sala_obra.consultarPID(id, (err, data) => {
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
    const {ID_obra, ID_sala} = JSON.parse(body); 
    const sala_obra = new Sala_obra({
      ID_obra,
      ID_sala
    });
    
    Sala_obra.actualizarPID(id, sala_obra, (err, data) => {
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

  Sala_obra.borrarPID(id, (err, data) => {
    if (err){
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(err))
     }else 
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data, null, '  '))
  });

};
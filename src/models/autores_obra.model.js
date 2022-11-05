const sql = require("./db.js");

// constructor
const autores_obra = function(Autores_obra) {
    this.ID_obra = Autores_obra.ID_obra;
    this.ID_obraAutor = Autores_obra.ID_obraAutor;
};

//
autores_obra.crear = (newAutores_obra, result) => {
  sql.query("INSERT INTO autores_obra SET ?", newAutores_obra, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Registro en la Tabla Creado: ", { id: res.insertId, ...newGuia });
    result(null, { id: res.insertId, ...newGuia });
  });
};
//
autores_obra.obtenerUID = (result) => {
  sql.query("SELECT * FROM autores_obra ORDER BY ID_obra DESC LIMIT 1; ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    console.log("Registros Obtenidos ", res);
    result(null, res);
  });
};
//
autores_obra.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM autores_obra WHERE ID_obra = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Registros Obtenidos ", res);
    result(null, res);
  });
};
//
autores_obra.consultarTodos =  result => {
  sql.query("SELECT * FROM autores_obra", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Registros Obtenidos ", res);
    result(null, res);
  });
};
//
autores_obra.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE autores_obra SET ID_obra = ?, ID_obraAutor = ? WHERE ID_obra = ?", 
  [newData.ID_obra, newData.ID_obraAutor, id], (err, res) => {
    if(err){
      console.log("error: ", err);
      result(err, null);
      return;
    }else{
      console.log("Registro actualizado -> ", {id: res.insertId, ...newData})
      result(null,{id: res.insertId, ...newData} );
    }
  });

};
//
autores_obra.borrarPID = (id,result) => {
  sql.query("DELETE FROM autores_obra WHERE ID_obra = ?", 
  [id], (err, res) => {
    if(err){
      console.log("error: ", err);
      result(err, null);
      return;
    }else{
      console.log("Registro Eliminado. -> ", {id: id})
      result(null, {id: id} );
    }
  });

};
module.exports = autores_obra;
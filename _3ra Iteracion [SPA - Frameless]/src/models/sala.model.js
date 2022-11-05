const sql = require("./db.js");

// constructor
const Sala = function(sala) {
    this.nombre_sala = sala.nombre_sala;
};

//
Sala.crear = (newSala, result) => {
  sql.query("INSERT INTO sala SET ?", newSala, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Registro en la Tabla sala Creado: ", { id: res.insertId, ...newSala });
    result(null, { id: res.insertId, ...newSala });
  });
};
//
Sala.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM sala WHERE ID_sala = ?", [id], (err, res) => {
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
Sala.consultarTodos =  result => {
  sql.query("SELECT * FROM sala", (err, res) => {
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
Sala.obtenerUID = (result) => {
  sql.query("SELECT ID_sala FROM sala ORDER BY ID_sala DESC LIMIT 1; ", (err, res) => {
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
Sala.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE sala SET nombre_sala = ? WHERE ID_sala = ?", 
  [newData.nombre_sala, id], (err, res) => {
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
Sala.borrarPID = (id,result) => {
  sql.query("DELETE FROM sala WHERE ID_sala = ?", 
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
module.exports = Sala;
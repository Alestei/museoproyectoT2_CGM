const sql = require("./db.js");

// constructor
const Sala_obra = function(sala_obra) {
    this.ID_sala = sala_obra.ID_sala;
    this.ID_obra = sala_obra.ID_obra;
};

//
Sala_obra.crear = (newSalaObra, result) => {
  sql.query("INSERT INTO sala_obra SET ?", newSalaObra, (err, res) => {
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
Sala_obra.obtenerUID = (result) => {
  sql.query("SELECT * FROM sala_obra ORDER BY ID_obra DESC LIMIT 1; ", (err, res) => {
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
Sala_obra.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM sala_obra WHERE ID_obra = ?", [id], (err, res) => {
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
Sala_obra.consultarTodos =  result => {
  sql.query("SELECT * FROM sala_obra", (err, res) => {
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
Sala_obra.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE sala_obra SET ID_obra = ? WHERE ID_sala = ?", 
  [newData.ID_obra, id], (err, res) => {
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
Sala_obra.borrarPID = (id,result) => {
  sql.query("DELETE FROM sala_obra WHERE ID_obra = ?", 
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
module.exports = Sala_obra;
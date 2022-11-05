const sql = require("./db.js");

// constructor
const Obra = function(obra) {
    this.nombreObra = obra.nombreObra;
};

//
Obra.crear = (newObra, result) => {
  sql.query("INSERT INTO obra SET ?", newObra, (err, res) => {
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
Obra.obtenerUID = (result) => {
  sql.query("SELECT ID_obra FROM obra ORDER BY ID_obra DESC LIMIT 1; ", (err, res) => {
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
Obra.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM obra WHERE ID_obra = ?", [id], (err, res) => {
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
Obra.consultarTodos =  result => {
  sql.query("SELECT * FROM obra", (err, res) => {
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
Obra.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE obra SET nombreObra = ? WHERE ID_obra = ?", 
  [newData.nombreObra, id], (err, res) => {
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
Obra.borrarPID = (id,result) => {
  sql.query("DELETE FROM obra WHERE ID_obra = ?", 
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
module.exports = Obra;
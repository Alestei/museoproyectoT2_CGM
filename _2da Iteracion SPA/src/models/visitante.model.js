const sql = require("./db.js");

// constructor
const Visitante = function(visitante) {
    this.nombre = visitante.nombre;
    this.apellido = visitante.apellido;
    this.correo = visitante.correo;
};

//
Visitante.crear = (newVisitante, result) => {
  sql.query("INSERT INTO visitante SET ?", newVisitante, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Registro en la Tabla Visitante Creado: ", { id: res.insertId, ...newVisitante });
    result(null, { id: res.insertId, ...newVisitante });
  });
};
//
Visitante.obtenerUID = (result) => {
  sql.query("SELECT ID_VISITANTE FROM visitante ORDER BY ID_VISITANTE DESC LIMIT 1;", (err, res) => {
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
Visitante.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM VISITANTE WHERE ID_VISITANTE = ?", [id], (err, res) => {
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
Visitante.consultarTodos =  result => {
  sql.query("SELECT * FROM visitante", (err, res) => {
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
Visitante.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE visitante SET nombre = ?, apellido = ?, correo = ? WHERE ID_VISITANTE = ?", 
  [newData.nombre, newData.apellido, newData.correo, id], (err, res) => {
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
Visitante.borrarPID = (id,result) => {
  sql.query("DELETE FROM visitante WHERE ID_VISITANTE = ?", 
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
module.exports = Visitante;
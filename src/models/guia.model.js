const sql = require("./db.js");

// constructor
const Guia = function(guia) {
    this.nombre = guia.nombre;
    this.apellido = guia.apellido;
};

//
Guia.crear = (newGuia, result) => {
  sql.query("INSERT INTO guia SET ?", newGuia, (err, res) => {
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
Guia.obtenerUID = (result) => {
  sql.query("SELECT ID_Guia FROM guia ORDER BY ID_Guia DESC LIMIT 1; ", (err, res) => {
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
Guia.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM guia WHERE ID_GUIA = ?", [id], (err, res) => {
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
Guia.consultarTodos =  result => {
  sql.query("SELECT * FROM guia", (err, res) => {
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
Guia.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE guia SET nombre = ?, apellido = ? WHERE ID_Guia = ?", 
  [newData.nombre, newData.apellido, id], (err, res) => {
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
Guia.borrarPID = (id,result) => {
  sql.query("DELETE FROM guia WHERE ID_GUIA = ?", 
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
module.exports = Guia;
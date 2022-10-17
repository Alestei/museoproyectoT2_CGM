const sql = require("./db.js");

// constructor
const Visita_Guiada_Salas = function(visita_guiada_salas) {
    this.ID_VG = visita_guiada_salas.ID_VG,
    this.ID_sala = visita_guiada_salas.ID_sala
};

//
Visita_Guiada_Salas.crear = (newVisGuiada, result) => {
  sql.query("INSERT INTO visita_guiada_salas SET ?", newVisGuiada, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Registro en la Tabla visita_guiada_salas Creado: ", { id: res.insertId, ...newVisGuiada });
    result(null, { id: res.insertId, ...newVisGuiada });
  });
};
//
Visita_Guiada_Salas.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM visita_guiada_salas WHERE ID_VG = ?", [id], (err, res) => {
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
Visita_Guiada_Salas.consultarTodos =  result => {
  sql.query("SELECT * FROM visita_guiada_salas", (err, res) => {
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
Visita_Guiada_Salas.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE visita_guiada_salas SET ID_sala = ? WHERE ID_VG = ?", 
  [ ewData.ID_sala, id], (err, res) => {
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
Visita_Guiada_Salas.borrarPID = (id,result) => {
  sql.query("DELETE FROM visita_guiada_salas WHERE ID_VG = ?", 
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
module.exports = Visita_Guiada_Salas;
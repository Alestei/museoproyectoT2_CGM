const sql = require("./db.js");

// constructor
const Visita_Guiada_Visitante = function(visita_guiada_visitante) {
    this.ID_VG = visita_guiada_visitante.ID_VG;
    this.ID_visitante = visita_guiada_visitante.ID_visitante;
};

//
Visita_Guiada_Visitante.crear = (newVisGuiada, result) => {
  sql.query("INSERT INTO visita_guiada_visitante SET ?", newVisGuiada, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Registro en la Tabla visita_guiada_visitante Creado: ", { id: res.insertId, ...newVisGuiada });
    result(null, { id: res.insertId, ...newVisGuiada });
  });
};
//
Visita_Guiada_Visitante.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM visita_guiada_visitante WHERE ID_VG = ?", [id], (err, res) => {
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
Visita_Guiada_Visitante.consultarTodos =  result => {
  sql.query("SELECT * FROM visita_guiada_visitante", (err, res) => {
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
Visita_Guiada_Visitante.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE visita_guiada_visitante  ID_visitante = ? WHERE ID_VG = ?", 
  [newData.ID_visitante, id], (err, res) => {
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
Visita_Guiada_Visitante.borrarPID = (id,result) => {
  sql.query("DELETE FROM visita_guiada_visitante WHERE ID_VG = ?", 
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
module.exports = Visita_Guiada_Visitante;
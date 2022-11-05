const sql = require("./db.js");

// constructor
const Visita_Guiada = function(visitaguiada) {
    this.nombreVisita = visitaguiada.nombreVisita;
    this.FHora = visitaguiada.FHora;
    this.ID_guia = visitaguiada.ID_guia;
};

//
Visita_Guiada.crear = (newVisGuiada, result) => {
  sql.query("INSERT INTO visita_guiada SET ?", newVisGuiada, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Registro en la Tabla visita_guiada Creado: ", { id: res.insertId, ...newVisGuiada });
    result(null, { id: res.insertId, ...newVisGuiada });
  });
};
//
Visita_Guiada.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM visita_guiada WHERE ID_VG = ?", [id], (err, res) => {
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
Visita_Guiada.obtenerUID = (result) => {
  sql.query("SELECT ID_VG FROM visita_guiada ORDER BY ID_VG DESC LIMIT 1;", (err, res) => {
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
Visita_Guiada.consultarTodos =  result => {
  sql.query("SELECT * FROM visita_guiada", (err, res) => {
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
Visita_Guiada.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE visita_guiada SET nombreVisita = ?, FHora = ?, ID_guia = ? WHERE ID_VG = ?", 
  [newData.nombreVisita, newData.FHora, newData.ID_guia, id], (err, res) => {
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
Visita_Guiada.borrarPID = (id,result) => {
  sql.query("DELETE FROM visita_guiada WHERE ID_VG = ?", 
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
module.exports = Visita_Guiada;
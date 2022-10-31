const sql = require("./db.js");

// constructor
const Visita_Guiada_Idioma = function(visita_guiada_idioma) {
    this.ID_VG = visita_guiada_idioma.ID_VG;
    this.ID_idioma = visita_guiada_idioma.ID_idioma;
};

//
Visita_Guiada_Idioma.crear = (newVisGuiada, result) => {
  sql.query("INSERT INTO visita_guiada_idioma SET ?", newVisGuiada, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Registro en la Tabla visita_guiada_idioma Creado: ", { id: res.insertId, ...newVisGuiada });
    result(null, { id: res.insertId, ...newVisGuiada });
  });
};
//
Visita_Guiada_Idioma.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM visita_guiada_idioma WHERE ID_VG = ?", [id], (err, res) => {
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
Visita_Guiada_Idioma.consultarTodos =  result => {
  sql.query("SELECT * FROM visita_guiada_idioma", (err, res) => {
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
Visita_Guiada_Idioma.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE visita_guiada_idioma SET ID_idioma = ? WHERE ID_VG = ?", 
  [newData.ID_idioma, id], (err, res) => {
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
Visita_Guiada_Idioma.borrarPID = (id,result) => {
  sql.query("DELETE FROM visita_guiada_idioma WHERE ID_VG = ?", 
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
module.exports = Visita_Guiada_Idioma;
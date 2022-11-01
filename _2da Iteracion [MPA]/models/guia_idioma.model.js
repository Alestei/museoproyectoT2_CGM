const sql = require("./db.js");

// constructor
const GuiaIdioma = function(guiaIdioma) {
    this.ID_idioma = guiaIdioma.ID_idioma;
    this.ID_guia = guiaIdioma.ID_guia;
    this.ultima_vez = guiaIdioma.ultima_vez;
};

//
GuiaIdioma.crear = (newGuia, result) => {
  sql.query("INSERT INTO guia_idioma SET ?", newGuia, (err, res) => {
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
GuiaIdioma.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM guia_idioma WHERE ID_GUIA = ?", [id], (err, res) => {
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
GuiaIdioma.consultarIPID =  (id,result) => {
  sql.query("SELECT ID_idioma FROM guia_idioma WHERE ID_GUIA = ?", [id], (err, res) => {
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
GuiaIdioma.consultarTodos =  result => {
  sql.query("SELECT * FROM guia_idioma", (err, res) => {
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
GuiaIdioma.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE guia_idioma SET ID_idioma = ?, ultima_vez = ?, WHERE ID_GUIA = ?", 
  [newData.ID_idioma, newData.ultima_vez, id], (err, res) => {
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
GuiaIdioma.actualizarPIDG = (idi, idg, newData, result) => {
  sql.query("UPDATE guia_idioma SET ID_idioma = ?, ultima_vez = ?, WHERE ID_idioma = ? AND ID_guia = ?;", 
  [newData.ID_idioma, newData.ultima_vez, idi, idg], (err, res) => {
    if(err){
      console.log("error: ", err);
      result(err, null);
      return;
    }else{
      console.log("Registro actualizado -> ", {idi: res.insertId, ...newData})
      result(null,{idi: res.insertId, ...newData} );
    }
  });

};
//
GuiaIdioma.borrarPID = (id,result) => {
  sql.query("DELETE FROM guia_idioma WHERE ID_guia = ?", 
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
//
GuiaIdioma.borrarPIDI = (idi,idg,result) => {
  sql.query("DELETE FROM guia_idioma WHERE ID_idioma = ? AND ID_guia = ?", 
  [idi, idg], (err, res) => {
    if(err){
      console.log("error: ", err);
      result(err, null);
      return;
    }else{
      console.log("Registro Eliminado. -> ", {idi: idi }, " de ", {idg: idg})
      result(null, {idi: idi }, " de ", {idg: idg} );
    }
  });

};
module.exports = GuiaIdioma;
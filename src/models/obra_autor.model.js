const sql = require("./db.js");

// constructor
const obra_autor = function(Obra_autor) {
    this.autorObra = Obra_autor.autorObra;
};

//
obra_autor.crear = (newObraAutor, result) => {
  sql.query("INSERT INTO obra_autor SET ?", newObraAutor, (err, res) => {
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
obra_autor.obtenerUID = (result) => {
  sql.query("SELECT ID_obraAutor FROM obra_autor ORDER BY ID_obraAutor DESC LIMIT 1; ", (err, res) => {
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
obra_autor.consultarPID =  (id,result) => {
  sql.query("SELECT * FROM obra_autor WHERE ID_obraAutor = ?", [id], (err, res) => {
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
obra_autor.consultarTodos =  result => {
  sql.query("SELECT * FROM obra_autor", (err, res) => {
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
obra_autor.actualizarPID = (id, newData, result) => {
  sql.query("UPDATE obra_autor SET autorObra = ? WHERE ID_obraAutor = ?", 
  [newData.autorObra, id], (err, res) => {
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
obra_autor.borrarPID = (id,result) => {
  sql.query("DELETE FROM obra_autor WHERE ID_obraAutor = ?", 
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
module.exports = obra_autor;
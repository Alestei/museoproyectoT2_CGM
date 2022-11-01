const sql = require("./db.js");

// constructor
const idioma = function(idioma) {
    this.id = idioma.id;

};

//
idioma.consultarTodos =  result => {
    sql.query("SELECT * FROM idioma", (err, res) => {
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
  idioma.consultarPID =  (id,result) => {
    sql.query("SELECT * FROM idioma WHERE ID_idioma = ?", [id], (err, res) => {
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
  module.exports = idioma;
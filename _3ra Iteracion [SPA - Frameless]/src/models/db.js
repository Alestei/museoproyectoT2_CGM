//
const mysql = require('mysql2')
//

const local = true;
const dbConfig = local ? require("../config/db.config.local.js") : require("../config/db.config")



const mysqlConnection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

mysqlConnection.connect(function (err){
    if(err){
        console.log('ERROR FATAL >>> ' + err.message + ' ||| Código de Error ' +err.code);
    }else{
        console.log(">>> Base de Datos Conectada.")
        console.log(">>> Te has conectado al servidor '" + dbConfig.HOST + "'")
        
    }

})

module.exports = mysqlConnection
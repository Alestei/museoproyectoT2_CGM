const mysql = require('mysql2')
const dbConfig = require("../config/db.config.local.js");

const mysqlConnection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
    }else{
        console.log("DB Conectada!")
    }

})

module.exports = mysqlConnection
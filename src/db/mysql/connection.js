const mysql = require('mysql');
const config = require("../config.js")

const connection = mysql.createConnection({
  host: config.json[0].hostName,
  user: config.json[0].userName,
  password: config.json[0].userPasword,
  database: config.json[0].dbName
});

module.exports = {
    connection
}
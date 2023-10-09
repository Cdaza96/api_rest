const mysql = require("mysql");
const fs = require("fs"),
  ini = require("ini");
const { error } = require("console");

var config = ini.parse(fs.readFileSync("system/config/config.ini", "utf-8"));

var con = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
});

con.connect((error) => {
  if (error) throw error;
  console.log("Database connect");
});

var apiConfig = config.api;

module.exports = {
  con,
  apiConfig,
};

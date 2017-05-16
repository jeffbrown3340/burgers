var mysql = require("mysql");

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
	port: 3306,
	host: "localhost",
	user: "root",
	password: "NotSecure3340",
	database: "burgers_db"
});

connection.connect();

module.exports = connection;
var mysql = require('mysql');
var connection=mysql.createPool({
  	host     : 'localhost',
	user     : 'kim',
	password : 'zy20131322',
	database : 'baidunews'
  });

module.exports = connection;  
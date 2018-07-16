const mysql = require('mysql');

// connect  ( docker run --name mysql --link mysql:mysql -d mysql ) || docker run mysql
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'mysql'
});

con.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});
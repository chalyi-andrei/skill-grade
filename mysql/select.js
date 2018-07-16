const mysql = require('mysql');

// connect  ( docker start mysql docker run --name mysql --link mysql:mysql -d mysql )
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'andrei'
});

con.connect(err => {
  if (err) throw err;
  console.log('Connected!');

  const sql = "SELECT * FROM skills";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("result", result);
  });

});
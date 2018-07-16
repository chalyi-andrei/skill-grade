const mysql = require('mysql');

// connect  ( docker run --name mysql --link mysql:mysql -d mysql )
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: 'andrei'
});

con.connect(err => {
  if (err) throw err;
  console.log('Connected!');

  const sql = "INSERT INTO skills (name, status) VALUES ('Algorithms & Data Structures', '70%')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

});
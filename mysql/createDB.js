const mysql = require('mysql');

// connect  ( docker run --name mysql --link mysql:mysql -d mysql )
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
});

// create

con.connect(err => {
  if (err) throw err;
  console.log('Connected!');

  con.query('CREATE DATABASE andrei',(err, result) => {
    if (err) throw err;
    console.log('database created!')
  });
}); 


// delete
/*
con.connect(err => {
  if (err) throw err;
  console.log('Connected!');

  con.query('DROP DATABASE andrei', (err, result) => {
    if (err) throw err;
    console.log('database deleted!')
  });
});
*/
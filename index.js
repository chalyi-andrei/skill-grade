const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const router = express.Router();
const con = require('./mysql/db');
const  bodyParser = require('body-parser')

app.use( bodyParser.json() ); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
})); 

app.use('/', express.static(path.join(__dirname, 'public/skills/')));

app.get('/skills', (req, res) => {
    const sql = "SELECT * FROM skills";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("result", result);
        res.send(result);
        res.end();
    });
});

app.post('/addSkill', (req, res) => {
    const sql = `INSERT INTO skills (name, status) VALUES ('${req.body.name}', '${req.body.status}%')`;
    const sql2 = "SELECT * FROM skills";
    
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`${req.body.name} - skill has created`);
    });

    con.query(sql2, function (err, result) {
        if (err) throw err;
        res.send(result);
        res.end();
    });
});

app.listen(8080);

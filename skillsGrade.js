const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer(req, res => {
  req.on('err', err => console.log(err));

  if (req.url == '/skills') {
    const file_path = path.join(__dirname, 'static/skills/index.html');

    fs.readFile(file_path, (err, data) => {
        if(err) {
            console.log('error', err);
            res.writeHead(404, {'Content-Type': 'text/plain' });
            res.write('Not Found');
        } else {
            res.writeHead(202, {'Content-Type': 'text/plain' });
            res.write(data.toString());
        }

        res.end();
    });
  }
}).listen(8081);
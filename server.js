const express = require('express');
const https = require('https')
const fs = require('fs')
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const httpsOptions = {
  cert:fs.readFileSync(path.join(__dirname, 'ssl', 'server.cer')),
  key:fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
}

https.createServer(httpsOptions, app).listen(80, () =>{
  console.log('Le serveur vient de se lancer et écoute sur le port 80')
})
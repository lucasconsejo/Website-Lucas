const express = require('express');
const https = require('https')
const fs = require('fs')
const path = require('path');
const app = express();

const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'certificate.crt')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'privateKey.key'))
}


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

https.createServer(httpsOptions, app).listen(443, () =>{
  console.log('Le serveur vient de se lancer et écoute sur le port 443')
})
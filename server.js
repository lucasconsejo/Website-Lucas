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
  cert:fs.readFileSync(path.join(__dirname, 'ssl', 'lucasconsejo.fr_ssl_certificate.cer')),
  key:fs.readFileSync(path.join(__dirname, 'ssl', '_.lucasconsejo.fr_private_key.key'))
}

https.createServer(httpsOptions, app).listen(443, () =>{
  console.log('Le serveur vient de se lancer et écoute sur le port 443')
})
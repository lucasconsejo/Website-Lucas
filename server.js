const express = require('express')
const https = require('https')
const http = require('http')
const fs = require('fs')
const path = require('path')
const app = express()
const httpApp = express()

const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'certificate.cert')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'privateKey.key'))
}

app.use(express.static(path.join(__dirname, 'build')));
httpApp.use(express.static(path.join(__dirname, 'build')));


app.get('/sitemap.xml', (req, res) => (
  res.status(200).sendFile('sitemap.xml')
));

app.get('/robots.txt', (req, res) => (
  res.status(200).sendFile('robots.txt')
));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

httpApp.get('/sitemap.xml', (req, res) => (
  res.status(200).sendFile('sitemap.xml')
));

httpApp.get('/robots.txt', (req, res) => (
  res.status(200).sendFile('robots.txt')
));

httpApp.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(httpApp).listen(80, function() {
  console.log('Le serveur vient de se lancer et écoute sur le port 80');
});

https.createServer(httpsOptions, app).listen(443, () =>{
  console.log('Le serveur vient de se lancer et écoute sur le port 443')
})
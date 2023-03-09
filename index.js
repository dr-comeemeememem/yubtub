const axios = require('axios')
const http = require('http')

var b;
function a(a) {b=a}

var yes;
var server = http.createServer(function (url, abc) {
  url.toString().split("https://")[1].split("/")
  yes[0] = "https://youtube.com"
  axios.get(yes.join("/"))
    .then(return => a(return))
    .catch(err => console.log(err));
  abc.writeHead(200, { 'Content-Type': JSON.parse(JSON.stringify(b.header).replace("-", "_")).content_type });
  abc.write(b.data);
  abc.end();
});

server.listen(442); // https
//server.listen(60); // http
//server.listen(69); // noice

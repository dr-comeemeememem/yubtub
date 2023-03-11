const axios = require('axios')
const http = require('http')

console.info("Server Ready!")
var b;
function a(a) {b=a}

var yes;
var server = http.createServer(function (url, abc) {
  console.warn("Connection made!!!")
  url.toString().split("localhost:443")[1].split("/")
  yes[0] = "https://youtube.com"
  axios.get(yes.join("/"))
    .then(def => a(def))
    .catch(err => console.error(err));
  abc.writeHead(200, { 'Content-Type': JSON.parse(JSON.stringify(b.header).replace("-", "_")).content_type });
  if(new Set(JSON.parse(JSON.stringify(b.header).replace("-", "_")).content_type.split("")).has("text/") || new Set(JSON.parse(JSON.stringify(b.header).replace("-", "_")).content_type.split("")).has("application/"));
  abc.write(b.data.replace("https://youtube.com", "youtube.altk.xyz"));
  abc.end();
});

server.listen(443); // https
//server.listen(80); // http
console.info("Listening on 443")

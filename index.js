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
  if(new Set(JSON.parse(JSON.stringify(b.header).replace("-", "_")).content_type.split("")).has("text/") || new Set(JSON.parse(JSON.stringify(b.header).replace("-", "_")).content_type.split("")).has("application/"));
  abc.write(b.data.replace("https://youtube.com", "youtube.altk.xyz"));
  abc.end();
});

server.listen(443); // https
server.listen(80); // http

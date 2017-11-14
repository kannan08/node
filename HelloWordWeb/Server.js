var http = require("http");
function onRequest(request,response){
response.writeHead(200,{"Contant-Type":"text/pain"});
response.write("Hello World");
response.end();
}
http.createServer(onRequest).listen(8080);
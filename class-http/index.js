var http = require('http')
var url = require('url')
var hostname = 'http://localhost'
var port = 90

http.createServer(function(req,res){
	console.log()
	var first = new URL(hostname+':'+port+req.url)
	var sec = url.parse(hostname+':'+port+req.url)
	console.log(sec.query)
	if(req.url == '/hello' && req.method == 'GET'){
		console.log(req.method)
		res.end('asd')
	}
	else if(req.url == '/hello' && req.method == 'POST'){
		console.log(req.method)
		res.end('This is Post method')
	}
}).listen(port)

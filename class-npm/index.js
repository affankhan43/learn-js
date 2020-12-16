var http = require('http')

// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

http.createServer(function(req,res){
	if(req.url == '/'){
		console.log(req.url)
		
		res.write('<h1>Nodejs Project</h1>' + req.url)
		res.end()
	}else if(req.url == '/post'){
		res.write('Welcome To Post')
		res.end()
	}else{
		// res.writeHead(200,{'contentType':'application/json'})
		// res.write("{'text':'asdasds'}")
		// res.end()
	}
	
}).listen(90)

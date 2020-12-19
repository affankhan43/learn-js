var http  = require('http')

http.createServer(function(req,res){
	if(req.url == '/'){
		console.log(req.headers)
		res.write('<h1>Nodejs Project</h1>' + req.url)
		res.end()
	}else if(req.url == '/post'){
		res.write('Welcome To Post')
		res.end()
	}else{
		var data = {'text':'asdasds'}
		var d = 1;
		res.write(d.toString())
		res.end()
	}
	
}).listen(90)
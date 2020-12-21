var http = require('http')
var url = require('url');

// console.log(http.METHODS)
// console.log(http.STATUS_CODES)

http.createServer(function(req,res){
	var q = url.parse(req.url, true).query;
	console.log(q)
	console.log(req.body)
	req.on('data', chunk => {
        console.log(chunk.toString()); // convert Buffer to string
    });
	console.log('URL:-->'+url.parse(req.url, true).pathname)
	if(req.url == '/'){
		console.log(req.url)
		console.log(req.connection.remoteAddress)
		res.write('<h1>Nodejs Project</h1>' + req.url)
		res.end()
	}else if(req.url == '/post'){
		req.on('data',(dd)=>{
			console.log(dd)
		})
		res.write('asd')
		res.end()
	}
	else{
		var data = {'text':'asdasds'}
		var d = 1;

		res.writeHead(200,{'contentType':'application/json'})
		res.write(d.toString())
		res.end()
	}
	
}).listen(90)

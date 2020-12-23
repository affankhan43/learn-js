var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')


var server = http.createServer(function (req,res) {
	console.log(req.url)
	if(req.url == '/'){
		var filePath = path.resolve('./public/index.html')
		console.log(filePath)
		fs.exists(filePath,function(check){
			if(check){
				var ext = (path.extname(filePath))
				if(ext == '.html'){
					//res.writeHead(200,{'Content-Type':'text/html'})
					//CreateReadStream Option1
					//fs.createReadStream('./public/index.html').pipe(res)
					fs.readFile(filePath,function(err,content){
						if(err){
							console.log(err)
							res.write('Error')
							res.end()
						}else{
							res.write(content)
							res.end()
						}
					})
					//res.end()
				}else{
					res.write('<h1>This is not HTML</h1>')
					res.end()
				}
			}else{
				res.write('<h1>'+ filePath+' : Not Found</h1>')
				res.end()
			}
		})
	}else{
		res.write('<h1>Page Not Found</h1>')
		res.end()
	}
})

server.listen(3001)
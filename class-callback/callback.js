var rd = require('readline')
var validJson = '{"key":"data"}'
var InvalidJson = "{'key':'value'"
function isJson(str){
	try{
		JSON.parse(str)
		return true
	}catch{	
		return false
	}
}
function asynchronuous(json,callback){
	if(isJson(json)){
		setTimeout(function(){
			callback(null,JSON.parse(json).key)
		},2000)
	}else{
		setTimeout(function(){
			var err = new Error('Invalid JSON') 
			callback(err,null)
		},2000)
	}
}
// var read = rd.createInterface({
// 	'input':process.stdin,
// 	'output':process.stdout
// })

// read.question('Hy?',function(ans){
// 	console.log('Hello World')
// })

// console.log('This function is after question')


asynchronuous(InvalidJson,function(err,value){
	if(!err){
		console.log(value)
	}else{
		console.log(err.errno)
	}
})

console.log('This function is after asyc')
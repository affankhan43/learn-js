var a = require('./a.js')
var q = require('./var.js')
console.log(q)
// var ddd = new a('asdsd');
// console.log(ddd.data2)
class b extends a{
	constructor(arg){
		super(arg);
		//super.data2 = arg
		this.data = 'hello2'
	}
	test(){
		return 'Loading...'
	}
	print(){
		console.log(super.test())
		console.log(this.test())	
	}
}

class c extends b{
	constructor(){
		super()
		this.data = 'hello3'
	}
}
class bhai{
	static log(msg){
		console.log(msg)
	}
}
var d = new b('yello');
// console.log(d.data)
//console.log(d.content)
//d.print()
// d.data2 = 'pop'
// d.print()
// console.log(d.data2)

//console.log(d.test())
// a.lol()
// console.log(a.alpha)
//bhai.log('asdasd')
console.log(b.alpha)
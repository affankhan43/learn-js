class a{
	constructor(arg){
		this.content = arg
		this.data2 = 'hello'
		a.prototype.data2 ;
	}
	static alpha = 'xyz'
	static lol(){
		console.log('Printing')
	}
	test(){
		return 'Testing...'
	}
}
class b extends a{
	l(){
		console.log(super.data2)
	}
}
var t = new b()
t.l();
//module.exports = a
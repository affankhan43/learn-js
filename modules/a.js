class a{
	constructor(arg){
		this.content = arg
		this.data2 = 'hello'
		//a.prototype.data2 = 'hello'
	}
	static alpha = 'xyz'
	static lol(){
		console.log('Printing')
	}
	test(){
		return 'Testing...'
	}
}

module.exports = a
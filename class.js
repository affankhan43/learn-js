class Animals{

	constructor(){
		this.legs = 4
	}
	static status = 'Living'
	static print(){
		console.log('Hello')
	}
	type(){
		return 'Non human'
	}
}
class dog extends Animals{
	constructor(){
		super();
		this.name = 'Dog'
		this.weight = '4kg'
	}
	speak(){
		console.log('Bark')
	}
	nature(){
		console.log('Loyal')
	}
	speed(){
		return '40km/h'
	}

}
class cat extends Animals{
	constructor(){
		super();
		this.name = 'Cat'
		this.weight = '2kg'
	}
	speak(){
		console.log('Meow')
	}
	nature(){
		console.log('Royal')
	}
	speed(){
		return '10km/h'
	}

}

// var newDog = new dog()
// var newCat = new cat()

// console.log(newDog.name)
// newDog.name = 'Catt'
// newDog.legs = 5
// console.log('Dog Legs-->'+newDog.legs)
// console.log('Cat Legs-->'+newCat.legs)
// console.log(newDog.name)
// newDog.speak()
// console.log(newDog.speed())
// newCat.speak()
// console.log(newCat.speed())

Animals.print()
console.log()


class project{
	constructor(tasks){
		this.tasks = tasks
	}
	print(){
		return this.tasks
	}
	total(){
		return this.tasks.size
	}
	changeTask(taskid){
		console.log(this.tasks.get(taskid))
	}
}

class tasks{
	constructor(name,days){
		this.tname = name
		this.tdays = days
	}
}


var task1 = new tasks('architecture','5')
var task2 = new tasks('development_1','5')
var task3 = new tasks('development_2','5')
var task4 = new tasks('development_3','5')

var tasklist = new Map();
tasklist.set('1',task1);
tasklist.set('2',task2);
tasklist.set('3',task3);
tasklist.set('4',task4);

var pro = new project(tasklist)
console.log(pro.print())
console.log(pro.total())
pro.changeTask('1')
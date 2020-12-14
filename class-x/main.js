const mod = require('express')

// console.log(mod.n)
// mod.print()

// var obj = new mod.a()
// console.log(obj.q)

// var task = {
// 	'taskName':'Development',
// 	'status':function(){
// 		console.log('Hellow ')
// 	}
// }

// console.log(task.taskName)
// task.status()

console.log(mod.n.num)
mod.n.num = 10
mod.n.date = '12/14'
console.log(mod.n.date)
console.log(mod.n.num)
mod.n.print()
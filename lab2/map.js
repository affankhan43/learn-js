var mainMap = new Map();

var physics = new Map();
physics.set('obtained',90)
physics.set('total',100)

var chemistry = new Map();
chemistry.set('obtained',90)
chemistry.set('total',100)

var urdu = new Map();
urdu.set('obtained',90)
urdu.set('total',100)

var english = new Map();
english.set('obtained',90)
english.set('total',100)

var maths = new Map();
maths.set('obtained',90)
maths.set('total',100)

mainMap.set('physics',physics)
mainMap.set('chemistry',chemistry)
mainMap.set('urdu',urdu)
mainMap.set('english',english)
mainMap.set('maths',maths)

//console.log(mainMap.entries())

var arr = mainMap.entries();
for(item of arr){
	console.log(
		"Percentage of "
		+item[0]+" : "+
		(mainMap.get(item[0]).get('obtained')/mainMap.get(item[0]).get('total'))
		*100
	)
}
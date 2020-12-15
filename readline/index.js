var re = require('readline');

var r = re.createInterface({
	'input': process.stdin,
	'output': process.stdout
});
var name;
var age;
var last_name;
var quotations = {
	'author':'',
	'quote':[]
}
// r.question('Whats your name?',function(a){
// 	name = a;
// 	r.question(a+' Please Enter Your Age? ',function(b){
// 		age = b
// 		if(parseInt(b) >= 18){
// 			r.question(a + ' Please Enter Your Last Name? ', function(c){
// 				last_name = c
// 				console.log('Thanks For Providing INfo...')
// 				print()
// 			})
// 		}else{
// 			console.log('Thanks For Providing INfo...')
// 			print()
// 		}
		
// 	})
// })
///--------------------  Caluculator --------------////
// r.question('Please Enter to Process OR Press x to exit',function(input){
// 	if(input == 'x'){
// 		r.close()
// 	}else{
// 		console.log('1) Enter 1 for Addition \n 2) Enter 2 for Subtraction \n 3)Enter x for exit')
// 		r.on('line',function(input1){
// 			if(input1 == 1){
// 				console.log('Value Added:  '+add(5,5));
// 			}else if(input1 == 2){
// 				console.log('Value Subtracted:  '+subtract(5,5));
// 			}else if(input1 == 'x'){
// 				r.close()
// 			}else{
// 				console.log('Please ENter Correct Option')	
// 			}
// 		})
// 	}
// })
///--------------------  Caluculator End --------------////

r.question('Please Enter Author Name: ',function(author){
	quotations.author = author
	console.log('Please enter '+author+' quotes or press x for exit: ')
	r.on('line',function(quote){
		if(quote == 'x'){
			r.close()
			console.log(quotations)
		}else{
			quotations.quote.push(quote)
		}
	})

})

function add(a,b){
	//r.close()
	return a+b

}
function subtract(a,b){
	//r.close()
	return a-b
}
function print(){
	console.log(name)
	console.log(age)
	console.log(last_name)
	//r.close()
}

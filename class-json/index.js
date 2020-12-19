var first = '{"key1":0,"key2":"value","key3":true}'
var jso = {"hello":"world"}
var sec = 'hello'
function is_json(str){
	try{
		console.log(JSON.parse(str));
	}catch{
		console.log('Please Provide ValidJson');
	}
}
var num = 'One'
// console.log(parseInt(num))
// console.log(JSON.stringify(jso))
// is_json(first)

var covid = {
	'total_cases':740600,
	'total_deaths':90000,
	'total_recovered':600000,
	'countries':[
		{'USA':{'total_cases':540600,'total_deaths':50000,'total_recovered':100000,'cities':
			[
				{'NewYork':{
					'total_cases':540600,'total_deaths':50000,'total_recovered':100000
				}},
				{'Brooklyn':
					{'total_cases':540600,'total_deaths':50000,'total_recovered':100000
				}}
			]}},
		{'India':{'total_cases':540600,'total_deaths':50000,'total_recovered':100000}},
		{'Brazil':{'total_cases':540600,'total_deaths':50000,'total_recovered':100000}},
	]
};

function generator_new(arr){
	function itr(obj){
		Object.keys(obj).forEach(function(key1){
			if(typeof obj[key1] == 'object'){
				if(typeof obj[key1].length != 'undefined'){
					console.log(key1)
					obj[key1].forEach(function(key2){
						//console.log(key2)
						itr(key2);
					})
				}else{
					//console.log(obj[key1])
					console.log(key1)
					itr(obj[key1]);
				}
			}else{
				console.log(key1+ ' : '+obj[key1])
			}
		})
	}
	itr(arr);
}
function generator_new2(obj){
	Object.keys(obj).forEach(function(key1){
		if(typeof obj[key1] == 'object'){
			if(typeof obj[key1].length != 'undefined'){
				console.log(key1)
				obj[key1].forEach(function(key2){
					//console.log(key2)
					generator_new2(key2);
				})
			}else{
				//console.log(obj[key1])
				console.log(key1)
				generator_new2(obj[key1]);
			}
		}else{
			console.log(key1+ ' : '+obj[key1])
		}
	})
}
generator_new2(covid)
// for(item in covid){
// 	if(typeof covid[item] == 'number'){
// 		console.log(item + ' ' +covid[item])	
// 	}else if(typeof covid[item] == 'object'){
// 		console.log('  '+item+': ')
// 		if(typeof covid[item].length == 'number'){
// 			covid[item].forEach(function(pro,i){
// 				for(item2 in covid[item][i]){
// 					console.log('    '+item2+': ')
// 					for(item3 in covid[item][i][item2]){
// 						console.log('      '+item3+' '+covid[item][i][item2][item3])
// 					}
// 					//console.log(item2)
// 				}
// 			})
// 		}else{
// 			console.log('Object')
// 		}	
// 	}
	
// }
// covid.forEach(function(item,ind){
// 	console.log(ind)
// 	console.log(item)
// })
// console.log('The Total Cases In World '+covid.total_cases)
// console.log('The Total Deaths In World '+covid.total_deaths)
// console.log('The Total Recoveries In World '+covid.total_recovered)
// console.log('The Total Cases In USA '+covid.countries[0].USA.total_cases)
// console.log('The Total Cases In USA '+covid.countries[0].USA.total_deaths)
// console.log('The Total Cases In USA '+covid.countries[0].USA.total_recovered)
// console.log('The Total Cases In India '+covid.countries[1].India.total_cases)
// console.log('The Total Cases In India '+covid.countries[1].India.total_deaths)
// console.log('The Total Cases In India '+covid.countries[1].India.total_recovered)
// console.log('The Total Cases In Brazil '+covid.countries[2].Brazil.total_cases)
// console.log('The Total Cases In Brazil '+covid.countries[2].Brazil.total_deaths)
// console.log('The Total Cases In Brazil '+covid.countries[2].Brazil.total_recovered)
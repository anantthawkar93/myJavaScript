//<title>Promise All</title>
//create a promise to generate random even no. and 
//also create another promise to check if it is number is greater than equals to  5.

	function getRandomNo() {
		return promiseOb = new Promise(function(resolve,reject) {
			setTimeout(() => {
				let randomNo = Math.floor(Math.random()*10);
				if(randomNo % 2 == 0){
					console.log(" 1st promise successful");
					resolve(randomNo);
				} else {
					console.log("1st promise  failed");
					reject(randomNo);
				}
				console.log(randomNo);
			},2000);
		})
		console.log("Starting to generate random number wait for 3 seconds");
		
	}

	function getRandomNoOne() {
		return promiseOb = new Promise(function(resolve,reject) {
			setTimeout(() => {
				let randomNo = Math.floor(Math.random()*10);
				if(randomNo >= 5){
					console.log("2nd promise successful");
					resolve(randomNo);
				} else {
					console.log("2nd promise failed");
					reject(randomNo);
				}
				console.log(randomNo);
			},3000);
		})
		console.log("Starting to generate random number wait for 3 seconds");
		
	}

	let resultOne = getRandomNo();
	let resultTwo = getRandomNoOne();
	Promise.all([resultOne,resultTwo]).then(function(values){
		alert(`Both promises successful and results are ${values[0]} and ${values[1]}`);
	})
	.catch(function(value) {
		alert(`Either one promise failed and results is ${value}`);
	})
	.finally(function() {
		alert('finally operation complete');
		
	})
	

//Promise race

	function getRandomNo() {
		let promiseOb = new Promise(function(resolve,reject) {
			setTimeout(() => {
				let randomNo = Math.floor(Math.random()*10);
				if(randomNo % 2 == 0){
					console.log("promise one successful");
					resolve(randomNo);
				} else {
					console.log("promise one failed");
					reject(randomNo);
				}
				console.log(randomNo);
			},5000);
		})
		console.log("Starting to generate random number wait for 3 seconds");
		return promiseOb;
	}

	function getRandomNoOne() {
		let promiseOb = new Promise(function(resolve,reject) {
			setTimeout(() => {
				let randomNo = Math.floor(Math.random()*10);
				if(randomNo >= 5){
					console.log("promise two successful");
					resolve(randomNo);
				} else {
					console.log("promise two failed");
					reject(randomNo);
				}
				console.log(randomNo);
			},3000);
		})
		console.log("Starting to generate random number wait for 3 seconds");
		return promiseOb;
	}

	let resultOne = getRandomNo();
	let resultTwo = getRandomNoOne();
	Promise.race([resultOne,resultTwo]).then(function(values){
		alert(`Both promises successful and results are ${values[0]} and $values[1]`);
	})
	.catch(function(value) {
		alert(`Either one promise failed and results is ${value}`);
	})
	.finally(function() {
		alert('finally operation complete');
	})
	

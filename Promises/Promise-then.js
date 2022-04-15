//Why we need Promises:
//create a promise to generate random no. and also create another promise to check if it is even or odd.

			function getRandomNo() {
				let promiseOb = new Promise(function (resolve, reject) {
					setTimeout(() => {
						let randomNo = Math.floor(Math.random() * 10);
						console.log("promise one successful");
						resolve(randomNo);
						console.log(randomNo);
					}, 5000);
				});
				console.log("Starting to generate random number. wait for 5 seconds");
				return promiseOb;
			}

			function checkEvenOdd(no) {
				let promiseOb = promiseOb.resolve(randomNo);
				  setTimeout(() => {
					    let randomNo = Math.floor(Math.random() * 10);
						console.log("promise one successful");
						resolve(randomNo);
						console.log(randomNo);						
						if (value % 2 == 0) {
							resolves(randomNo);
							console.log("promise two successful..its even number");
						} else {
							reject(randomNo);
							console.log("promise Two failed..its odd number");
						}
					 	console.log(randomNo);
					}, 3000);
					console.log("Starting to generate random number. wait for 3 seconds");
					return promiseOb;
				}

			let promiseResultOne = getRandomNo();
			
			promiseResultOne.then(function(result){
				let resultPromiseTwo = checkEvenOdd(result);
				 return resultPromiseTwo;
				})
			    .then(function(result){
					alert(`final result is ${result}`);
				})
				.catch(function(errorResult){
					alert(`finally failed with value as ${errorResult}`);
				})
				.finally(function(){
					alert('Task done');
				})
			 
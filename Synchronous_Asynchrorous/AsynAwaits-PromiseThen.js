            function getRandomNo() {
				return new Promise(function (resolve, reject) {
					setTimeout(() => {
						let randomNo = Math.floor(Math.random() * 10);
						console.log("promise one successful");
						resolve(randomNo);
						console.log(randomNo);
					}, 5000);
				});
				console.log("Starting to generate random number. wait for 3 seconds");
				
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

		async function myAsyncFunction(){
			try{
				let promiseResult = await checkEvenOdd();
			alert(promiseResult);
			}
			catch(error){
				alert(`Not a even number ${error}`);
			}
			console.log("i came after job done");
		}
		myAsyncFunction();
			
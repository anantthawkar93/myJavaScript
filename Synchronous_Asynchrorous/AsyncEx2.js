
	function getRandomNo() {

		let promiseOb = new Promise(function(resolve,request) {
			setTimeout(() => {
				let randomNo = Math.floor(Math.random() * 10);
				if(randomNo % 2 == 0){
					resolve(randomNo);
				} else {
					reject(randomNo);
				}
			},8000)
		})
		console.log("Starting to generate random number,wait for 3 seconds");
		return promiseOb;
	}

	async function asyncFunction(){
			try{
				let promiseResult = await getRandomNo();
				alert(promiseResult);

			}
			catch(error){
				alert(`error happened ${error}`);
				console.log("error happened as random no. is odd no.");
			}
			console.log("i came after job done");
		}
		asyncFunction();

		let result = getRandomNo();
	result.then(function(promiseResult) {
		alert(promiseResult);
	});

	console.log("my call to function is done");

	result.catch(function(errorResult){
		alert(`operation Failed.random no is odd with values=${errResult}`);
	})

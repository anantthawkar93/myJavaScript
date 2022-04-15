//Why we need promises

	function getRandomNo() {
		/*promiseOb is a promise object which is returned by the function.
		It is a guarantee that you will get the result.why you need to return it?
		because I need to give response to the function call.now this promise object is interesting
		because it contains a callback and this callback is only executed when the resolve function is called.
		Inside resolve funtion I can pass the result of the operation.you can call this function which is 
		'result.then' and inside is the function that will only run when the resolve method is called
		'.resolve method' is used to signify that job is done. 
*/
		let promiseOb = new Promise(function(resolve,reject) {
			setTimeout(() => {
				let randomNo = Math.floor(Math.random()*10);
				console.log(randomNo);
				resolve(randomNo);
			},3000);
		})
		console.log("Starting to generate random number wait for 3 seconds");
		return promiseOb;
	}
	let result = getRandomNo();
	result.then(function(promiseResult) {
	alert(promiseResult);
	})

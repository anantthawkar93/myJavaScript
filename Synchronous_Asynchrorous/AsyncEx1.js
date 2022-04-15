//Async Await Example: 

		function getRandomNo(){
			console.log("came in getRandomNo function");
			let promiseOb = new Promise(function(resolve, reject){
				setTimeout(()=>{
					let randomNo = Math.floor(Math.random()*10);
					reject(randomNo);
					console.log(`random no generated = ${randomNo}`);
				}, 2000);
			});
			return promiseOb;
		}
		async function asyncFunction(){
			try{
				let promiseResult = await getRandomNo();
				alert(promiseResult);
			}
			catch(error){
				alert(`error happened ${error}`);
			}
			console.log("i came after job done");
		}
		asyncFunction();
	
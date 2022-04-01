let nos = [2,3,5,4,9];
		let modifiedArray = nos.map(function(val,index){
			// we can either return true or false. if we return true, the value is included in the array. if we return false the value will be removed from array

				if(val%2==0) return true;
			else {return false;}
		});
		console.log(modifiedArray);
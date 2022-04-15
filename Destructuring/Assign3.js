/*write a program that takes input of first name and surnames, ex: getFullName("sumit","kumar","kohli").
		you should return full name like sumit kumar kohli. 
		you have to do this using spread operator and using arguments array.*/

		function getFullName(fname,sname,lname){
			return ([...arguments].join(""));
		}
		alert(getFullName("Sumit","Kumar","Kohli"));
		console.log(getFullName("Sumit","Kumar","Kohli"));
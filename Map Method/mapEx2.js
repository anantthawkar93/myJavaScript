//Use Map over Array of Object:
let users = [
	{firstName:'anant', lastName: 'thawkar'},
	{firstName:'ravi', lastName: 'thawkar'},
	{firstName:'swati', lastName: 'thawkar'},
	];
//we can iterate as follows:
let userFullname = users.map(function(user){
	return `${user.firstName} ${user.lastName}`
	});
console.log(userFullname);

/*The Complete map() method syntax: 
The syntax of map() as follows - 

array.map(function(element, index, array){}, thisValue);

The callback function() is called on each array element, and  the map() method always passes the current element,
the index of current element and whole array object to it.

This argument will be used inside callback function.
By default its value is undefined.
*/
let arr2 = [5, 4, 3, 2];
arr2.map(function(element, index, array){
	console.log(this) 
}, 80);
//Here, we can see this value is 80, which is default value.
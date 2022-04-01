/*JavaScript Map : 

The Array.Map() allows you to iterate over array using loop.
This method allows us to iterate and modify its element using a callback function.
The callback function will then be executed on each of array's element.

let arr = [2, 3, 4, 5, 6, 7];
Now imagine we have to multiply each element of array by 3.
We can use  for loop also like this.
*/
let arr = [2, 3, 4, 5, 6, 7];
for( let i = 0; i < arr.length; i++){
	arr[i] = arr[i]*3;
}
console.log(arr);

//By using map method it will look like following :
let arr1 = [7, 6, 5, 4, 3, 2];
let modifiedArr = arr.map(function(elem){
	return elem*3;	
});
console.log(modifiedArr);
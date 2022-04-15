/*  DESTRUCTURING:

Destructuring is act of unpacking elements in an array or object.
It not only allows us to unpack but also manipulate and switch elements according to our demand. 

Destructuring in Arrays: 
*/
const [var1, var2, ...var3] = ["Deepa", "Jyoti", "Devesh", "Ram"]

console.log(var1); //Deepa
console.log(var2); //Jyoti
console.log(var3); //["Devesh", "Ram"]

/*Javascript allows us to use rest operator (...) with a destructuring array to assign the rest
of the regular array to the variable.
As we have noticed  ["Devesh", "Ram"] remaining both get stored in var3.
*/
const [ , , website] = ['Google', 'yahoo', 'firefox'];
console.log(website); //firefox
//Here We use ',' to skip varaiables at destructuring array's first and second index position.

//How Default value work in an Array Destructuring Assignment.
const [firstName = 'anant', lastName = 'thawkar' ] = ['anant thawkar']

console.log(firstName) //anant thawkar
console.log(lastName) //thawkar
/*Here 'anant' and 'thawkar' are default value of 'firstName' and 'lastName' variables
Therefore, In our attempt to extract first index value from right side of array, the computer defaulted to 
'thawkar' - because only zeroth index value exists in ['anant thawkar']
*/
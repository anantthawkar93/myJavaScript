/*OBJECT DESTRUCTURING IN JS

Object destrucuting is unique technique that allows us to really extract an object's value to new variables.
*/

const profile = {
    firstName : 'Deepa',
}

const {firstName: fname} = profile;
/*where, 
firstName : this key references the profile object's firstName key
fName : this value represents us new variables.

The Destructuring object's key references its profile objects property name and 
Destructuring object's value represents our new variable.
*/
const profile1 = {
    firstName : 'Anant',
    lastName : 'Thawkar',
}

const {firstName, lastName} = profile1;

console.log(firstName);
console.log(lastName);

//How to Use object Destructuring to Swap Value:

let firstname = 'Anant';
let lastname = 'Thawkar';

({firstname,lastname} = {firstname:lastname, lastname:firstname});
console.log(firstname);
console.log(lastname);



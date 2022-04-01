/*Anonymous functions are functions without names.
Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.

Immediate function  means defining and calling at the sametime.
*/
(function(msg){
    alert(msg)
})("Good Morning");

//A different syntax for same Immediate func. we move the parenthesis inside.
(function(msg){
    alert(msg)
}("Good Evening"));

//Anonymous functions can be used as an argument to other functions
setTimeout(function() {
    console.log('Execute later after 4 second')
}, 4000);
/*In above example, we pass an anonymous function into the setTimeout() function. 
The setTimeout() function executes this anonymous function 4 second later.*/

//Passing arguments into the Anonymous function,
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);
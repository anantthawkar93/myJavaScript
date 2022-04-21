/*Callbacks are a function we generally call when we get the return result.
we normally just pass a callback into a function that would then get called upon completion
in order to get the result 
Callback Example:*/
function addAsync (num1, num2, callback) {
 
 return ({
 num1: num1,
 num2: num2
 }, callback);
}
addAsync(1, 2, success => {
 const result = success; 
});

// we get result = 3 

/*A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action.

Example:*/

function printString(){
   console.log("Tom"); 
   setTimeout(function()  { console.log("Jacob"); }, 300); 
  console.log("Mark")
}

printString();
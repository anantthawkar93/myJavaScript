//A function is actually variable type object.
function sum1(a,b){
    return a+b;
}
sum1(4,6);
console.log(sum1(4,6));


var sum = new Function('a','b','return a+b;'); 
//"new Function()" and "Function()" will work same.
sum(1,2);
console.log(sum(1,2));


// Note:Function is just a variable of type object.
// 1) u can pass variable to a function?
// 2) u can return variable to a function?
// 3) u can declare variable to a function?

// means:  
// 1) u can pass function to a function?
// 2) u can return function variable from a function?
// 3) u can declare function in a function?

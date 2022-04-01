function greet(passedFunction, passedFunctionOne){
    /*the passedFunction variable actually is the function passed.
    so we are calling the function*/
    passedFunction();
    passedFunctionOne();
    // One of the way:
    // arguments[0]();
    // arguments[1]();
}
function goodMorning(){
    alert("Good Morning");
    console.log("Good Morning");
}
function goodEvening(){
    alert("Good Evening");
    console.log("Good Evening");
}
greet(goodMorning, goodEvening);
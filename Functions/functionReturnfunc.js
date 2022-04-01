function greet(dayTime){
    function goodMorning(){
        alert("Good Morning");
    }
    function goodEvening(){
        alert("Good Evening");
    }
    if(dayTime == "morning"){
        return goodMorning;
    }else if(dayTime == "afternoon"){
        return goodEvening;
    }else{
        return "Have a good day";
    }
}
// the returned value from the greet function is actually a function.
let returnedFunction = greet("morning");
returnedFunction();
//this way also i can call a function. so the returned function is executed again.
greet("afternoon")();
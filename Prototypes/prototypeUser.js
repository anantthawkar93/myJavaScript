Date.prototype.getWichDay = function(){
    //this represents the current object so u dont need 
    switch(this.getDay()){
        case 1:
        alert(" Monday");
        break;
        case 2: alert("Tuesday");
        break;
        case 3: alert("Wednesday");
        break;
        case 4: alert("Thrusday");
        break;
        case 5: alert("Friday");
        break;
        default:
        alert("Some other day")
    }
}
let todayDate = new Date();
todayDate.getWichDay();
let newDateob = new Date();
document.getElementById("Div").innerHTML = newDateob.getWichDay();

let studentName = new String("Anant");
studentNameone = "Kavita";
String.prototype.getFirstLetter = function(){
    alert(this[0]);
}
studentName.getFirstLetter();
studentNameone.getFirstLetter();

let no = new Number(12);
Number.prototype.isEven = function(){
    if(this.valueOf()%2==0){
        alert("Number is Even");
    }else{
        alert("Number is odd");
    }
}
no.isEven();
let noOne = 100;
noOne.isEven();

let booleanVar = true;
Boolean.prototype.isTrue = function(){
    if(this.valueOf()==true){
        alert("this is true");
    }else{
        alert("this is false");
    }
}
booleanVar.isTrue();

Object.prototype.showProperties = function(){
    for(let index in this){
        console.log(index);
        alert(this[index])
    }
}
let studentOb = {
    name: "Anant",
    age: 28
}
studentOb.showProperties();
//a function that returns an object when new operator is used is called a constructor function.
function Hero (name="default name",hobby="default hobby"){
    this.name = name;
    this.hobby = hobby;
    this.showHobby = function(){
        alert(`the hobby of ${this.name} is ${this.hobby}`);
    }
    this.showPassword = function(){
        alert(password);
    }
    //to create a private property use it like a normal variable. donot attach it to this.. now the password variable cant be accessed from outside the function
    let password = "abc";
}
Hero.prototype.age = 1000;
Hero.prototype.character = "Great";
Hero.prototype.sayHello = function(){
    alert("hello");
}
Hero.prototype.greet = function(){
    alert("Good Morning")
};
// //method-2
// Hero.prototype = {
// 	age = 1000;
// 	character = "Great";
// 	sayHello = function(){
// 	alert("hello");
// }

let supermanOb = new Hero("superman","flying");
let spidermanOb = new Hero("spiderman","Saving ppl");
let hulkOb = new Hero("Hulk","Beating Villains");

alert(supermanOb.age);
alert(supermanOb.character);
alert(supermanOb.name);

alert(spidermanOb.age);
alert(spidermanOb.character);
alert(spidermanOb.name);


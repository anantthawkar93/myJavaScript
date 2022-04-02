//a function that returns an object when new operator is used is called a constructor function.
function Hero(name="default name",hobby="default hobby"){
    this.name = name;
    this.hobby = hobby;
    this.showHobby = function(){
        alert(`the hobby of ${this.name} is ${this.hobby}`);
    }
    this.showPassword = function(){
        alert(password);
    }
    //to create a private property use it like a normal variable. 
    //donot attach it to this.. now the password variable cant be accessed from outside the function
    let password = "abc";
    return "Hello";
}
let supermanOb = new Hero();
let spidermanOb = new Hero("spiderman","Saving ppl");
let hulkOb = new Hero("Hulk","Beating Villains");
//normal function. it is not behaving like a constructor function
let returnValue = Hero();
console.log(supermanOb);
console.log(returnValue);
alert(supermanOb.name);
supermanOb.showHobby();
hulkOb.showHobby();
hulkOb.showPassword();
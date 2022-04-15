class Car {
    name;
    model;
    #chasisNo; //private property is denoted by # at starting of naming property.we cannotaccess private property outside the class.
    constructor(chasisNo,name,model){
        console.log(
            "This function is called when object is created . here we can initialize variables and do other initializations"
            );
        this.name = name;
        this.model = model;
        this.#chasisNo = chasisNo;
    }
    showCarModel(){
        alert(`the car model is ${this.model}`);
    }
    showChasisNo(){
        alert(`this chasisNo is ${this.#chasisNo}`);
    }
}
Car.prototype.showCarName = function(){
    alert(`from function showName and the value is ${this.name}`);
}
Car.prototype.a = 12;
let hondaObject = new Car("chassis212","Hondacity",2022);
hondaObject.showCarModel();
hondaObject.showCarName();
alert(hondaObject.a)

//Using Object.create() to create new Objects

/*The Object.create() methods create a new object, using an existing object as 
prototype of newly created object.
It contains two parameters :
1 - first parameter is mandatory that serves prototype of new object to be created.
2- second is optional, it contains the properties to be added  to new object.
*/

const orgObject = {
    company : "ABC",
}

const employee = Object.create(orgObject, { name: { value: 'EmpOne'}});

console.log(employee); //company: "ABC"
console.log(employee.name); //"EmpOne"

/*Using Object.assign() to create new Objects.

The Object.assign() method is used to copy all enumerable own properties value from one or more 
source objects to target object.
*/
const orgObject1 = { 
    company : 'ABC',
};

const carObject2 = {
    carName: 'Ford',
};

const employee1 = Object.assign({}, orgObject1, carObject2);
//Now, we get employee1 object that has company and carName  as its properties.

console.log(employee1);// { carName: "Ford", company: "ABC" }

/* Using Object.defineProperites()

This method defines new or modify existing property on object.
Similarly,we also have  Object.defineProperty()
*/
const obj = {};

Object.defineProperties(obj, {
    property1 : {value : 42},
    property2 : {value : 'hello'},
})

console.log(obj.property1); // 42
console.log(obj.property2); // hello
alert(obj);

/*Using Object.Entries() :

It returns an array of object's key-value pairs.
The order of array ia same as provided by a for..in loop
*/

const obj1 = {
    a: "something",
    b: "nothing",
    c: "everything",
};

for(const [key, value] of Object.entries(obj1)){
    console.log(`${key} : ${value}`);
}
//Output => "a : something", "b : nothing", "c : everything"


/* Object.freeze() :
It freezes an object. No longer can be changed.
*/
const object = {
    prop: 42,
};
Object.freeze(object);

object.prop = 43; //try to change prop.
console.log(object.prop); // 42

/* Object.fromEntries() : 
It transforms a list of key-value pairs into a object. 
*/
const entries = new Map([
    ['foo', 'bar'],
    ['buz', 42],
]);

const object1 = Object.fromEntries(entries);
console.log(object1);
//Output => { buz: 42, foo: "bar" }

/*Object.hasOwn() :
This method returns true if the specified object has indicated property as its own property.
*/
const obj3 = {
    prop1: 'exists',
};

console.log(Object.hasOwn(obj3,'prop1')); //true

console.log(Object.hasOwn(obj3,'prop2')); //false

/* Object.keys() method => returns an array of all keys present in given object.

Object.values() method => returns an array of all values present in given object.

Object.seal() method => It seals an object, prevent new properties from being added to it and
making all exisiting properties non-configurable.
 */


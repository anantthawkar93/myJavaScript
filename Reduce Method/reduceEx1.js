/*Reduce Method:
Reduce method does the operation by working on the prevoius calculation (value)
and  deriving the result.
*/
let arr = [6,4,3,1];
    let returnValue = arr.reduce(function(previousValue,currentValue) {
    	alert(`previous value = ${previousValue}`);
    	alert(`current value = ${currentValue}`);
    	return previousValue + currentValue;
    },10); // here 10 is considered as previous value.

console.log(returnValue);

//string Array example:
let stringArray = ["Anant ","Thawkar"," Maharashtra"];
    let returnValueString = stringArray.reduce(function(previousValue,currentValue) {
    	alert(`previous value = ${previousValue}`);
    	alert(`current value = ${currentValue}`);
    	return previousValue + currentValue;
    });
console.log(returnValueString);

//Multiplication of all array elements:
let returnValueMultiplication = arr.reduce(function(previousValue,currentValue) {
    alert(`previous value = ${previousValue}`);
    alert(`current value = ${currentValue}`);
    return previousValue * currentValue;
});
console.log(returnValueMultiplication);


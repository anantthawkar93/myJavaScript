/*Asynchronous : It allows program to be executed immediately without blocking the code.
Unlike the synchronous method it does not wait for earlier statement to get executed first.
Each task execute completedv independently.
*/
console.log("I");

setTimeout(()=>{
    console.log("eat");
},3000);
console.log('Ice-cream');
//It will print "I" first, then "Ice-cream" and after that "eat" .

/*Asynchronous Functions: It contains async keyword.

How to use in normal function declaration: const funcName = async (arg) => {}

Asynchronous Functions always return promises.
It doesnt matter what you return.
The returned value will always be promise.
*/
const getOne = async () =>{
    return 1;
}
const promise = getOne();
console.log(promise)

/*The Await keyword:

the await keyword lets you wait for promise to resolve. Once promise is resolved it returns 
the parameter passed into then call.
*/

const get1 = async() =>{
    return 1;
}
get1().then(value=>{
    console.log(value)
});
//Now use of await keyword.

const test = async() =>{
    const one = await get1();
    console.log(one)
}
test();
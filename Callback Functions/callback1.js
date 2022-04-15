/*Callback Function : function is first class citizens
1. In JS, we can assign fucntion to a variable.
2. pass a function as an argument (known as callback function).
3. returing function

Any function that is passed as an argument is called a callback function.

A callback is a function that is to be executed after another function has finished executing-
Hence, the name 'callbacl'
*/
//Case1: 
const funA = ()=>{
    setTimeout(()=>{
        console.log('welcome FunA');
    }, 3000);
}
const funB = () =>{
    console.log('welcome FunB');
}
funA();
funB();

/*Output: 
welcome FunB
welcome FunA*/

/*Why callback function?? 
JS is an event driven language. This means that instead of waiting for a response before moving on, Javascript
will keep executing while listening for the other events.
So, Callbacks are a way to make sure, certain code doesnt execute until other  has already finised execution.
*/
//Case2: 
const funcA = ()=>{
    setTimeout(()=>{
        console.log('welcome FunA after 3 sec');
    funB();
    }, 3000);
  
}
const funcB = () =>{
    setTimeout(()=>{
        console.log('welcome FunB after 6 sec');
    }, 3000);
}
funA();

/*Output: Its like a formation of callback hell. 
welcome FunA after 3 sec
welcome FunB after 6 sec*/

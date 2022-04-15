/*
A promise is javascript object that allows us to make asynchronous calls.
It produces a value when async opration completes successfully or produces an error
if it doesnt complete.

we can create promise using constructor
*/
                            
let promise = new Promise (function(resolve, reject){

});
/*Executor function takes 2 arguments:
resolve : indicates successful completion.
reject : indicates an error

The promise objects and states:

Promise Object should be capable of informing consumers when execution has been started, 
completed or retured with a error.

States -> 
1. pending - when execution function starts
2. fullfilled - when promise is resolved successfully
3. rejected - when the promise is rejected.

result -> 
1.undefined - initially when state value is pending.
2.value - when promise is resolved.
3.Error - when promise is rejected.
So, A promise that is either resolved or rejected are settled.
*/

/*HANDLING PROMISE BY CONSUMER
Three important handler methods:
1) .then        2).catch        3).finally

These methods helps us create a link between executor and consumer.
1) The .then() promise hamdler is used to let consumer know outcome of promise.
It accepts 2 arguments: result, error.
*/

promise.then((result)=>{
        console.log(result);
        },
        (error)=>{
            console.log(error);
        }
    );

/*2) The .catch Promise Handler is used to handle the error (rejections) from promises.
Its better syntax it with: .then()
*/

promise.catch(function(error){
    console.log(error)
});

/*3) The .finally Promise Handler method performs cleanups like stopping a loader, closing a live connection & so on.
Irrespective of whether promise resolve or reject, the finally method will run.
*/

promise.finally(()=>{
    console.log('Promise Settled');
}).then((result)=>{
    console.log({result});
});

/*IMP. POINT 2 NOTE:
the finally() method passes through result or error to the nxt handler, which  can call a .then() or .catch() again. 
*/






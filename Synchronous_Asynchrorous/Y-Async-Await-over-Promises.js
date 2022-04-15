/*The Purpose of async/await functions is to simplify behaviour of promises synchronously 
and perform task on group of promises.

Async : putting keyword async before a function tells the function to return a promise.

Await : It simply makes javascript wait until the promise settles and then go to result.

Meanwhile,  engine will carry other taskes.
A promise which will be resolved with value returned by async function  or if rejected, uncaught exception
thrown from async.

WHY Async -Await ??
1) Error-Handling: Using try-catch makes it easy to handle both synchornous and  asynchronous. 
*/
const makeRequest = ()=>{
    try{
        getJson().then(result=>{
            //this may fail
            const data = JSON.parse(result);
            console.log(data);
        })
    }catch(err){
        console.log(err);
    }
}
//Now we can make this better than Async-Await.
const makeRequest1 = async ()=>{
    try{
            //this may fail
            const data = JSON.parse( await getJSON());
            console.log(data);
        }
    catch(err){
        console.log(err);
    }
}

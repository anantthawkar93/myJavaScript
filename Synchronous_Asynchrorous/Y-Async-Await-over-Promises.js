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

/*
2)Clean and Concise code:
We dint have to write '.then', avoided nesting our code.

3)Conditionals:
*/
const makeRequest2 = () =>{
    return getJSON()
            .then(data =>{
                if(data.needsAnotherRequest){
                    return makeAnotherRequest(data)
                            .then(moreData =>{
                                console.log(moreData)
                                return moreData
                            })
                }else{
                    console.log(data);
                    return data;
                }
            })
}
/*Its easy to get lost in all nesting of 6 levels braces, return statements that are only needed to 
propagate final result to main promise.

Asyn-Await provides us option to make it more readible.
*/
const makeRequest3 = async() =>{
    const data = await getJSON()
    if(data.needsAnotherRequest){
        const moreData = await makeAnotherRequest(data)
        console.log(moreData);
        return moreData;
    }else{
        console.log(data);
        return data;
    }
}

/*
4) Error Stacks: The Error stack returned from promise chain gave no clue where the error happened.
However, the error stack from async-await points to function that contains error.
5) The killer advantage when using async-await is that its much easier to debug.
Debugging promises has always been such a pain for reasons.
a)you cant set breakpoints in arrow functions that return expressions. 
b)If you set a breakpoint inside .then() block and use debug shortcuts, debugger wont move to 
following .then() because it only steps through synchronous code.

With Async-Await function we dont use arrow function as much,
We can easily debug and step through await calls.
*/
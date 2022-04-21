/*The Promise.all() method takes an iterable of promises as an input, 
and returns a single Promise that resolves to an array of the results of the input promises.
This returned promise will resolve when all of the input's promises have resolved, 
or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or 
non-promises throwing an error, and will reject with this first rejection message / error. 

Promise.All Example:*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.all([promise1, promise2]).then((value) => {
  console.log(value);
  
});

//Here Output will be array with 'one' and 'two'.
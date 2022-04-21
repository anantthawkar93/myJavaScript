/*The Promise. race() method returns a promise that fulfills or rejects 
as soon as one of the promises in an iterable fulfills or rejects, 
with the value or reason from that promise.
Promise.race Example: */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.all([promise1, promise2]).then((value) => {
  console.log(value);
 
});

/*output: "two"
Here output will only promise2 will be executed as its setTimeout time is faster as compared 
to promise1 */

/* CALLBACK FUNCTIONS :

A callback function is function that is performed after another function has been completed.
It is typically supplied as an input to other function.

Callbacks are critical to understand, as they are used in array methods (such as map(), filter(), and so on)
setTimeout, eventlisteners (such as click, scroll)
*/

function orderPizza(type, name, callback){
    console.log(`Pizza Ordered`);
    console.log(`Pizza is on preparation`);

    setTimeout(function(){
        let msg = `your ${type} ${name} Pizza is ready!!`;
    callback(msg)
    }, 3000);

}
//Now invocation of orderPizza
orderPizza('veg', 'cheese', function(message){
    console.log(message);
  })
/*Important points to  note:
1- Javascript function can accept other function as an argument.
2- passing func as argument is powerful programming concept, that can be used to noticify 
caller that something has happened.It is also known as caller function.
3- Nesting too many callback func is not a great idea and it creates Callback hell.
*/             
       
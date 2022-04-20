//Fetch API - How to make GET and POST request in Javascript?

/* What is the Fetch API
Fetch API is the mechanism that lets us make simple AJAX (Asynchronous Javascript and XML) 
calls with Javascript.
Asynchronous means that we can use fetch to make a call to an external API without halting/stopping
execution of other instructions.

Thats why, other functions will continue to run when an API call has not been resolved.

Whwn response(data) is sent back from API, the async tasks resume.
It is Important to note that Fetch is not part of JS, but WWWTAG.
Therefore, We Have to install special modules to use in Nodejs environment.
*/

/*  How to Use Fetch() in Javascript- 

When we Talk about APIs, We also need to talk about endpoints.
An endpoint is simply a unique URL we call to interact with other system.

lets assume that we are making a request to an external API to get some data.
For this we will simply use GET Request - 
simply call fetch() with endpoint URL
*/
fetch('https://deeepaChaurasia.tech/posts/1')
//trying to fetch blogpost from external API
//The response body for this endpoint
outputData = {
    userID: 1,
    id: 1,
    title: 'A post of Deepa',
    body: 'Brillant Post',
} ;
/*Ultimately we want response body.
But response body contain quite a bit information including status code, header info etc.

Remember Fetch API returns a pomise we need to nest a .then() method to handle resolution.
The data return from API is not usally useable form.
So, we will need to convert data to a form which our javascript can operate.
we can use JSON() Method for that.
*/
fetch('https://deeepaChaurasia.tech/posts/1')
    .then(data =>{
        return outputData.JSON();
    })
    .then(post =>{
        console.log(post.title);
    })

/*Note: To make simple GET Request with fetch, we need to pass only URL Point as argument.
*/
//          How to make Post Request:

/*For post, we need to pass an object of configuration options as a second argument.
The optional object can take alot of different parameters.

Because, we are sending POST request, We have to declare that we are using POST method.
We will also need to pass some data to actually createt a new blog post.
Since, we are sending JSON data, we have to set a header of content-type set to 
application/json.
Finally, we will need a body, which will be single string of JSon data.
*/
const update = {
    title : "A Blogpost by Deepa",
    body : "Brillant Post",
    userId : 1,
}
const options = {
    method : 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body : JSON.stringify(update),
};
/*And then API - Call

NOTE: To make a post request, we will need to pass along certain other parameters
including Configuration Object.
*/
fetch("https://jsonplaceholder.typicode.com/posts",options)
    .then(data =>{
        if(!data.ok){
            throw Error(data.status);
        }
        return data.json();
    }).then(update =>{
        console.log(update);
    }).catch(err =>{
        console.log(err)
    });

    /*
    If our request is successful,
    We will get a response body containing blog post object along with newId.
    The response will vary depending upon how API is Setup.
    */
   /*       How to handle Errors in Fetch:

   The fetch() function will automatically thrown an error for network errors but 
   not for HTTP errors such as 400 to 5xx responses.

   The good news is fetch provides a simple response. OK Flag that indicates whether the request has been failed
   or an 'HTTP request'
   The response status status is in successful range.

   This is very simple to implement.
   */
  fetch("https://typefit/api/quotes")
    .then((response)=>{
        if(!response.ok)
            throw Error(response.statusText);
        return response.json();     
    })
//Now interesting part
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })


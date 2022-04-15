//Lets implement the fetch API code using async/await:
const fetchData = async() =>{
    const product = await fetch ("http://fakestoreapi.com/products/");
    const response = await product.json();

    console.log(response)
}
fetchData();
/*
We can also handle errors in async/awaits by using try and catch.
*/
const fetchData1 = async() =>{

    try{
        const products = await fetch ('https://fakestoreapi.com/products');
    const response = await products.json();

    console.log(response);
    }
    catch(error){
        console.log(error);
    }
};
fetchData1();
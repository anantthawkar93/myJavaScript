/*Filter() provides new array depending on certain criteria.*/
let users = [
    {first:'Ram', age: 14},
    {first:'shyam', age: 24},
    {first:'laxman', age: 34},
] ;
//We could choose to sort these data by age groups, such as 
//young(1-15) and adult(15-50)
const young = users.filter((ppl)=>{
    return ppl.age <= 15
});

const adult = users.filter((ppl)=>{
    return ppl.age <= 15
});
console.log(young); 
console.log(adult); 

//Unlike map(), it can alter size of new Array, whereas find 
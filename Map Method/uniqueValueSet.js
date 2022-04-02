/*Unique Value-set in Js:

Sometimes an array of objects may contain repeated values.
So, if we loop through map, we will get repeated value.
Therefore,  to avoid the repetition we will use Unique value-set().
*/

let animals = [
    {name:'lion', category:'wild'},
    {name:'dog', category:'pet'},
    {name:'cat', category:'pet'},
];

const category = [...new Set(animals.map((animal)=>{
                animal.category
            }))];
console.log(category); //undefined??
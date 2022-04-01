//Object Example-1

        //Createing an object in Js
        const person = {
            name: "Anant",
            surname : "Thawkar",
            age : 28,
        };
        /*This is a simplest and most popular way.
        WE can also use new keyword*/

        const person1 = new Object();
        person1.name = "Anant";
        person1.surname = "Thawkar";
        person1.age = 28;

        console.log(person1);
    
    //We can also use 'new' keyword with user-defined constructor function.

    function person2(name, surname, age){
        this.name = name;
        this.surname = surname;
        this. age = age;
    }
    //so anytime we want to person2 Object:
    const personNew = new person2("Anant", "Thawkar", 28); 
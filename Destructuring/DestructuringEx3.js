let ob = {
    sname: "Jaidev",
    age:22,
    city: "Banglore"
}
//normal destructuring where the variable name becomes the name of key
let {sname,age,city} = ob;
alert(sname);
alert(age);
//if u want the variable name to be different than the name of the key
let {sname:studentName,age:studentAge,city:studentCity} = ob;
alert(studentName);
alert(studentAge);
//if u want to give default value then u can assign as shown for mapping a hobby index to a variable studentHobby. note hobby is not a key in the object to the default value is taken into consideration and studentHobby becomes default hobby.
let {sname:studentNameOne,age:studentAgeOne,city:studentCityOne,hobby:studentHobby = "default hobby"} = ob;
alert(studentHobby);
// 1)destructure this object. with default values. empId should be a variable with name employeeId.
let empOb = {empId:123,name:"suraj",hobbies:"coding,reading",age:24,location:"bangalore"};

let {empId:employeeId,name:employeeName,hobbies:employeeHobbies,age:employeeAge,location:employeeLocation} = empOb;
alert(employeeId);
alert(employeeName);
alert(employeeHobbies);
alert(employeeAge);
alert(employeeLocation);

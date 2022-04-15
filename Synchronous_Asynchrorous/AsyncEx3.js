
const promiseObj = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let roll_no = [1,2,3,4,5];
        resolve(roll_no)
        //reject("Data not available")
    },2000);
});
const getBiodata = (indexdata) =>{
    return new Promise((resolve, reject)=>{
        let studentData = [{name: "Anant Thawkar",age: 28,gender: "male",roll_no: 1} ]
        setTimeout((indexdata)=>{
            resolve(`My Roll no. is ${indexdata}. My name is ${studentData.name} and My age is ${studentData.age}`)
        })
    }, 3000, indexdata);
};
const getGender = (name) =>{
    return new Promise((resolve, reject)=>{
        let studentData = [{name: "Anant Thawkar",age: 28,gender: "male",roll_no: 1} ]
        setTimeout((name)=>{
            resolve(`My Roll no. is ${indexdata}. My name is ${studentData.name} and I am alpha ${studentData.gender}`)
        })
    }, 3000, name);
}

async function getData(){
    const roll_noData = await promiseObj;
    console.log(roll_noData);

    const bioData = await getBiodata(roll_noData[1]);
    console.log(bioData);

    const genderData = await getGender(bioData);
    console.log(genderData);
}
getData();
const tinderuser = {}
tinderuser.id=" Aquib"
tinderuser.name= "Aquibiqbal"
tinderuser.loggedin= false



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj3= (obj1, obj2, obj3)
//merging objects==============================
const obj4= Object.assign({},obj1,obj2,obj3)   //1st way
const obj5={...obj1, ...obj2, ...obj3}  // 2nd way
console.log(obj4)

console.log(Object.keys(tinderuser));    // shows output in arrays
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('islogged'));  


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Aquib"
}

//course,courseInstructor
const {courseInstructor: Inst} = course

console.log(Inst);
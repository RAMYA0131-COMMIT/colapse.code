const students = [
    { name: "Ram", age: 20, course: "PGDM" },
    { name: "Meha", age: 22, course: "PGFSD" },
    { name: "Amit", age: 21, course: "PGDM" },
    { name: "Sita", age: 23, course: "PGFSD" },
    { name: "Raj", age: 24, course: "PGDM" },
    { name: "Priya", age: 22, course: "PGFSD" },
    { name: "Karan", age: 25, course: "PGDM" },
    { name: "Anita", age: 21, course: "PGFSD" },
    { name: "Vikram", age: 23, course: "PGDM" },
    { name: "Neha", age: 22, course: "PGFSD" }
   ];
//filter pgfsd student info
const check = ()=>{
    let filterPGFSD = students.filter((item)=> item.course == "PGFSD")
    return filterPGFSD }
console.log(check());
//find user info with they name
const checkUserInfo = (name)=>{
    let find = students.find((a)=> a.name == name)
    if(!find){ return "user not found" }
    return find }

console.log(checkUserInfo("Vikram"));


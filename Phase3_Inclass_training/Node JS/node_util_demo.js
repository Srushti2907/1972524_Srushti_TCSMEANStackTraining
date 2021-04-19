// var obj=require("util");
// let name="raj Deep";
// let age=21;
// // let empInfo={
// //     "id":100,
// //     "name":"Ravi",
// //     "salary":12000,
// //     "skills":["c","java","Python"]
// // }
// // var formatDetails=obj.format("My name is %s and age is %d",name,age);
// // var formatJsonData=obj.format("Employee Details %j",empInfo);
// // console.log(formatDetails);
// // console.log(formatJsonData)

// console.log("My name is "+name+",My age is "+age)//normal
// console.log(obj.format("My name is %s and age is %d",name,age));
// console.log(`My name is ${name},My age is ${age}`);

// var util=require("util")
// var n=10;
// var obj=new Date();
// console.log(util.isPrimitive(n));
// console.log(util.isObject(obj));
// console.log(util.isString("Ravi"));
// console.log(util.isString(n));

var util=require("util");
var fs=require("fs");
var empInfo=require("./empInfo")
// class Employee{
//     constructor(id,name,salary){
//         this.id=id;
//         this.name=name;
//         this.salary=salary;
//     }
//     info(){}
//     display(){}

// }
// let emp=new Employee(1,"Ramesh",16000);
// emp.info();
// emp.display();
let emp1={"id":100,"name":"Ravi"}
// console.log(util.inspect(Employee))
// console.log(util.inspect(emp));
// console.log(util.inspect(emp1));
console.log(util.inspect(empInfo,{showHidden:true}));
// console.log(util.inspect(fs));
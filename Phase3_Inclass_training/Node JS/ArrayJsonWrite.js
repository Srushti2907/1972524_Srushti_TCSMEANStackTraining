let fs=require("fs")
var emp1='{"id":100,"name":"Ravi","salary":12001}';
var emp2='{"id":101,"name":"Ramesh","salary":12002}';
var emp3='{"id":102,"name":"Raju","salary":12003}';
var emp=new Array();
emp.push(emp1);
emp.push(emp2);
emp.push(emp3)
//convert  array object to string
var jsonData=JSON.stringify(emp);
fs.writeFileSync("employee.json",jsonData);
console.log("file written");



let data = fs.readFileSync("employee.json");
console.log(data.toString());
let jsonString = data.toString();
let anotherJSON = JSON.parse(jsonString);
console.log("Number of records are "+anotherJSON.length);
console.log(anotherJSON[0].id);




//covert Json to string

// var empString=JSON.stringify(empJson);
// fs.writeFile("emp.json",empString,(err)=>{
//     if(!err){
//         console.log("data stored in JSON formate")
//     }
// })
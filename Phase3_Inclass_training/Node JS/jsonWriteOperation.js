let fs=require("fs")
var empObj='{"id":100,"name":"Ravi","salary":12001}';
//convert string to object
var empJson=JSON.parse(empObj);
console.log("Id Is"+empJson.id);


//covert Json to string

var empString=JSON.stringify(empJson);
fs.writeFile("emp.json",empString,(err)=>{
    if(!err){
        console.log("data stored in JSON formate")
    }
})
let fs=require("fs");
let obj=require("readline-sync");
module.exports.AddEmpolyee=function addEmployee(){
let n=obj.question("how many input you want to store?")
console.log("you can add the data "+ n)
debugger

for(let i=0;i<n;i++){
let firstName =obj.question("Enter the firstName");
console.log("your firstname is "+firstName);

debugger
let lastName =obj.question("Enter the lastName");
console.log("your lastname is "+lastName);

debugger
let emailId =obj.question("Enter the emailId");
console.log("your id is "+emailId);

debugger



var date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
fs.readFile('record.json', function (err, data) {
    var emp=new Array();
    var emp = JSON.parse(data);
    
    emp.push({firstName},{lastName},{emailId},{date},{month},{year},{hours},{minutes},{seconds})
    

    
    
    fs.writeFile("logRecord.json", JSON.stringify(emp, null,2),() => {})
    debugger
    
    console.log("data added to json file successfully")

        
})
}
}









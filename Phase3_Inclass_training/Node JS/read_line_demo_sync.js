let fs=require("fs");
let obj=require("readline-sync");

let input=obj.question("how many input you want to store?")
console.log("you can add three data "+ input)

let firstName =obj.question("Enter the firstName");
console.log("your firstname is "+firstName);

let lastName =obj.question("Enter the lastName");
console.log("your lastname is "+lastName);

let id =obj.question("Enter the id");
console.log("your id is "+id);

//obj1
let firstName1 =obj.question("Enter the firstName");
console.log("your firstname is "+firstName1);

let lastName1 =obj.question("Enter the lastName");
console.log("your lastname is "+lastName1);

let id1 =obj.question("Enter the id");
console.log("your id is "+id1)

var emp=new Array();
emp.push(firstName);
emp.push(lastName);
emp.push(id);
emp.push(firstName1);
emp.push(lastName1);
emp.push(id1);


var jsonData=JSON.stringify(emp);
fs.writeFileSync("record.json",jsonData);
console.log("file written");

let data = fs.readFileSync("record.json");
console.log(data.toString());
let jsonString = data.toString();
let anotherJSON = JSON.parse(jsonString);
console.log("Number of records are "+anotherJSON.length);




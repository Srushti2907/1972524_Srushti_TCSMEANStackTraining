/*

object :any real world entiry;
for example : car , person, animal, bank

*/
// one way object creation

var empObject={id:100,name :"Ramesh",salary:12000};
document.write("Employee Object <br/>");
document.write("<br/>Id Is"+ empObject.id);
document.write("<br/>name Is"+ empObject.name);
document.write("<br/>salary Is"+ empObject.salary);


//convert object into string format

var empString =JSON.stringify(empObject);
document.write("<br/> Emp object in string format"+empString); 
document.write("<br/>")
document.write("Employeein json format <br/>");
document.write(empString);
document.write("<br/>Id Is"+ empString.id);
document.write("<br/>name Is"+ empString.name);
document.write("<br/>salary Is"+ empString.salary);

//covert string to json format
var empJSoN=JSON.parse(empString);
document.write("<br/>")
document.write("Employee  json format <br/>");
document.write(empJSoN);
document.write("<br/>Id Is"+ empJSoN.id);
document.write("<br/>name Is"+ empJSoN.name);
document.write("<br/>salary Is"+ empJSoN.salary);
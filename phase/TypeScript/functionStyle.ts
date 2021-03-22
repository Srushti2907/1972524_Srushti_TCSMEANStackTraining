//1st function passing parameter with different type of  values.
function empInfo(id :number, name :string,salary:number){

console.log("id is "+id);
console.log("name is "+name);
console.log("salary is "+salary)


}
empInfo(100,"Ravi",12000);

//function must be return string value;

function sayHello(name:string):string{
    return "welcome"+name;

}
console.log(sayHello("Ramesh"));

// pass parameter but no return type
function add(a:number,b:number):void{
let sum =a+b;
console.log(sum);
}

//? means optional parameter
//? from right side and  passing value from left side
function personDetails(id?:number,name?:string,age?:number){
console.log("id is"+id , "name is "+name, "age is "+age)
}
personDetails(124,"srushti",24)
personDetails(125,"himal");
personDetails(126);
personDetails();

// default initialaization parameter means default parameter
// assing the value from right side and passing the value from left side.

function empDetails(id:number=0,name:string="Unknown",age:number=21){
    console.log("id is"+id , "name is "+name, "age is "+age)
    }
    empDetails(124,"srushti",24)
    empDetails(125,"himal");
    empDetails(126);
    empDetails();
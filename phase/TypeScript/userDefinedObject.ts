//ES 5 style
function Employeee(){
    this.fname="Ajay Kumar";
    this.disEmpInfo=function(){
console.log("Employee class function")
console.log("Employee class function"+this.fname)
}
}
 let emp1=new Employeee();
 emp1.disEmpInfo();

//ES^ --- JAVA SCRIPT AS WELL AS TYPE SCRIPT

class Person{
    id:number=100;
disPersonInfo():void{
    console.log("person class function")
    console.log("id is"+this.id)
}
}

let p1=new  Person();
p1.disPersonInfo();
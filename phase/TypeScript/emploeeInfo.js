//class constuctore
// class Employee{
//     id:number=100;
//     name:string="Ravi";
//     salary:number=12000;
//     empInfo():void{
//         console.log("id is "+this.id);
//         console.log("name is "+this.name);
//         console.log("salary is "+this.salary);
//     }
// }
// let emp1=new Employee();
// emp1.empInfo();
//constructor part .
var Employee = /** @class */ (function () {
    function Employee() {
        this.id = 100;
        this.name = "Ravi";
        this.salary = 12000;
        console.log("object created...");
        console.log("id is " + this.id);
        console.log("name is " + this.name);
        console.log("salary is " + this.salary);
    }
    Employee.prototype.disInfo = function () {
        console.log("employee function");
    };
    return Employee;
}());
var emp1 = new Employee();
emp1.disInfo();
// class Employee{
//     id:number;
//     name:string;
//     salary:number
//         constructor(id:number,name?:string,salary?:number){
//             this.id=id;
//             this.name=name;
//             this.salary=salary;
//             console.log("object created...")
//         }
//         disInfo():void{
//         console.log("employee function")
//         console.log("id is"+this.id);
//         console.log("name is"+this.name);
//         console.log("salary is"+this.salary)
//     }
//     }
//     let emp1=new Employee(100,"Ravi",120000);
//     emp1.disInfo();
//     let emp2=new Employee(200,"Ramesh",15000);
//     emp2.disInfo();
//     let emp3=new Employee(200,"Mahesh");
//     emp3.disInfo();
//     let emp4=new Employee(103);
//     emp4.disInfo();
//parameterized constuctore with short cut initialilization
// class Employee{
//             constructor( public id:number, private name?:string, public salary?:number){
//             }
//             disInfo():void{
//             console.log("employee function")
//             console.log("id is"+this.id);
//             console.log("name is"+this.name);
//             console.log("salary is"+this.salary)
//         }
//         }
//         let emp1=new Employee(100,"Ravi",120000);
//         console.log("Id Is"+emp1.id)
//         emp1.disInfo();
//Inheritance example
// class Employee{
//     disEmp(){
//         console.log("employee class function")
//     }
// }
// class Manager extends Employee{
//     disMgr(){
//         console.log("manager class function")
//     }
// }
// let emp1=new Employee();
// emp1.disEmp();
// let mgr1=new Manager();
// mgr1.disMgr();
// mgr1.disEmp();
//Interface example
// interface Emp{
//     id:number;  
//     dis():void     //incomplete functions
// }
// class EmpInfo implements Emp{
//     id:number=100;
//     dis():void{
//         console.log("dis function implemented by emp info class")
//     }
// }
//interface with variable
// interface Employee{
//     id:number;
//     name:string;
//     salary:number;
//     age?:number;
// }
// let emp1:Employee={id:100,name:"Ravi",salary:12000}; // object literal style
// let emp2:Employee={id:101,name:"Ramesh",salary:14000};
// let emp3:Employee={id:103,name:"Mahes",salary:16000,age:21};
// //interface with function(incomplete)
// //interface is use to achieve abstraction
// interface Bike{  //specification
//     speed():void
// }
// class Honda implements Bike{  //implementation
//     speed():void{
//         console.log("60km/hr")
//     }
// }
// class Pulsar implements Bike{
//     speed():void{
//         console.log("90km/hr")
//     }
// }
// //  let bb=new Bike();
// let hh=new Honda();
// let pu=new Pulsar();
// hh.speed();
// pu.speed();

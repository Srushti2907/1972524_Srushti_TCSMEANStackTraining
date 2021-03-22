//ES 5 style
function Employeee() {
    this.fname = "Ajay Kumar";
    this.disEmpInfo = function () {
        console.log("Employee class function");
        console.log("Employee class function" + this.fname);
    };
}
var emp1 = new Employeee();
emp1.disEmpInfo();
//ES^ --- JAVA SCRIPT AS WELL AS TYPE SCRIPT
var Person = /** @class */ (function () {
    function Person() {
        this.id = 100;
    }
    Person.prototype.disPersonInfo = function () {
        console.log("person class function");
        console.log("id is" + this.id);
    };
    return Person;
}());
var p1 = new Person();
p1.disPersonInfo();

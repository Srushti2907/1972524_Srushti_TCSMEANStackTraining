// module.exports.a="welcome to Node JS Module Example";
// module.exports.b="Another simple message";
// module.exports.dis=function(){
//     return "welcome to MY Module example"
// }

// exports.add=function(a,b){
//     return a+b
// }

// let sayHello=(name)=>"welcome to user" + name;
// exports.sayHi=sayHello;

// class Employee{
//     display(){
//         console.log(" display function")
//     }
// }
// exports.Employee=Employee




//with the One module statements.
class Employee{
         display(){
            console.log(" display function")
         }
    }

    let sayHello=(name)=>"welcome to user" + name;
// exports.sayHi=sayHello;
     module.exports={Employee,sayHello}

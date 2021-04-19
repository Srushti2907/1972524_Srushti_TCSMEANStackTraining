//setTimeOut interval

// console.log("Normal statemenet -1st")
// setTimeout(function(){
//     console.log("welcome to Asyn function using Node JS")
// },2000);
// setTimeout(()=>console.log("welcome to asyn function using arrow"),3000)
// console.log("Normal statemenet -2nd");
// console.log("Normal statemenet -3rd")


//setInterval Example
console.log("Normal statemenet -1st")
setInterval(function()  {
    console.log("Normal function again and again")
},2000);
setInterval(() => {
    console.log("Arrow function again and again")
}, 1000);
console.log("Normal statemenet -2nd");
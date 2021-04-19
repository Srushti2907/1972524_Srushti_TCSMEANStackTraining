let fs = require("fs");
var msg="this is Asynchronous message throw FS Module";
fs.writeFile("info1.txt",msg,{flag:"a"},(err)=>{
    if(!err){
        console.log("data store in a file")
    }else{
        console.log("data is not strored in file ")
    }
});

fs.writeFile("info2.txt",msg,{flag:"a"},(err)=>{
    if(!err){
        console.log("data store in a file")
    }else{
        console.log("data is not strored in file ")
    }
});
console.log("done....") //This is not depend on other so it will execute first because of asynchrounus.
console.log("done....")
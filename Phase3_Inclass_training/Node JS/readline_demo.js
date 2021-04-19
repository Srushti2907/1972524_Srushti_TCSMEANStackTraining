let obj=require("readline");
let r1=obj.createInterface({

input:process.stdin,
output:process.stdout

});

 r1.question("Enter the Name ",(name)=>{
    r1.question("Enter the Age",(age)=>{
    console.log("your name is "+ name);
    console.log("your age is "+ age);
    r1.close();
})
})
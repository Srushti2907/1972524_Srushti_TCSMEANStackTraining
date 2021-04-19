let fs=require("fs"); 
let data=fs.readFileSync("infor.txt");
console.log(data.toString()); // convert buffer data into string format
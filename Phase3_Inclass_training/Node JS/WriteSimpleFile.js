let fs=require("fs");  //loaded core fs module
let msg="\n next msg";
fs.writeFileSync("infor.txt", msg, {flag:'a'});
console.log("data stored in file successfully....")
console.log("done....")
let http =require("http");
let url=require("url");
let port =9999;
let server=http.createServer((req,res)=>{
let urlDetails=req.url;
let data=url.parse(urlDetails,true).query;

var name= data.name;
var age =data.age;
res.end("Welcome to http module  "  +  name + " Your age is "+ age)


});

server.listen(port,()=>console.log(`server is running on ${port}`));

let http =require("http");
 let server = http.createServer((request,response)=>{
response.end("Welcome to Simple client Server application")
})
server.listen(9999,()=>console.log("Server is running on port number 9999"));
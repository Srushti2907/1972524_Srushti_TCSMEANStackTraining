let http =require("http");
let port=9999;
let server = http.createServer((request,response)=>{
     if(request.url=="/aboutus"){
      response.write("welcome to about page")
     }
     else if(request.url=="/contactus"){
        response.write("welcome to contact page");
     }
     else if(request.url=="/login"){
        response.write("welcome to login page");
    }
    else{
        response.write("Not Found Page");
    }
    response.end();
})
server.listen(port,()=>console.log(`Server is running on port number ${port}`));
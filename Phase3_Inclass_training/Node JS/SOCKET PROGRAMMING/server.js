let net =require("net");   //networking 
let server=net.createServer();

server.on("connection",(socket)=>{
    console.log("new client coonected ....");
    socket.on("data",(msg)=>{
        console.log(msg.toString())
    });
});
server.listen(9090,()=> console.log("Server is running on port number 9090"))
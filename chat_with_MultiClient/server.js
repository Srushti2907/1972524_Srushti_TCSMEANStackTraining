let app =require("express")();
let http = require("http").Server(app);  //to load the library we have run port number using http module
let io = require("socket.io")(http);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=>{
    console.log("client connected to chat-box application")

socket.on('chat',(name,message)=>{
        console.log(name)
        console.log(message)
        io.emit('chat',name ,message)
       
    })
})


http.listen(9090,()=>console.log('server running on port number 9090'))
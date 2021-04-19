var app = require("express")();
//loading express-ws and creating  the refernce ws module with help of app refernce
var ws =require("express-ws")(app);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.ws("/",(socket,res)=>{
    socket.send("message from Server...")
    
})
app.on("open",(data)=>{
    console.log("data.toString()")
})
app.listen(9090,()=>console.log("websocket server running on port number 9090"))


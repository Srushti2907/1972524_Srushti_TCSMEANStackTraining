let app =require("express")();
let http = require("http").Server(app);  //to load the library we have run port number using http module
let io = require("socket.io")(http);
var bodyParser=require('body-parser');
var obj=require('mongoose');
obj.Promise=global.Promise;
var url= "mongodb://localhost:27017/meanstack";
app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true}))
const mongooseDbOption={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongooseDbOption);          //ready to connect
let db= obj.connection;  //connected to database
db.on("Error",(err)=>console.log(err));
db.once("open",()=>{

 let MessageSchema=obj.Schema({
    name1 : String,
    message1 : String
})
let Message = obj.model("",MessageSchema,"chatLog")


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=>{
    console.log("client connected to chat-box application")

socket.on('chat',(name,message)=>{
         console.log(name)
         console.log(message);
     var M1= new Message({name1:name,message1:message})
     M1.save(Message,function(err,result){
            if(!err){
                console.log("Messages Stored Succesfully"+result)
            }
            else{
                console.log("Message Didn't Store")
            }
            obj.disconnect(); 
        


        })

})

})         
          
       
    



  

});
http.listen(9090,()=>console.log('server running on port number 9090'))

//first way
// let express =require("express");
// let app =express()

//2nd way
let app= require("express")();
let bodyParser=require("body-parser");
let port=9090;
//enable body part data
app.use(bodyParser.urlencoded({extended:true}))
//app.use(bodyParser.json())  enable json data
app.get("/",(req,res)=>{
    
    res.sendFile(__dirname+"/login.html")
})
app.post("/checkLogin",(req,res)=>{
    let user =req.body.user;
    let pass=req.body.pass;
    // res.send("post Method called  "+user);
    if(user==="raj"&& pass=="123"){
        res.send("successfully login")
    }else{
        res.send("Failure , try again")
    }
})

app.listen(port,()=>console.log(`Server running on port number ${port}`))
let app =require("express")();
let bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({urlencoded:true}));
//index.html get
//retrive all course get
//create ,delete and update post
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/storeDetails",(req,res)=>{
    /*
    retrive data from body part 
    connected to databse
    store in databse
    res.sendFile(__dirname+"/Index.html")
    */
})
app.post("/deleteDetails/:cid",(req,res)=>{
    /*
    retrive data from body part 
    connected to databse
    store in databse
    res.sendFile(__dirname+"/Index.html")
    */
})
//fetch all data 
app.get("/get",(req,res)=>{
/*
retrive record from mongodb and store in array
res.json(arrayName)
*/
})

app.listen(9090,()=>console.log("running.."))
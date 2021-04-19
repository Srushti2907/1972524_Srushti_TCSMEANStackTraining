let express= require("express");     //load the module
let app =express()    //creating the reference of express module
let port=9090;
let bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))  //enable any format data
app.use(bodyParser.json())   // enable json data
//Get Methods
//http://localhost:9090
app.get("/",(req,res)=>{
res.send("welcome to Express Module");
})
//http://localhost:9090/aboutus
app.get("/aboutus",(req,res)=>{
    res.send("welcome to aboutUs page")
})
//http://localhost:9090/contactus
app.get("/contactus",(req,res)=>{
    res.send("welcome to contactUs page")
})
//http://localhost:9090/login

app.get("/login",(req,res)=>{
    res.send("welcome to login page")
})
//passing single value
//http://localhost:9090/singleQuery?name=Ajay
app.get("/singleQuery",(req,res)=>{
    let name=req.query.name;
res.send("Welcome user "+  name)
})

//passing multiple value using query param
//http://localhost:9090/multiple?id=100&name=Ajay&salary=25000
app.get("/multiple",(req,res)=>{
    let id=req.query.id;
    let name=req.query.name;
    let salary=req.query.salary;
    salary=eval(salary)+5000; //eval it is use to covert string to number
res.send(`Your Id is ${id} <br/>  name is ${name} <br/> salary is ${salary}`)
})

//passigng single value using path param
//http://localhost:9090/singlePath/Mahesh
app.get("/singlePath/:name",(req,res)=>{
    let userName = req.params.name;
    res.send("welcome user using path param  "+userName)
})

//passong multiple value using path param
//http://localhost:9090/multiplePath/100/Ravi/25000
app.get("/multiplePath/:id/:name/:salary",(req,res)=>{
    // res.send(req.params);
    let userId = req.params.id;
    let userName = req.params.name;
    let userSalary = req.params.salary;
    res.send(` ${JSON.stringify(req.params)} <br/>UserId is ${userId} <br/> UserName is ${userName} <br/> UserSalary is ${userSalary}`)
})

//post without passing any value with empty path

app.post("/",(req,res)=>{
    res.send("welcome to post method")
})

//http://localhost:9090/storeData
app.post("/storeData",(req,res)=>{
 let name= req.body.name
    res.send("welcome to Node js post method"+name);
})

app.listen(port,()=>console.log(`Server is ruuning on port number${port}`))
let obj =require("mongoose");  //load the module 
obj.Promise=global.Promise;   //creating the reference 
let url ="mongodb://localhost:27017/meanstack";
const mongooseDbOption={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongooseDbOption);          //ready to connect
let db= obj.connection;    //connected to database
db.on("Error",(err)=>console.log(err));
db.once("open",()=>{
//defined the schema
let ProductSchema=obj.Schema({
_id:Number,
pname:String,
price:Number

});
//Creating Model using schema;
let Product =obj.model(" ",ProductSchema,"product")

//creating reference using model;
let p1=new Product({_id:102,pname:"Laptop",price:75000});
p1.save((result,err)=>{
    if(!err){
        console.log("record inserted successfully"+result)
    }
    else{
        console.log(err)
    }
    obj.disconnect();    //close the connection

})


})
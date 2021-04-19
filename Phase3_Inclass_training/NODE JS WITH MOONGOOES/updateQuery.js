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
let Product=obj.model(" ",ProductSchema,"product")

//connection reference using model
//Product.updateMany({_id:102},{$set:{pname:"Tablet",price:"50000"}},(err,result)=>{


Product.updateMany({price:{$gt:50000}},{$set:{price:"78000"}},(err,result)=>{
    if (!err){
        if(result.nModified>0){
        console.log("updated Successfully")
        }
    else{
        console.log("not updated yet")
    }
}
    obj.disconnect();


})



})
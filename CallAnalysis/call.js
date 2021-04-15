let obj =require("mongoose");  //load the module 
obj.Promise=global.Promise;   //creating the reference 
let url ="mongodb://localhost:27017/meanstack";
let fs =require("fs")
let callData = fs.readFileSync('call_data.json');  
 let users = JSON.parse(callData);  
const mongooseDbOption={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongooseDbOption);          //ready to connect
let db= obj.connection;    //connected to database
db.on("Error",(err)=>console.log(err));
db.once("open",()=>{
let ProductSchema=obj.Schema({
    _id:Number,
    source:String,
    destination:String,
    sourceLocation:String,
    destinationLocation:String,
    callDuration:String,
    roaming:String,
    callCharge:String

});

//Creating Model using schema;
let Product =obj.model(" ",ProductSchema,"calls")


//creating reference using model;
for(item of users){
let p1=new Product({


    _id:item._id,
    source:item.source,
    destination:item.destination,
    sourceLocation:item.sourceLocation,
    destinationLocation:item.destinationLocation,
    callDuration:item.callDuration,
    roaming:item.roaming,
    callCharge:item.callCharge
});
p1.save((result,err)=>{
    if(!err){
        console.log("record inserted successfully"+result)
    }
    else{
        console.log(err)
    }
    
    
    //close the connection

})
}


})
//load the mongoDb module as well as as creating reference of mongobd using MongoClient
var mongoClient = require("mongodb").MongoClient;
/*
let mongodb=require("mongodb");
let mongoClient=mongodb.MongoClient;
*/

let url="mongodb://localhost:27017"
mongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
    let db =client.db("meanstack");
    if(!err){
        console.log("connected successfully")
    }
    else{
        console.log("Error"+err)
    }
    client.close();
})

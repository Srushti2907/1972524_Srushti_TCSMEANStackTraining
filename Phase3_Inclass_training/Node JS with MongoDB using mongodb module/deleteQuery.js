let mongoClient= require("mongodb").MongoClient
let url="mongodb://localhost:27017";


mongoClient.connect(url,{useUnifiedTopology: true},(err1,client)=>{
    if(!err1){
        let db=client.db("meanstack");
        db.collection("product").deleteOne({_id:100},(err2,result)=>{
            if(!err2){
            if(result.deletedCount>0){
                console.log("Record Deleted successfully")
              }else{
          console.log("Record didn't Delete")
         }
}
            client.close()
        });

        
        
        
    }

})
let app= require("express")();
let mongoClient= require("mongodb").MongoClient
let url="mongodb://localhost:27017";
let port=9090;

var str=[];

mongoClient.connect(url,{useUnifiedTopology: true},(err1,client)=>{
    if(!err1){
        let db=client.db("meanstack");
        let cursor =db.collection("product").find({price:{$gt:60000}});

        
        cursor.each((err2,doc)=>{
            if(!err2){
            if(doc!=null){
                str.push(doc)
            }
        }
        else{
                console.log(err2.message)
            }
            client.close()
        
             
        })
    }
    else{
        console.log(err)
    }
        
    


})

app.get('/',(req,res)=>{
    res.json(str)
})



app.listen(port,()=>console.log(`Server running on port number ${port}`))
var app=require("express")();
// var app=express()
var bodyParser=require("body-parser");

const obj = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
const mongooseDbOption={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

obj.connect('mongodb://localhost:27017/meanstack',mongooseDbOption);


var db=obj.connection;

db.on("Error",(err)=>console.log(err));
db.once('open',()=>{
    var Coursedata = obj.Schema({
		_id: Number,
		courseName:String,
		description:String,
		amount:Number
    });
var Course = obj.model("",Coursedata,"details")
app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    res.sendFile(__dirname+"/index.html");
    })
app.get('/add',(req,res)=>{
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    res.sendFile(__dirname+"/add.html");
    })

app.post('/storeDetails',(req,res)=>{
	var Courses = new Course(req.body);

	
Courses.save(Course,function(err, result){
		
        if(!err){
                res.send("Record stored successfully")
            }else{
                res.send("Record Didn't store")
            }
			
	});
		
     res.end();
  res.sendFile(__dirname+"/index.html");
})

app.get('/update',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    res.sendFile(__dirname+"/update.html");
    })

app.post('/updateDetails', function(req,res){
	
    
      let _id=req.body._id;
	let amount=req.body.amount
    
	
    Course.updateOne({_id:_id},{$set:{amount:amount}},function(err, result){
		
        if(!err){
                res.send("Record updatedd successfully")
            }else{
                res.send("Record Didn't update")
            }
			
	});
		
    
    res.sendFile(__dirname+"/index.html");
    res.end();
})

app.get('/delete',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    res.sendFile(__dirname+"/delete.html");
    })

app.post('/deleteDetails', function(req,res){
	let _id=req.body._id;
	
Course.deleteOne({_id:_id},function(err, result){
        
        
        if(!err){
                res.send("Record Deleted successfully")
            }else{
                res.send("Record Didn't Delete")
            }
			
	});
    
    // res.sendFile(__dirname+"/index.html");
    // res.end();
})


// app.get('/fetch',function(req,res){
//     // res.set({
//     //     'Access-control-Allow-Origin': '*'
//     //     });
//     //  res.sendFile(__dirname+"/fetch.html");
//     })

 app.get('/fetch',(req,res)=>{
    
        
        Course.find({})
            .then(fetch => {       
               if(!fetch) {       
                  res.status(404).send();      
               }
               res.send(fetch);
             }).catch((e) => {      
                res.status(400).send(e);    
             });
        });
//     Course.find({}).toArray(function(err, result){
// 		res.send(result)
// });
    
    
//      res.end();
// })




 });

app.listen(8000,()=>console.log("Server running on port number 8000"))

console.log("server listening at port 8000");


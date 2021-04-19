//  let app =require("express")();
//  let bodyParser=require("body-parser");
// var mongodb = require('mongodb');
// var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017',{ useUnifiedTopology: true })
   


// app.use(bodyParser.urlencoded({extended:true}));  //enable body part
// app.use(bodyParser.json());  //json data
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })

// app.post("/store",(req,res)=>{
//     dbConn.then(function(db) {
//         // delete req.body._id; // for safety reasons
//         //  db=client.db("meanstack");
//         db.collection('feedbacks').insertOne(req.body);
//     });    
//     res.sendFile(__dirname+"/add.html");
// });

// app.get('/fetch.html', function(req, res) {
//     dbConn.then(function(db) {
//         db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
//             res.status(200).json(feedbacks);
//         });
//     })
// })






// app.listen(8000,()=>console.log("running on 8000"))

// var express=require("express");
// var bodyParser=require("body-parser");

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/meanstack');
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
// 	console.log("connection succeeded");
// })

// var app=express()


// app.use(bodyParser.json());
// //  app.use(express.static('/'));
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

// app.post('/add', function(req,res){
// 	var courseId = req.body.courseId;
// 	var courseName =req.body.courseName;
// 	var description = req.body.description;
// 	var amount =req.body.amount;

// 	var data = {
// 		"courseId": courseId,
// 		"courseName":courseName,
// 		"description":description,
// 		"amount":amount
// 	}
// db.collection('details').insertOne(data,function(err, collection){
// 		if (err) throw err;
// 		console.log("Record inserted Successfully");
			
// 	});
		
//     //  return res.redirect('\index.html');
//     res.sendFile(__dirname+"/index.html");
// })


// app.get('/',function(req,res){
// res.set({
// 	'Access-control-Allow-Origin': '*'
// 	});
// // return res.redirect('/add.html');
// return res.sendFile(__dirname+"/add.html");
// }).listen(3000)


// console.log("server listening at port 3000");



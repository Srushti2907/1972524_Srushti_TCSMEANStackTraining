//load all require modules
let app =require("express")();
let bodyParser=require("body-parser");
let mongoose =require("mongoose");
let cors=require("cors")


//Database URL Details 
let url="mongodb://localhost:27017/meanstack";

//middleware :enable data from post method
app.use(bodyParser.urlencoded({extended:true}));  //enable body part
app.use(bodyParser.json());  //json data
app.use(cors());

//Database connection without warning

const mongooseDbOption={
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);   //ready to connect

//Connect the data
mongoose.connection
//link to router module
var Product=require("./Router/product.router.js");
//middleware

//http://localhost:9090/product/allProductDetails
//http://localhost:9090/product/retriveProductById/102
//http://localhost:9090/product/storeProductDetails

app.use("/product",Product)





app.listen(9090,()=>console.log("Server running on port number 9090"))






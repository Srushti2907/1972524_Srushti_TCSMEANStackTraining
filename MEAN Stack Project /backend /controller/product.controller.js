let ProductModel=require("../model/product.model.js");


//Retrive all product detals
let getProductDetails=(req,res)=>{
    ProductModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })

}


let getProductById=(req,res)=>{
    let pid=req.params.pid;     //passing through path param
    ProductModel.find({_id:pid},(err,data)=>{
        if(!err){
            res.json(data);    //return array
            //res.json(data[0]) //return only one object
        }
    })
}


let storeProductDetails=(req,res)=>{
    let product = new ProductModel({
        _id:req.body.pid,
        pname:req.body.pname,
        price:req.body.price,
    });
    product.save((err,result)=>{
        if(!err){
            res.send("Record stored successfully"+result)
            //res.json("msg":"Record Stored successfully")
        }else{
            res.send("Record Didn't store"+err)
        }

    
    })

}

let deleteProductById=(req,res)=>{
    let pid=req.params.pid;
    ProductModel.deleteOne({_id:pid},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
            res.send("Record deleted Successfully")
            }else{
                res.send("Record is not available")
            }
        }
        else{
            res.send("Error generated "+err);
        }
    })
}

let updateProductByPrice=(req,res)=>{
    let pid=req.body.pid;
    let updatedprice=req.body.price
    ProductModel.updateMany({_id:pid},{$set:{price:updatedprice}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
            res.send("record updated succesfully"+result)
            }
            else{
                res.send("Record is not available")
            }
        }
        else{
            res.send("Error generated "+err);
        }
    })
}




module.exports={getProductDetails,getProductById,storeProductDetails,deleteProductById,updateProductByPrice}
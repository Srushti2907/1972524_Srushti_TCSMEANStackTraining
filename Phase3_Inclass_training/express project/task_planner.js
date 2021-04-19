let http =require("http");
let url=require("url");
let port =9999;
//create array Task array
let server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url!="/favicon.ico"){
        if(req.url=="/store"){
       let data =url.parse(urlDetails,true).query;
       //take the value from url
       //conert to object
       //store records in object using push method
       //covert to string
       //store using fs module
        }else if(req.url=="/delete"){
//read from file
//convert to json
//check value using iterate or loop
//delete using array method
//store in file using fs module
//if task id not available display error message
        }else if(req.url=="/display"){
            //read from file
            //convert to json
            //create tableData variable using backticks
            /*
            <table>
            <tr>
            <td>${variableName}</td>
            </tr>
            </table>
            res.end
            */
            
        }

    }

res.end("welcome")
});

server.listen(port,()=>console.log(`server is running on ${port}`));

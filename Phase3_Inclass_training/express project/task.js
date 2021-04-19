let fs=require("fs");
let http = require("http");
let url = require("url");
let port = 9999;

let loginInfo = `
<fieldset>
 <h2>Add Task </h2>
 <form action="/store" method="get">
 <label>empId</label>
 <input type="text" name="empId"/><br/>
 <label>taskId</label>
 <input type="text" name="taskId"/><br/>
 <label>task</label>
 <input type="text" name="task"/><br/>
 <label>deadline</label>
<input type="text" name="deadline"/><br/>
 <input type="submit" value="add"/>
 <br><br><br>
  </fieldset>
 </form>
`
let deleteInfo=`

<form action="/delete" method="POST">
  <fieldset>
    <h3>Delete an TaskId</h3>
    <label>Task ID</label>
    <input type ="text" id = 'taskId' name="taskId" required>
    <br><br>
    <button type ="submit">Delete</button>
    <br><br><br>
  </fieldset>
 </form>
`
let server = http.createServer((req,res)=> {
    
    var pathInfo = url.parse(req.url,true).pathname;
    if(req.url=="/"){
    res.setHeader("content-type","text/html");  // by default data consider as a html 
    res.end(loginInfo);
    }else if(pathInfo=="/store"){
     var data = url.parse(req.url,true).query;
    data.empId;
    data.taskId;
   data.task;
   data.deadline;

       res.setHeader("content-type","text/html");  // by default data consider as a html 
       res.end(loginInfo);
       fs.readFile('task.json', function (err, details) {
           
        var emp= new Array();
        var emp=JSON.parse(details);
        emp.push({data})
       fs.writeFile("task.json", JSON.stringify(emp),()=> {
           
       })

        })
        
    
    res.end();
    }else if(req.url=="/delete"){
        var data = url.parse(req.url,true).query;
        data.taskId;  
        res.setHeader("content-type","text/html");  // by default data consider as a html 
       res.end(deleteInfo);   
       fs.readFile('task.json', function (err, details1) {
           
        var emp= new Array();
         var emp=JSON.parse(details1);
        //  details1=emp.filter(obj=>obj.taskId!==1)
        
         for (let item of emp) {
             console.log(item);

           }
           delete emp['taskId'];

           emp.push({data})
       fs.writeFile("task.json", JSON.stringify(emp),()=> {
           
       })

        })
    }
})
server.listen(port,()=>console.log(`running on port num ${port}`));


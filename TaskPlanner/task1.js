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
<input type="date" name="deadline"/><br/>
 <input type="submit" value="add"/>
 <br><br><br>
  </fieldset>
 </form>
`

let server = http.createServer((req,res)=> {
    
    var pathInfo = url.parse(req.url,true).pathname;
    if(req.url=="/"){
    res.setHeader("content-type","text/html");  // by default data consider as a html 
    res.end("welcome");
    }
    else if(pathInfo=="/store"){
      var data = url.parse(req.url,true).query;
    res.setHeader("content-type","text/html");  // by default data consider as a html 
       res.end(loginInfo);
       fs.readFile('task.json', function (err, details) {
           
        var emp= new Array();
        var emp=JSON.parse(details);
        emp.push(data)
       fs.writeFile("task.json", JSON.stringify(emp),()=> {
           
       })

        })
        
    
    res.end();
    }
    else if(req.url=="/delete"){

      let deleteInfo=`
        <form action="/delete" method="POST">
          <fieldset>
            <h3>Delete an TaskId</h3>
            <label>Task ID</label>
            <input type ="text" id = "taskId" name="taskId" required>
            <br><br>
            <button type ="submit">Delete</button>
            <br><br><br>
          </fieldset>
         </form>
        `
      
    var data = url.parse(req.url,true).query;
    
     
       console.log(data)
    // var removeUser = taskId;
   var data1 = fs.readFileSync('task.json');
   var json = JSON.parse(data1);
//    var users = json;
//  json = users.filter((user) => { return user.taskId !== removeUser });

let taskId=0;
       if(deleteInfo.taskId == json.taskId){
       json.splice(taskId,1)
       }else{
           console.log("Invalid Task Id")
       }
fs.writeFileSync('task.json', JSON.stringify(json, null, 2));

res.setHeader("content-type","text/html");  // by default data consider as a html 
res.end(deleteInfo);

  
}
    else if(req.url=="/display"){

      let rdata = fs.readFileSync("task.json");
// console.log(data.toString());

let jsonString = JSON.parse(rdata);
console.log(jsonString);
var tableDataVariable =
`<table border ="1">
<tr>
<th>Emp Id</th>
<th>Task Id</th>
<th>Task</th>
<th>Deadline</th>
</tr>
`
for(let i =0;i<jsonString.length;i++){
const element =jsonString[i];

tableDataVariable +=
`
<tr>
<td>${element.empId}</td>
<td>${element.taskId}</td>
<td>${element.task}</td>
<td>${element.deadline}</td>

</tr>
`
}
tableDataVariable += `</table>`
res.end(tableDataVariable);
    
      }

})

server.listen(port,()=>console.log(`running on port num ${port}`));


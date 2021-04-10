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

let deleteInfo=`
<form action="/delete" method="get">
<h2>Delete Task</h2>
<label>Task ID: </label>
<input type ="text" name="taskId" required>
<br>
<input type="submit" value="Delete">
<input type="reset" value="Reset">


</form>
<br>
<a href="/">Add Task</a><br>
<a href="/display">Display All Tasks</a> 
<br/>`;


let taskStr = fs.readFileSync("task.json").toString();
    

let server = http.createServer((req,res)=> {
  res.setHeader("content-type","text/html");
  let items = new Array();
  if (taskStr != "") {
    items = JSON.parse(taskStr);
}
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
    else if (req.url == "/delete") {              
      res.write(deleteInfo);}

    else if(req.url.startsWith("/delete?")){
       res.write(deleteInfo);
            // take data from url
            let urlDetails = req.url;
            let data = url.parse(urlDetails, true).query;
            
            let flag = false;
            for (let i = 0; i < items.length; i++) {
                if (items[i].taskId == data.taskId) {
                    items.splice(i, 1);
                    flag = true;
                }
            }
            if (!flag) {
                res.write("Task ID not found");
            } else {
                res.write("Task Deleted Successfully");
            }
           
            updated_tasks = JSON.stringify(items);
            fs.writeFileSync("task.json", updated_tasks);
      
    
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


res.end();

})

server.listen(port,()=>console.log(`running on port num ${port}`));





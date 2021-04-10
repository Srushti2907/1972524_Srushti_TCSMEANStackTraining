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

        
        // var data = url.parse(req.url,true).query;
        
         
        //    console.log(taskId)
        //   var removeUser = "deleteInfo.taskId";
      //   var data1 = fs.readFileSync('task.json');
      //  let item =new Array()
      //  var json = JSON.parse(data1);
    //    let emp=new Array();
    //    emp.push(data1)
      // let taskId=0;
      // for(i=0;i<item.length;i++){
      //  if(item[i].taskId == json.taskId){
      //  json.splice(taskId,i)
      //  }
      //  else{
      //      console.log("Invalid Task Id")
      //  }
      // }
    //    var users = json;
    //  json = users.filter((user) => { return user.taskId !== removeUser });
    // res.setHeader("content-type","text/html");  // by default data consider as a html 
    //       res.end(deleteInfo);
    // fs.writeFileSync('task.json', JSON.stringify(json, null, 2));
    
    
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




// let url = require("url");
// let http = require("http");
// let fs = require("fs");
// let port = 9090;

// let addTask = `
//     <h2>Add Tasks</h2>
//     <form action="" method="get">
//         <label>Emp ID: </label>
//         <input type="text" name="empId"/><br/>
//         <label>Task ID: </label>
//         <input type="text" name="taskId"/><br/>
//         <label>Task: </label>
//         <input type="text" name="task"/><br/>
//         <label>Deadline: </label>
//         <input type="date" name="deadline"/><br/>
//         <input type="submit" value="Add Task">
//         <input type="reset" value = "Reset">
//     </form>
//     <br/>
//     <a href="/delete">Delete Task</a>
//     <a href="/display">Display All Tasks</a>
//     <br/>
// `;

// let deleteTask=`

// <form action="/delete" method="get">
//     <h2>Delete Task</h2>
//     <label>Task ID: </label>
//     <input type ="text" name="taskId" required>
//     <br>
//     <input type="submit" value="Delete">
//     <input type="reset" value="Reset">
    
  
//  </form>
//  <br>
//  <a href="/">Add Task</a><br>
//  <a href="/display">Display All Tasks</a> 
//  <br/>
// `;

// let TaskTable = `
// <h2>Display ALl Tasks</h2>
//     <table>
//         <thead>
//             <tr>
//                 <th>Employee ID</th>
//                 <th>Task ID</th>
//                 <th>Task Description</th>
//                 <th>Deadline</th>
//             </tr>
//         </thead>
//         <tbody>        
// `

// let OptionTable = `
//         </tbody>
//     </table>
//     <br>
//     <a href = "/">Add Task</a>
//     <br>
//     <a href="/delete">Delete Task</a>
//     <br>
// `;


// let server = http.createServer((req, res) => {
//     res.setHeader("content-type", "text/html");

//     // read previous tasks from JSON and store it in an array
//     let taskStr = fs.readFileSync("tasks.json").toString();
//     let items = new Array();
//     if (taskStr != "") {
//         items = JSON.parse(taskStr);
//     }

//     if (req.url != "/favicon.ico") {            
//         if (req.url == "/") {                  
//             res.write(addTask);
//         } else if (req.url.startsWith("/?")) {  // Add Task page after a task has been added
//             res.write(addTask);
            
            
//             let data = url.parse(req.url, true).query;
//             //make task id unique by removing redundant tasks
//             let redundant_task = false; //assume no duplicate tasks
//             for (let i = 0; i < items.length; i++) {
//                 if (items[i].taskId == data.taskId) {
//                     redundant_task = true;
//                 }
//             }
//             if (redundant_task) {
//                 res.write("Task ID already exists")
//             } else if(data.taskId == "") {
//                 res.write("Missing Task ID")
//             } else {
//                 // convert data to task
//                 let task = { "empID": data.empId, "taskID": data.taskId, "Task": data.task, "deadline": data.deadline };
//                 // store task in array using push
//                 items.push(task);
//                 res.write("Task Added Successfully");
//             }
            
//             updated_tasks = JSON.stringify(items);

//             fs.writeFileSync("tasks.json", updated_tasks);
//         } else if (req.url == "/delete") {              
//             res.write(deleteTask);
//         } else if (req.url.startsWith("/delete?")) {    // Delete Task page after a task has been deleted
//             res.write(deleteTask);
//             // take data from url
//             let urlDetails = req.url;
//             let data = url.parse(urlDetails, true).query;
            
//             let flag = false;
//             for (let i = 0; i < items.length; i++) {
//                 if (items[i].taskId == data.taskId) {
//                     items.splice(i, 1);
//                     flag = true;
//                 }
//             }
//             if (!flag) {
//                 res.write("Task ID not found");
//             } else {
//                 res.write("Task Deleted Successfully");
//             }
           
//             updated_tasks = JSON.stringify(items);
//             fs.writeFileSync("task.json", updated_tasks);
//         } else if (req.url == "/display") { 
            
//             res.write(TaskTable);
            
//             for (let i = 0; i < items.length; i++) {
//                 let row = `
//                     <tr>
//                         <td>${items[i].empId}</td>
//                         <td>${items[i].taskId}</td>
//                         <td>${items[i].task}</td>
//                         <td>${items[i].deadline}</td>
//                     </tr>
//                 `
//                 res.write(row);
//             }
//             res.write(OptionTable);
//         }
//     }
//     res.end();
// });

// server.listen(port, ()=>console.log(`Server running on port ${port}`));
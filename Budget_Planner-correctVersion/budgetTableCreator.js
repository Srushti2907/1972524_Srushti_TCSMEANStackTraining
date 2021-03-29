var dataObject =[];

// creation of the "Submit" button
function submitData(){
    var data = readFormData();
    insertNewData(data); //insert new data into cell
    dataObject.push(data); //push data into dataObject
}

// stores data into JSON
function storeInSession() {
    sessionStorage.setItem("dataStorage",dataObject)
}

// retrieves data from JSON
function retrieveFromSession() {
    var obj = sessionStorage.getItem("dataStorage");
    console.log(obj);
}

// reads data from user input
function readFormData() {
    var obj = {}  // empty object
    // read user input
    obj.clientName = document.getElementById("clientName").value; // read the client name
    obj.projectName = document.getElementById("projectName").value; // read the project name
    obj.budget = document.getElementById("budget").value; // read the budget
    // store data in JSON file
    console.log(obj);
    return obj;
}

// inserts new data into cells
function insertNewData(data){
 var table = document.getElementById("newData")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // row created

 var clientNameCell = newRow.insertCell(0);  // left cell
 clientNameCell.innerHTML=data.clientName;   // value of client name created

 var projectNameCell = newRow.insertCell(1);  // center cell
 projectNameCell.innerHTML=data.projectName;  // value of project name created

 var budgetCell = newRow.insertCell(2);  // right cell
 budgetCell.innerHTML=data.budget;       // value of budget amount created
}

// calculates the budget
function calculateBudget(){
 var table = document.getElementById("totalBudget")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // row created

 var cell1 = newRow.insertCell(0);          // cell created
 cell1.innerHTML=data.budget;                 // value placed
}

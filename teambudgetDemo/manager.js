var empData=[];
function storeInSession() {
   // localStorage.setItem("empInfo",JSON.stringify(empData));
   sessionStorage.setItem("empInfo",JSON.stringify(empData));
}
function retrieveFromSession() {
    //var obj = JSON.parse(localStorage.getItem("empInfo"));
    var obj = JSON.parse(sessionStorage.getItem("empInfo"));
    console.log(obj);
}
function onFormSubmit() {
    var formData = readData();
    insertNewRecords(formData);
    resetForm();
    empData.push(formData);  
    console.log(empData)
}
function readData() {
    var formData={};
    formData.clientName=document.getElementById("clientName").value;
    formData.projectName = document.getElementById("projectName").value;
    formData.Budget = document.getElementById("Budget").value;

    
    return formData;
}
function insertNewRecords(formData) {
    var table = document.getElementById("employeeDetails");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.length);
    var cell1=newRow.insertCell(0);  // cell created
   cell1.innerHTML=formData.clientName;  //value placed

var cell2=newRow.insertCell(1);  // cell created
cell2.innerHTML=formData.projectName;  //value placed

var cell3=newRow.insertCell(2);  // cell created
cell3.innerHTML=formData.Budget; 

 
}
function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("employeeDetails").deleteRow(row.rowIndex);
}
var data;
function updateRec(data){
    this.data = data;
    var row = data.parentElement.parentElement;
    var cells = row.getElementsByTagName("td");
    var clientName = cells[0].innerHTML;
    var projectName = cells[1].innerHTML;
    var Budget =  cells[2].innerHTML;
    document.getElementById("clientName").value=clientName;
    document.getElementById("projectName").value=projectName; 
    document.getElementById("Budget").value=Budget; 
    document.getElementById("B1").value="Update Record"  
}
function resetForm() {
    document.getElementById("clientName").value="";
    document.getElementById("projectName").value="";  
    document.getElementById("Budget").value=""; 
}
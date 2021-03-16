var empObj=[];
localStorage.setItem("empInfo",JSON.stringify([]))
function storeInSession(empObj){
    
    localStorage.setItem("empInfo",JSON.stringify(empObj));
    
}
function retriveFromSession(){
    var obj=JSON.parse(localStorage.getItem("empInfo"));
    return obj;
    // console.log(obj);
}





  //storeInSession(empObj);

function onFormSubmit(){
    // var obj=readFormData()
    // var data=JSON.stringify(obj);
    var data=readFormData();
    var tableEntries=retriveFromSession();
    // const newTableEntries=[...tableEntries,data]
    console.log(tableEntries);
    tableEntries.push(data)
     
    // storeInSession(newTableEntries);
    storeInSession(tableEntries);
    
 insertNewRecord(data);
   resetData();
//    empObj.push(data);// in empObj store the data
}

function readFormData(){

    var obj={} 
    
    obj.clientName=document.getElementById("clientName").value;
    obj.projectName=document.getElementById("projectName").value;
    obj.Budget=document.getElementById("Budget").value;
    console.log(obj);
    
    return obj;
    
}
function insertNewRecord(data){
var table=document.getElementById("programManager")
var body =table.getElementsByTagName("tbody")[0];
var newRow=body.insertRow(body.length);//row created


var cell1=newRow.insertCell(0);  // cell created
cell1.innerHTML=data.clientName;  //value placed

var cell2=newRow.insertCell(1);  // cell created
cell2.innerHTML=data.projectName;  //value placed

var cell3=newRow.insertCell(2);  // cell created
cell3.innerHTML=data.Budget; 

}

function resetData(){
   document.getElementById("clientName").value="";
    document.getElementById("projectName").value="";
    document.getElementById("Budget").value="";
}



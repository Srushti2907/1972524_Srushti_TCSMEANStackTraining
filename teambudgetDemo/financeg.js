var empData=[];
function retriveFromSession(){
    var obj=JSON.parse(localStorage.getItem("empInfo"));
    return obj;
    //console.log(obj);
}
// function loadTable(){
//     let tableData=localStorage.getData("empInfo");
//     let table=document.getElementsByTagName("tbody");

// tableData.map((row,index)=>{
//     let newRow=table.insertRow(index);
//     newRow.insertCell(0).innerHTML=row.clientName;
//     newRow.insertCell(1).innerHTML=row.projectName;
//     newRow.insertCell(1).innerHTML=row.Budget;
// }

// )

//    }

// AddToCart:Array<Employee> =new Array();

// AddToCart(name:any,Price:number){
// this.AddTocart.push(name);

// }
//function productItem(img, name, price) {
//     this.img = img;
//     this.name = name;
//     this.price = price;
   
//   }

// class Info{
//     itemName:String;
//     price:number;
//     qunatity:number;

// }
var empObj=[];
localStorage.setItem("empInfo",JSON.stringify([]))
function storeInSession(empObj){
    
    localStorage.setItem("empInfo",JSON.stringify(empObj));
    
}
function retriveFromSession(){
    var obj=JSON.parse(localStorage.getItem("empInfo"));
    return obj;
    
}

function addToCart(){
    let empdata=readFormData();
    var tableEntries=retriveFromSession();
    tableEntries.push(empdata)
    insertNewRecord();
}

function readFormData(){
    var obj={}
    
    obj.itemName=document.getElementsByClassName("card-title");
    obj.price=document.getElementsByClassName("card-text cost");
    obj.quantity=document.getElementsByClassName("");

    return obj
}
function insertNewRecord(){
    let table = document.getElementById("cart");
    let body = table.getElementsByTagName("tbody")[0];
    let newRow = body.insertRow();

    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = `$${Number(data.cost)}`;

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantity.toString();

    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = `$${Number(data.total)}`;
}



  

// document.write("1st messge");
// document.write("<br/>2nd messge");
// document.write("<br/>3rd messge");


document.write("1st messge");
setTimeout(function(){
    document.getElementById("msg").innerHTML="2nd Message"
 
},3000)
var i=0;
setInterval(function(){
    document.getElementById("info").innerHTML=i++;
 
},1000)
document.write("<br/>3rd messge");
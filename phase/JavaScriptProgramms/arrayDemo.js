//array :collection of more than one elements or values


var obj1=[100,200,300,400];//creating object using literal style.
var obj2=new Array(100,200,300,400);//creating using new keyword

document.write("<br/>")
document.write("<br/>" +obj1)

document.write("<br/>" +obj2)

for (var i=0;i<obj1.lenth;i++){
    document.write("<br/>" +obj1[i])


}
document.write("<br/> display the value from array using callback with normal function style")
obj1.forEach(dis);
function dis(a){
    document.write("<br/>"+a)
}
document.write("<br/> display the value from array using annoymous function style")

obj1.forEach(function(n){
document.write("<br/>"+n)
})

document.write("<br/> display the value from array  function style")
obj1.forEach(v=>document.write("<br/>"+v))
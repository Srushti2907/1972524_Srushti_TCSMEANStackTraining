//Normal function

function add(a,b){
    return a+b;

}
document.write("write the Normal Function");
document.write(add(100,200));

var sum=function addNumber(a,b){
    return a+b;
}
document.write("<br/>write the Normal Function<br/>");

document.write(sum(20,40));


var sumOfNumber=function(a,b){
    return a+b;
}
document.write("<br/>Expression style Function without Name<br/>");

document.write(sumOfNumber(20,40));

//call back function

function sayHello(fname,callback){
    document.write(" <br/>welcome your name is <br/>"+callback(fname))
}
var maleInfo=function(fname){
    return "MR"+fname;
}
var femaleInfo=function(fname){
    return "Miss"+fname;
}
sayHello("Raj"  ,maleInfo);
sayHello("Reeta" ,femaleInfo)
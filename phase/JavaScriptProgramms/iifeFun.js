//IIFE: Immediate Invoked function expression

function dis1(){
    document.write("Normal function<br/>")
}
//call function from same script
//call function from another script
//call function from html using events 
dis1();


(function(){
    document.write("<br/>This is type of IIFE function")

})();
//IIFE :Immediate Invoked function expression using arrow Function Style
(()=>document.write("<br/>This is type of IIFE function"))();

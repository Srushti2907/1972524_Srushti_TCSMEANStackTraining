//remove in between data

let num1:Array<number>=[100,200,300,400];
let num2:Array<number>=new Array();
console.log("size"+ num1.length);
console.log("size "+num2.length);
num1.push(500);
num1.push(600);
num2.push(100);
num2.push(200);
num2.push(300);

console.log("size"+ num1.length);
console.log("size "+num2.length);
 num1.pop();  // remove the last iteam
num2.pop();

console.log("size"+ num1.length);
console.log("size "+num2.length);

console.log(num1);
console.log(num2);
 num1.shift();  // removing the first element
 num2.shift();
 console.log(num1);
 console.log(num2);
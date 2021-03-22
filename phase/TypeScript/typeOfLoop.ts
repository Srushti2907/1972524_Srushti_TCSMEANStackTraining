let num:Array<number>=[100,200,300,];
console.log("using classical for loop");

for (let i=0;i<num.length;i++){
    console.log(num[i]);

}
console.log("using  for in loop"); // always give the index
for(let i in num){
    console.log("i"+i +"Value is "+num[i]);
}

console.log("using  of  loop");  // always give the index, angular is important
for (let n of num){
    console.log("Value"+n)

}
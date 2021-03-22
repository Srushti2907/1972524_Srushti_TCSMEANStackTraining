var a = 10;
var a = 20; //re-declaration
console.log(a);
console.log(a);
var f = 30;
console.log(f); //re-declaration not possible
for (var i = 0; i < 100; i++) {
}
console.log(i);
for (var j = 0; j < 100; j++) { // local scope tsc
}
// console.log(j); // wecan't accesss j variable 
var c = 100; // use to declare the constant value 
//c=200;  // we cann't assigne , we cannot reassign 

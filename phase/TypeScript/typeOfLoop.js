var num = [100, 200, 300,];
console.log("using classical for loop");
for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
}
console.log("using  for in loop"); // always give the index
for (var i in num) {
    console.log("i" + i + "Value is " + num[i]);
}
console.log("using  of  loop"); // always give the index, angular is important
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var n = num_1[_i];
    console.log("Value" + n);
}

var option =prompt("Enter Your option")
var obj=new Promise(function(resolve,rejected){
    if(option=='yes'){
        resolve("Successfully done the task") 
    }else{
    rejected("Failure-error generated")
}
});
//asynchronous callback function then execute  only if
//promise resolve else catch execute

obj.then(data=>console.log(data)).catch(error=>document.write(error));
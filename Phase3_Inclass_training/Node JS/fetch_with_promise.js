var fetch=require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/todos").
then(res=>res.json()).
then(result=>console.log(result)).catch(error=>console.log(error));
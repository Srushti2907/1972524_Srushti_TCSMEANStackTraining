let net =require("net");
let readline=require("readline");
let client =net.connect({port:9090,host:"localhost"});
let r1 =readline.createInterface({
    input:process.stdin,
    output:process.output
})


client.on("connect",()=>{
   console.log("connected to server.....");
    //  client.write("I am First Client...")
})
r1.on("line",(msg)=>{
    client.write(`client send "${msg}`)
})
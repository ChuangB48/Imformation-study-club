const express=require("express");
const WebSocket=require("ws").Server;
const port=process.env.PORT||80;
let clients=[];
const server=express().listen(port,function(){
    console.log("listening at "+port+".");
});
const wss=new WebSocket({server});
let a=0;
wss.on("connection",function(ws){
    a++;
    console.log("there is ",a," computer here now.");
    ws.on("close",function(){
        a--;
        console.log("there is ",a," computer here now.");
    });
    ws.on("message",function(data){
        data=data.toString();
        console.log(data);
        wss.clients.forEach(function each(client){
            client.send(data);
        });
    });
});
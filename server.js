const express=require("express");
const WebSocket=require("ws").Server;
const server=express().listen(9172,function(){
    console.log("listening at 9172.");
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
        ws.send(data);
    });
});
const express=require("express");
const WebSocket=require("ws").Server;
const server=express().listen(9172,function(){});
const wss=new WebSocket({server});
let a=0;
wss.on("connection",function(ws){
    console.log("computer number now: ",a);
    a++;
    ws.on("close",function(){
        a--;
        console.log("computer number now: ",a);
    });
    ws.on("message",function(data){
        data=data.toString();
        ws.send(data);
    });
});
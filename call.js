const express=require("express");
const WebSocket=require("ws").Server;
const port=7428;
const server=express().listen(port,function(){
    console.log("listening at "+port+".");
});
const wss=new WebSocket({server});
let a=0;
wss.on("connection",function(ws){
    ws.on("message",function(data){
        data=data.toString();
        console.log("<--",data,"-->");
    });
});
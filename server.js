const express=require("express");
const WebSocket=require("ws").Server;
const server=express().listen(9172,function(){
});
const wss=new WebSocket({server});
wss.on("connection",function(ws){
    ws.on("message",function(data){
        data=data.toString();
        ws.send(data);
    });
});
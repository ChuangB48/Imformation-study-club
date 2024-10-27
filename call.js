const express=require("express");
const WebSocket=require("ws").Server;
const port=process.env.PORT||80;
const server=express().listen(port,function(){
    console.log("listening at "+port+".");
});
const wss=new WebSocket({server});
wss.on("connection",function(ws){
    ws.on("message",function(data){
        let a=data.toString().split(";");
        console.log("<--",a[0],"-",a[1],"-->");
    });
});
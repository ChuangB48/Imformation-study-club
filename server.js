const WebSocket=require("ws");
const server=new WebSocket.server({port:6993});
server.on("connection",function(socket){
    socket.on("message",function(message){
        server.clients.array.forEach(clients => {
            if(client.readystate===WebSocket.OPEN){
                client.send(message);
            }
        });
    });
});
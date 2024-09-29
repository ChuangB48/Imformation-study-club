const socket=new WebSocket("ws://localhost:6993");
socket.onmessage=function(event){
    document.getElementById("board").innerHTML+="<div>"+event.data+"</div>";
};
function cl(){
    let s=document.getElementById("enter");
    if(s.value!=""){    
        socket.send(s.value);
        s.value="";
    }
    let i=document.getElementById("board");
    i.scrollTo(0,i.scrollHeight);
}
function ba(){
    location.href="edu-lobby.html";
}
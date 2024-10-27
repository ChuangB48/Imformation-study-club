const socket=new WebSocket("wss://imformation-study-club.onrender.com");
socket.onmessage=function(event){
    document.getElementById("board").innerHTML+="<div>"+event.data+"</div>";
};
function cl(){
    let s=document.getElementById("enter");
    if(s.value!=""){
        let type=s.value+"-----"+cilentname;
        socket.send(type);
        s.value="";
    }
    let i=document.getElementById("board");
    i.scrollTo(0,i.scrollHeight);
}
window.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        cl();
    }
},false);
function ba(){
    location.href="edu-lobby.html";
}
// const port=80;
const socket=new WebSocket("wss://imformation-study-club.onrender.com/");
socket.onmessage=function(event){
    document.getElementById("board").innerHTML+="<div>"+event.data+"</div>";
};
function cl(){
    let s=document.getElementById("enter");
    if(s.value!=""){
        let cookies=document.cookie;
        let name="";
        let sep="";
        sep=cookies.split("=");
        name=sep[1];
        let type=s.value+"-----"+name;
        socket.send(type);
        s.value="";
    }
    let i=document.getElementById("board");
    i.scrollTo(0,i.scrollHeight);
}
function ba(){
    location.href="edu-lobby.html";
}
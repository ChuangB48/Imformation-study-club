const socket=new WebSocket("ws://localhost:9172");
socket.onmessage=function(event){
    document.getElementById("board").innerHTML+="<div>"+event.data+"</div>";
};
function cl(){
    let s=document.getElementById("enter");
    if(s.value!=""){
        let cookies=document.cookie;
        console.log(cookies);
        let name="";
        for(let a=0;a<cookies.length;a++){
            let sep=cookies[a].split("=");
            if(sep[0]=="name"){
                name=sep[1];
                break;
            }
        }
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
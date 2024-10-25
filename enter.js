const port=7428;
const socket=new WebSocket("ws://localhost:"+port.toString());
function submit(){
    const p=document.getElementById("name");
    for(let a=0;a<ap.length;a++){
        if(ap[a].name==p.value){
            socket.send(p.value);
            document.cookie="name="+ap[a].name+"; max-age=43200";
            location.href="edu-lobby.html";
        }
    }
}
window.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        submit();
    }
},false);
function back(){
    location.href="second-page.html";
}
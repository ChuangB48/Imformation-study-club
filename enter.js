const socket=new WebSocket("ws://imformation-study-club-1.onrender.com");
function submit(){
    const p=document.getElementById("name");
    const n=document.getElementById("password");
    if(n.value==password){
        for(let a=0;a<ap.length;a++){
            if(ap[a].name==p.value){
                let m=ap[a].num.toString()+";"+ap[a].name;
                socket.send(m);
                document.cookie="name="+ap[a].name+"; max-age=43200";
                location.href="edu-lobby.html";
            }
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
function submit(){
    const p=document.getElementById("name");
    for(let a=0;a<ap.length;a++){
        if(ap[a].name==p.value){
            location.href="edu-lobby.html";
        }
    }
}
function back(){
    location.href="second-page.html";
}
﻿function submit(){
    const p=document.getElementById("name");
    for(let a=0;a<ap.length;a++){
        if(ap[a].name==p.value){
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
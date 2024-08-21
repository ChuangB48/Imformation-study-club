function submit(){
    const p=document.getElementById("name");
    for(let a=0;a<ap.length;a++){
        if(ap[a].name==p.value){
            location.href="massage.html";
        }
    }
}
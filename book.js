function ba(){
    location.href="edu-lobby.html";
}
for(let a=0;a<b.length;a++){
    document.getElementById("board").innerHTML+="<a target='_blank' href="+b[a].locate+">&bull;"+b[a].num+"</a><br>";
}
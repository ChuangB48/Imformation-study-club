function ba(){
    location.href="edu-lobby.html";
}
for(let a=0;a<q.length;a++){
    document.getElementById("board").innerHTML+="<a href="+q[a].locate+">&bull;"+q[a].num+"</a><br>";
}
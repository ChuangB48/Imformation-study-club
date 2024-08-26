let allscore=[],allvalue=[];
for(let a=0;a<ap.length;a++){
    allscore[ap[a].name]=ap[a].score;
}
for(let a in allscore){
    allvalue.push(allscore[a]);
}
allvalue.sort(function(A,B){return B-A;});
for(a=0;a<allvalue.length;a++){
    for(let b in allscore){
        if(allvalue[a]==allscore[b]){
            document.getElementById("board").innerHTML+="<div style='width:1436px;border:1px rgb(250,130,130) solid'>"+b+"  "+allscore[b]+"</div>";
            allscore[b]=-1;
        }
    }
}
function ba(){
    location.href="edu-lobby.html";
}
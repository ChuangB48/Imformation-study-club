function pg(){
    let pa=ap;
    let sel=document.getElementById("sel");
    if(sel.value=="person"){
        pa.sort(function(a,b){return a.group-b.group});
        pa.sort(function(a,b){return b.score-a.score});
        document.getElementById("board").innerHTML="";
        for(let a=0;a<pa.length;a++){
            document.getElementById("board").innerHTML+="<div class='p'>"+pa[a].name+" ("+pa[a].score+"分) (group:"+pa[a].group+")"+"</div>";
        }
    }
    else if(sel.value=="group"){
        let pa=ap;
        pa.sort(function(a,b){return b.score-a.score});
        pa.sort(function(a,b){return a.group-b.group});
        document.getElementById("board").innerHTML="";
        let g=[];
        for(let a=0;a<pa.length;a++){
            let z=false;
            for(let b=0;b<g.length;b++){
                if(pa[a].group==g[b].group){
                    z=true;
                    g[b].score+=pa[a].score;
                    break;
                }
            }
            if(!z){
                g.push({group:pa[a].group,score:pa[a].score});
            }
        }
        g.sort(function(a,b){return b.score-a.score});
        for(let a=0;a<g.length;a++){
            document.getElementById("board").innerHTML+="<div id='g"+g[a].group+"' class='gp'><div class='group'><span class='gtext'>第"+g[a].group+"組 ("+g[a].score+"分)</span></div></div>";
        }
        for(let a=0;a<pa.length;a++){
            document.getElementById("g"+pa[a].group).innerHTML+="<div class='gm'>"+pa[a].name+" ("+pa[a].score+"分)</div>";
        }
    }
}
function ba(){
    location.href="edu-lobby.html";
}
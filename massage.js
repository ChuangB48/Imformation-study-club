let cookie=document.cookie.split(";");
for(let a=0;a<cookie.length;a++){
    cookie[a].trim();
    let equal=0;
    for(let b=0;b<cookie[a].length;b++){
        if(cookie[a][b]=="="){
            equal=b;
            break;
        }
    }
    let cname="",ctext="";
    for(let b=0;b<equal;b++){
        cname+=cookie[a][b];
    }
    for(let b=equal+1;b<cookie[a].length;b++){
        ctext+=cookie[a][b];
    }
    if(cname!="name"){
        document.getElementById("board").innerHTML+="<div>"+ctext+"</div>";
    }
}
function cl(){
    let s=document.getElementById("enter");
    if(s.value!=""){
        let time=new Date();
        let y=time.getFullYear(),m=time.getMonth(),d=time.getDate(),h=time.getHours(),min=time.getMinutes(),sec=time.getSeconds();
        let ctime=y+"/"+m+"/"+d+"-"+h+":"+min+":"+sec;
        document.getElementById("board").innerHTML+="<div>"+s.value+"</div>";
        document.cookie=ctime+"="+s.value+"; max-age=1209600";
        s.value="";
    }
    let i=document.getElementById("board");
    i.scrollTo(0,i.scrollHeight);
}
function ba(){
    location.href="edu-lobby.html";
}
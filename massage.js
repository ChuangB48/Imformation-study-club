function cl(){
    let s=document.getElementById("enter");
    if(s.value!=""){
        document.getElementById("board").innerHTML+="<div>"+s.value+"</div>";
        s.value="";
    }
    let i=document.getElementById("board");
    i.scrollTo(0,i.scrollHeight);
}
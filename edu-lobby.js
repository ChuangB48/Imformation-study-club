let cookies=document.cookie.split(";");
for(let a=0;a<cookies.length;a++){
    cookies[a].trim();
}
for(let a=0;a<cookies.length;a++){
    let detel=cookies[a].split("=");
    if(detel[0]=="name"){
        document.getElementById("log").innerHTML+="<span style='font-size:90px;font-family:DFKai-sb;'>"+detel[1]+"</span>";
    }
}
function mass(){
    location.href="massage.html";
}
function bo(){
    location.href="book.html";
}
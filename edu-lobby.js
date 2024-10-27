document.getElementById("log").innerHTML+="<span style='font-size:90px;font-family:DFKai-sb;'>"+cilentname+"</span>";
for(let a=0;a<inf.length;a++){
    document.getElementById("i").innerHTML+="<div>"+inf[a].inform+"</div>";
}
function mess(){
    location.href="message.html";
}
function bo(){
    location.href="book.html";
}
function ra(){
    location.href="rank.html";
}
function so(){
    location.href="solve.html";
}
console.log(cilentname);
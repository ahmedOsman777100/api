let head=document.getElementById("head");
let add=document.getElementById("add");
let lost=document.getElementById("list").getElementsByTagName("li");
let list=document.getElementById("list");
let gor=1;

list.onclick=function(link){
    if(link.target.nodeName=="LI"){
        head.innerHTML=link.target.innerHTML;
        for(let i=0;i<link.target.parentNode.children.length;i++){
            lost[i].classList.remove("color")
          }
          link.target.classList.add("color")
    }
   
}
// asd
add.onclick=function(){
    list.innerHTML +=`<li>New Item ${gor}</li>`;
    gor++
}

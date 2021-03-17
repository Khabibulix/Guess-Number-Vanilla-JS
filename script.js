var inp = document.getElementById("inp");
var addTask = document.getElementById("addTask");
var liste = document.getElementById("liste");
var remove = document.getElementById("all-remove");
var check = document.getElementById("all-check");

addTask.addEventListener("click", function(){
    var paragraph = document.createElement("p");
    paragraph.classList.add("todostyle");
    paragraph.innerText = inp.value;   
    liste.appendChild(paragraph);
    inp.value="";
    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener("dblclick", function(){
        liste.removeChild(paragraph);
    })
    
})

remove.addEventListener("click", function(){
    liste.innerText = "";
})

check.addEventListener("click", function(){
    liste.style.textDecoration = "line-through"
})
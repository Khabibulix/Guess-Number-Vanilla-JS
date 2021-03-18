//GetElements
var confirmer = document.getElementById("confirmer");
var input = document.getElementById("nombreChoisi");
var messages = document.getElementById("messages");
var reset = document.getElementById("reset");
var memo = document.getElementById("memo");

//Variables
var aleaNombre = Math.floor(100 * Math.random() + 1);
var compteur = 0;
var sauvegarde = [];
var bonneSaisie = false;

//Listeners
confirmer.addEventListener("click", function(){
    saisieMerdique();
    //intéractivité
    if (input.value > aleaNombre && bonneSaisie == true){
        messages.innerText = "Le résultat est plus petit! Je vous encourage sans évidemment vous forcer à descendre la valeur du nombre entré!";
    }else if(input.value < aleaNombre && bonneSaisie == true){
        messages.innerText = "Le résultat est plus grand! Surprenez-moi, mettez un nombre bien plus grand!";
    } else if (aleaNombre == input.value && bonneSaisie == true){
        messages.innerText = "Bien joué, vous avez gagné! Votre beauté n'a d'égal que votre intelligence!";
    }
    sauvegarde.push(input.value);
    compteur++;
    input.value = "";
})

//Sav
memo.addEventListener("click", function(){
    alert(sauvegarde);
})
//Reset
reset.addEventListener("click", function(){
    compteur == 0;
    messages.innerText = "";
    input.value = "";
    sauvegarde = [];
})

//Game over
if(compteur > 10){
    alert("Hélas, vous n'avez pas réussi à trouver le nombre en 10 essais...")
    compteur == 0;
    messages.innerText = "";
    input.value = 0;
    var aleaNombre = Math.floor(100 * Math.random() + 1);
}

function saisieMerdique(){
    //dégage les saisies merdiques
    if (input.value > 100 || input.value < 0 || input.value == 0 || input.value == ""){
        alert("Ceci n'est pas une saisie correcte!");
        bonneSaisie = false;
        
    }
}
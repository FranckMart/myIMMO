//var pseudoAide = document.getElementById("");
var formElt = document.getElementById("sub-form");
var pseudoAide = document.createElement("p");
pseudoAide.textContent = "Pseudo doit avoir entre 6 et 12 lettres ou 6 à 12 letrres et 2 chiffres";
pseudoAide.style.color = "red";
pseudoAide.style.margin = "10px";

formElt.addEventListener("submit", function (e) {

    e.preventDefault();


    var pseudo = formElt.elements.pseudo.value;
    var mdp = formElt.elements.pwd.value;
    var regexPseudo = /^[a-zA-Z0-9_-]{6,12}$/;
    // var regexMdp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/
    var regexMdp = /^(?=.{10,}$)(?=.?[a-z])(?=.?[A-Z])(?=.?[0-9])(?=.?\W).*$/

    if ((!regexPseudo.test(pseudo))) {
        alert("Pseudo Erreur");
        document.getElementById("inscription").appendChild(pseudoAide);
    } else if ((!regexMdp.test(mdp))) {
        alert("Mdp Erreur");
    }
    //formElt.reset()


})
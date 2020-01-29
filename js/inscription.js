function regmaster(params) {
    // reg telephone
        var regextel = /^(0[1-68])(?:[ _.-]?(\d{2})){4}$/;
    // reg mail
        var regexmail =/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/
    // reg mdp (Un mot de passe contenant au moins 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial et une longueur d'au moins 10)
        var regexmdp = /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/
    // reg pseudo
        var regexpseudo =

}
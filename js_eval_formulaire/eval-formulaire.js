var btn_envoyer = document.getElementById("envoyer");
btn_envoyer.addEventListener("click", verif_form);

function verif_form(e) {

    var erreur;

    var surname = document.getElementById("nom_famille");
    var Code = document.getElementById("Code-Postal");
    var regex_name = /^[a-zA-Z]+$/;
    var validCode = /^[\d]{5}$/;

    //nom
    if (surname.value == "") {
        console.log("erreur");
        erreur = "";
        document.getElementById("erreur1").innerHTML = "Veuillez remplir le champ*";
        e.preventDefault();
    } else if (regex_name.exec(surname.value) == null) {
        document.getElementById("erreur1").innerHTML = "Veuillez entrer un nom correct*";
        e.preventDefault()
    } else {
        document.getElementById("erreur1").innerHTML = "";
    }

    //prénom
    var prénom = document.getElementById("prénom");


    if (prénom.value == "") {
        erreur = "";
        document.getElementById("erreur2").innerHTML = "Veuillez entrer un prénom*";
        e.preventDefault();
    } else if (regex_name.exec(prénom.value) == null) {
        document.getElementById("erreur2").innerHTML = "veuillez entrer un prénom correct*";
        e.preventDefault()

    } else {
        document.getElementById("erreur2").innerHTML = "";
    }

    //sexe
    var sexe = document.getElementsByName("sexe");


    if (sexe[0].checked == true || sexe[1].checked == true || sexe[2].checked == true) {
        document.getElementById("erreur3").innerHTML = "";
    } else {
        document.getElementById("erreur3").innerHTML = "veuillez cocher une case*";
        e.preventDefault();
    }


    //date
    var date = document.getElementById("date");

    if (date.value == "") {
        erreur = "";
        document.getElementById("erreur4").innerHTML = "veuillez entrer une date*";
        e.preventDefault();

    } else {
        document.getElementById("erreur4").innerHTML = "";
    }



    if (validCode.exec(Code.value) == null) {
        document.getElementById("erreur5").innerHTML = "Saisir un code postal*";
        e.preventDefault();
    } else {
        document.getElementById("erreur5").innerHTML = "";
    }

    //email
    var email = document.getElementById("email");
    var regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value == "") {
        document.getElementById("erreur6").innerHTML = "Entre un email*";
        e.preventDefault();
    }
    if (regex_email.exec(email.value) == null) {
        document.getElementById("erreur6").innerHTML = "Entre un email correct*";
        e.preventDefault();
    } else {
        document.getElementById("erreur6").innerHTML = "";
    }

    //sujet
    var sujet = document.getElementById("sujet");

    if (sujet.selectedIndex == 0) {
        document.getElementById("erreur7").innerHTML = "Veuillez sélectionner un sujet*";
        e.preventDefault();
    } else {
        document.getElementById("erreur7").innerHTML = "";
    }

    //question


    var laquestion = document.getElementById("question")
    var validquest = /^[a-zA-Z\d\s?']*$/;

    if (laquestion.value == "") {
        erreur = "";
        document.getElementById("erreur8").innerHTML = "Saisissez votre question*";
        e.preventDefault();
    } else if (validquest.exec(laquestion.value) == null) {
        document.getElementById("erreur8").innerHTML = "Veuillez formuler une question correcte*";
        e.preventDefault();

    } else {
        document.getElementById("erreur8").innerHTML = "";
    }


    var accepter = document.getElementById("accepter");

    if (accepter.checked == false) {
        document.getElementById("erreur9").innerHTML = "Veuillez cocher la case*";
        e.preventDefault();
    } else {
        document.getElementById("erreur9").innerHTML = "";


    }



}
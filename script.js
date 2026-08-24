/* =========================================================
   🔐 MOT DE PASSE
========================================================= */


/*
    ========================================================
    MODIFIE TON MOT DE PASSE ICI
    ========================================================
    
    Exemple :
    
    const motDePasseCorrect = "notredate";
    
    Tu peux mettre ce que tu veux.
*/

const motDePasseCorrect = "podo";


/*
    Récupération des éléments
*/

const verrouillage =
    document.getElementById("verrouillage");

const champMotDePasse =
    document.getElementById("mot-de-passe");

const erreurMotDePasse =
    document.getElementById("erreur-mot-de-passe");


/*
    Vérification du mot de passe
*/

function verifierMotDePasse() {

    const motDePasseEntre =
        champMotDePasse.value;


    /*
        Si le mot de passe est correct
    */

    if (motDePasseEntre === motDePasseCorrect) {

        /*
            On fait disparaître
            l'écran de verrouillage.
        */

        verrouillage.classList.add("disparu");


        /*
            On remet le champ à zéro.
        */

        champMotDePasse.value = "";


        /*
            On cache le message d'erreur.
        */

        erreurMotDePasse.classList.remove("visible");

    }


    /*
        Si le mot de passe est incorrect
    */

    else {

        erreurMotDePasse.classList.add("visible");


        /*
            Petit effet de secousse
            pour signaler l'erreur.
        */

        champMotDePasse.classList.add("secousse");


        setTimeout(function() {

            champMotDePasse.classList.remove("secousse");

        }, 400);

    }

}


/*
    Permet d'appuyer sur "Entrée"
    au lieu de cliquer sur le bouton.
*/

champMotDePasse.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            verifierMotDePasse();

        }

    }
);



/* =========================================================
   📖 NAVIGATION ENTRE LES PAGES
========================================================= */


/*
    Récupération de toutes les pages
*/

const pages =
    document.querySelectorAll(".page");


const numeroPage =
    document.getElementById("numero-page");


const boutonRetour =
    document.getElementById("bouton-retour");


/*
    Page actuellement affichée
*/

let pageActuelle = 0;



/* =========================================================
   AFFICHER UNE PAGE
========================================================= */

function afficherPage(numero) {


    /*
        On retire "active" de toutes
        les pages.
    */

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    /*
        On active la page demandée.
    */

    pages[numero].classList.add("active");


    /*
        Mise à jour du compteur.

        Exemple :
        1 / 7
        2 / 7
        etc.
    */

    numeroPage.textContent =
        numero + 1;


    /*
        Le bouton retour apparaît
        dès qu'on n'est plus sur
        la première page.
    */

    if (numero > 0) {

        boutonRetour.classList.add("visible");

    }

    else {

        boutonRetour.classList.remove("visible");

    }


    /*
        On mémorise la nouvelle page.
    */

    pageActuelle = numero;

}



/* =========================================================
   PAGE SUIVANTE
========================================================= */

function suivant() {


    /*
        Vérifie qu'il reste une page.
    */

    if (
        pageActuelle <
        pages.length - 1
    ) {

        afficherPage(
            pageActuelle + 1
        );

    }

}



/* =========================================================
   PAGE PRÉCÉDENTE
========================================================= */

function precedent() {


    if (pageActuelle > 0) {

        afficherPage(
            pageActuelle - 1
        );

    }

}



/* =========================================================
   ⌨️ CLAVIER
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {


        /*
            Flèche droite :
            page suivante
        */

        if (
            event.key === "ArrowRight"
        ) {

            suivant();

        }


        /*
            Espace :
            page suivante
        */

        if (
            event.key === " "
        ) {

            /*
                Évite que la page
                fasse un comportement
                inattendu.
            */

            event.preventDefault();

            suivant();

        }


        /*
            Flèche gauche :
            page précédente
        */

        if (
            event.key === "ArrowLeft"
        ) {

            precedent();

        }

    }
);



/* =========================================================
   🚀 INITIALISATION
========================================================= */


/*
    La première page est affichée
    au démarrage.

    L'écran de mot de passe reste
    par-dessus jusqu'à ce que le
    bon mot de passe soit entré.
*/

afficherPage(0);
// Etape 1 - Sélection des éléments
let input = document.querySelector('#prix') ;
let error = document.querySelector('small') ;
let formulaire = document.querySelector('#formulaire') ;

// Etape 2 - Cacher l'erreur
//error.style.visibility = "hidden";
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire entre 0 et 1000
let nombreAleatoire = Math.floor(Math.random() * 1001) ;
//Math.random --> nbre entre 0 et 1
//Math.floor --> avoir uniquement des nbres entiers

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        //affiche le message d'erreur
        error.style.display = 'block';
    }else{
        //ne pas afficher message d'erreur
        error.style.display = "none";
    }
})
// Etape 5 - Agir à l'envoi du formulaire

// Etape 6 - Créer la fonction vérifier
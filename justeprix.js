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
let coups = 0;
let nombreChoisi;

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        //affiche le message d'erreur
        error.style.display = "block";
    }else{
        //ne pas afficher message d'erreur
        error.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault();//on annule l'évènement par défaut du boutton

    if (isNaN(input.value) || input.value == '') {
        // mettre bordure formualaire en rouge
        input.style.borderColor = 'red';
    } else {
        coups++;
        // mettre bordure formualaire en gris
        input.style.borderColor = 'green';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});

// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {

    let instruction = document.createElement('div');

    if (nombre < nombreAleatoire) {
        //Plus
        //ajouter un contenu "#1 (4) c'est plus !"
        instruction.textContent = "Tentative n°" + coups + " " + "(" + nombre + ")" + " " + "C'est plus !";
        //ajouter les classes instruction et plus
        instruction.className = "instruction plus";
    } else if (nombre > nombreAleatoire) {
        //Moins
        //ajouter un contenu "#1 (4) c'est moins !"
        instruction.textContent = "Tentative n°" + coups + " " + "(" + nombre + ")" + " " + "C'est moins !";
        //ajouter les classes instruction et moins
        instruction.className = "instruction moins";
    } else {
        //Gagné
        //ajouter un contenu "#1 (4) félicitations vous avez trouvé le juste prix !"
        instruction.textContent = "Tentative n°" + coups + " " + "(" + nombre + ")" + " " + "félicitations vous avez trouvé le juste prix !";
        //ajouter les classes instruction et fini
        instruction.className = "instruction fini";
        //empêcher le joueur de continuer après avoir trouvé le bon chiffre 
        input.disabled = true;
    }

    //Ajouter l'élément devant(par défaut il est en arrière plan et on ne le voit pas.. logique hein !?)
    document.querySelector('#instructions').prepend(instruction);

}
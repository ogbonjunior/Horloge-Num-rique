
var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector(' .date');

var affichageHeure = function(){
    // Déclaration des variables qui seront utilisées :
    var today, annee, listeMois, mois, listeJours, jourNUmero, jourNom, heures, 
    minutes, secondes, deuxChiffres;
    
    // Récupérer la date actuelle:
    today = new Date();

    // Récupérer l'année :
    annee = today.getFullYear();

    // Récupérer le mois:
    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", 
    "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
    mois = listeMois[today.getMonth()]; 

    //Récupéré le numéro du jour du mois:
    jourNUmero = today.getDate();

    // Recupéré le jour. Attention la semaine commençe un dimanche en js
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()]; 

    // Afficher les heures, minutes et secondes toujours avec deux chiifres

    deuxChiffres = function(element){
        if(element < 10) {
            return element = "0" + element;
        } else {
            return element;
        }
    }

    // Recupérer les heures :
    heures = deuxChiffres(today.getHours());

    // Recupérer les minutes :
    minutes = deuxChiffres(today.getMinutes());

    // Recupérer les secondes :
    secondes = deuxChiffres(today.getSeconds());

    // Affichage dans nos Div du html :
    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + ", " + jourNUmero + " " + mois + " " + annee;

    // Lancer la fonction affichage heure toutes les 1000ms, soit toute les secondes :
    setTimeout(affichageHeure, 1000);
}

// Lancer la fonction une fois au debut :
affichageHeure();
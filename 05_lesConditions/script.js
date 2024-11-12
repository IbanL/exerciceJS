let limiteAge = 18;
let limitePoids = 120;
let limiteAgeEnfant = 12;
let limitePoidsEnfant = 50;

let ageDuClient = 23
let poidsDuClient = 70

//exercice 0
if (ageDuClient>=limiteAge && poidsDuClient<limitePoids) {
    console.log("Vous pouvez monter dans ce manège");
} else {
    console.log("Vous ne pouvez pas monter dans ce manège");
}

//exercice 1
if (poidsDuClient<limitePoidsEnfant || ageDuClient<=limiteAgeEnfant) {
    console.log("Bienvenue dans ce nouveau manège pour les enfants !");
}else{
    console.log("Désolé mais tu es trop grand pour monter dans ce manège.");
}

//exercice 2
if (ageDuClient>=limiteAge && poidsDuClient<limitePoids) {
    console.log("Bienvenue dans le manège !");
    
} else if(ageDuClient>=limiteAge && poidsDuClient>=limitePoids) {
    console.log("Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids.");
} else if(ageDuClient<limiteAge && poidsDuClient<limitePoids) {
    console.log("Vous ne pouvez pas monter : ce manège est réservé aux adultes.");
}else if(ageDuClient<limiteAge && poidsDuClient>=limitePoids) {
    console.log("Vous devriez vite arrêter de manger des frites !");
}else{
    console.log("erreur");
}

//Chassez le bogue ! 0
//la comparaison avais un "=" au lieu de "==="
let zero = 0;
if (zero === 0) {
    console.log("La variable zero vaut bien zéro");
} else {
    console.log("Oops ! Il semble y avoir un bogue !");
}

//Chassez le bogue ! 1
//les {} sur le if?? (pasur)
let reponse = 42;
let condition = false;
if (condition){
    condition = true;
reponse = 1337;
}
console.log("La réponse est " + reponse);

//Chassez le bogue ! 2
//toujours les {}?
reponse = 1337;
condition = false;
if (condition){ reponse = 42; console.log("La réponse est toujours " + reponse);}
console.log("Seule cette ligne devrait s'afficher");
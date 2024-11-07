//Chassez le bogue ! 0
let nomParc = "Le Royaume Magique";
console.log("Bienvenue au parc d'attractions " + nomParc);
// probleme de casse dans la variable

//Chassez le bogue ! 1
let clientsHier = 359;
let clientsAujourdhui = 374;
let totalClients = clientsHier + clientsAujourdhui;
console.log(totalClients);
//probleme de casse totalclients et de format (string) pour clientshier

//Chassez le bogue ! 2
let nombreDeCases = 64;
let tailleCase = 2;
let superficie = nombreDeCases * tailleCase;
console.log("Superficie du plateau : " + superficie + "m2");
//case est une instruction js et ne peux pas etre utiliser comme variable

//Chassez le bogue ! 3
let h =13;
let m = 37;
let separateur = "h";
let horaire =h + separateur + m;
console.log("Bienvenue, il est " + horaire);
//casse.... + mettre le h en string
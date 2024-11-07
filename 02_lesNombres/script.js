//exercice0
console.log(28+6);

//exercice1
console.log((6 * 4 + 2)/2);

//exercice2
let nbAdresse = 1337+256;
console.log("le prix sera de "+nbAdresse*2+"€");

//exercice3
console.log("le prix sera de "+(nbAdresse*1.5+500)+"€");

//exercice4
//test version calcul math
console.log((35-23)*1.5);
//version boucle
let temp = 23
let jour = 0
while (temp<35) {
    temp = temp+2;
    jour = jour+3;
}


console.log("il fera "+temp+"° dans "+jour+" jours");

//Chassez le bogue ! 0
console.log("la somme récolter sera de "+((2350-(2350*0.12))+1000)+"€");

//chassez le bogue ! 1
 //calcul des investisseur
let nbInvestisseur = 5;
let argentInvestisseur = 470;
let totalInvestisseur = nbInvestisseur*argentInvestisseur;
console.log("Montant récolté aupres des "+nbInvestisseur+" investisseurs : "+nbInvestisseur+"x"+argentInvestisseur+"="+totalInvestisseur);
//calcul des amis
let nbAmis = 10;
let argentAmis = 100;
let totalAmis = nbAmis*argentAmis;
console.log("Montant récolté auprès de "+nbAmis+" amis : "+nbAmis+"x"+argentAmis+"="+totalAmis);
//calcul du total
let montantTotal = totalInvestisseur+totalAmis;
console.log("Montant total récolté : "+totalInvestisseur+"+"+totalAmis+"="+montantTotal);
//calcul de la taxe
let taxe = 0.12
let montantNet = (totalInvestisseur-(totalInvestisseur*taxe)+totalAmis)
//resultat total
console.log("Bénéfice net (après le prélèvement des taxes) : "+totalInvestisseur+" - "+totalInvestisseur+" * "+taxe+" + "+totalAmis+" = "+montantNet+"€")





// Exo2*
console.log((1337 +256)*2);

// Exo3*
console.log(`TortueLettre facturera ` + (500+((1337+256)*1.5)) + ` à Tom`);
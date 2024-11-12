function validation(){
    var age = document.getElementById("age").value;
    var poids = document.getElementById("poids").value;
    var taille = document.getElementById("taille").value;

    //condition de l'age superieur a 12
    var boolAge = age>12;
    //debug
    console.log("age : "+boolAge);
    
    //condition de la taille superieur ou egale a 120cm
    var boolTaille = taille>=120;
    //debug
    console.log("taille : "+boolTaille);

    //condition du poids entre 40 et 60kg exclus
    var boolPoids = poids>40 && poids<60;
    //debug
    console.log("poids : "+boolPoids);
    
    //calcul final
    if ((boolAge||boolTaille)|| boolPoids) {
        document.getElementById("formResult").innerHTML = "Accès autorisé";
    } else {
        document.getElementById("formResult").innerHTML = "Accès refusé";   
    }
    
    //debug
    console.log("age : "+age+" poids : "+poids+" taille : "+taille);
}
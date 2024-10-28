//Creation d'enumération 

// Utilisation d'un objet pour créer une structure de type enum
const Couleurs = {
    ROUGE: "rouge",
    VERT: "vert",
    BLEU: "bleu",
};

// Accéder aux valeurs
console.log(Couleurs.ROUGE); // Output: "rouge"
console.log(Couleurs.VERT); // Output: "vert"
console.log(Couleurs.BLEU); // Output: "bleu"

//utilisation de freeze 
const Directions = Object.freeze({
    NORD: "nord",
    EST: "est",
    SUD: "sud",
    OUEST: "ouest",
});

console.log(Directions.NORD); // Output: "nord"

// Essayer de modifier un objet figé ne fonctionnera pas
Directions.NORD = "haut";
console.log(Directions.NORD); // Output: "nord" (inchangé)


let personne = {
    nom: "Alice",
    age: 30,
    saluer: function() {
        console.log("Bonjour, je m'appelle " + this.nom);
    }
};

//Boucler sur les Propriétés
for (let prop in personne) {
    console.log(prop + ": " + personne[prop]);
}

//Objet de Objet 
let entreprise = {
    nom: "TechCorp",
    adresse: {
        rue: "123 Rue Principale",
        ville: "Paris",
        codePostal: "75001"
    },
    departements: {
        developpement: {
            chef: "Alice",
            employes: 10
        },
        marketing: {
            chef: "Bob",
            employes: 5
        }
    }
};

console.log(entreprise.nom); // "TechCorp"
console.log(entreprise.adresse.ville); // "Paris"
console.log(entreprise.departements.developpement.chef); // "Alice"
console.log(entreprise["adresse"]["codePostal"]); // "75001"


//les fonction 
let voiture = {
    marque: "Tesla",
    modele: "Model S",
    vitesse: 0,
    accelerer: function(accroissement) {
        this.vitesse += accroissement;
        console.log("La vitesse actuelle est de " + this.vitesse + " km/h.");
    },
    freiner: function() {
        this.vitesse = 0;
        console.log("La voiture s'est arrêtée.");
    }
};

voiture.accelerer(50); // "La vitesse actuelle est de 50 km/h."
voiture.freiner();      // "La voiture s'est arrêtée."

//Creation d'un objet 
// Utilisation d'un littéral d'objet

let personne = {
    nom: "Chaima",
    age: 30,
    profession: "Ingénieur"
};

// Utilisation de la notation par point
console.log(personne.nom); // Output: Ahmed

// Utilisation de la notation par crochets
console.log(personne["age"]); // Output: 30

//modification de objet 
personne.age = 31;
personne["profession"] = "Développeur";
console.log(personne); // Output: {nom: "Ahmed", age: 31, profession: "Développeur"}

//Ajout de Nouvelles Propriétés
personne.ville = "Paris";
personne["hobbies"] = ["lecture", "sport"];

console.log(personne);
// Output: {nom: "Ahmed", age: 31, profession: "Développeur", ville: "Paris", hobbies: ["lecture", "sport"]}

//supprime un propréte
delete personne.ville;

console.log(personne); // Output: {nom: "Ahmed", age: 31, profession: "Développeur", hobbies: ["lecture", "sport"]}

//Objets et Références
let personne1 = { nom: "Sarah", age: 25 };
let personne2 = personne1;

personne2.age = 26;

console.log(personne1.age); // Output: 26


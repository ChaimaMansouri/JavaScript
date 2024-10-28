// Utilisation de guillemets simples
let chaineSimple = 'Bonjour, tout le monde !';

// Utilisation de guillemets doubles
let chaineDouble = "Bonjour, tout le monde !";

// Utilisation d'accent grave (littéraux de gabarit)
let gabarit = `Bonjour, tout le monde !`;

//Propriétés et Méthodes des Chaînes
let message = "Bonjour, JavaScript !";

// Longueur de la chaîne
console.log(message.length); // Output: 21

// Caractère à l'indice 1
console.log(message.charAt(1)); // Output: o

// Sous-chaîne de l'indice 9 à 19
console.log(message.substring(9, 19)); // Output: JavaScript

// Convertir en majuscules
console.log(message.toUpperCase()); // Output: BONJOUR, JAVASCRIPT !

//Convertir en miniscule
console.log(message.toLocaleLowerCase());

// Vérifier si la chaîne inclut "Java"
console.log(message.includes("Java")); // Output: true

// Séparer la chaîne en un tableau de mots
console.log(message.split(" ")); // Output: ["Bonjour,", "JavaScript", "!"]

//Affiche la chaine debut index 0 a indes 7
console.log(message.slice(0,7)); 


let nom = "Chaima";
let salutation = `Bonjour, ${nom} !`;
console.log(salutation); // Output: Bonjour, Chaima !

let chaineMultiLigne = `Ceci est une chaîne 
multi-ligne.`;
console.log(chaineMultiLigne);
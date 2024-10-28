//for
for (let i = 0; i < 5; i++) {
    console.log(i);
  }

//forEach 
//utilisée pour exécuter une fonction pour chaque élément d'un tableau
const nombres = [1, 2, 3, 4];

nombres.forEach(function(nombre) {
  console.log(nombre * 2);
});


//for of
//utilisée pour itérer sur des objets itérables tels que les tableaux, les chaînes de caractères, les ensembles (Set), les cartes (Map), et plus encore
const fruits = ['pomme', 'banane', 'cerise'];

for (const fruit of fruits) {
    console.log(fruit);
}

//for in 
//utilisée pour parcourir les propriétés énumérables d'un objet.
const personne = {
    nom: 'Alice',
    âge: 30,
    métier: 'Ingénieur'
  };
  
  for (const clé in personne) {
    console.log(`${clé}: ${personne[clé]}`);
  }
  
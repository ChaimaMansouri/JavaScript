//Crée tableau 
  let tab1=["Chaima","maram","ikram"]
  console.log("tab1=",tab1);
  let tab2=[]
  console.log("tab2=",tab2);
  let tab3 = new Array(1, 2, 3, 4);
  console.log( "tab3=", tab3);


//Accès aux éléments
  console.log("Accés aux élement de tab1[1] & tab2[0] & tab3[1]")
  console.log(tab1[1])
  console.log(tab2[0])
  console.log(tab3[1])
  

//Méthodes courantes pour manipuler les tableaux

  //1-Ajout d'éléments:
  tab1.push("najah");          //a la fin 
  tab1.unshift("Chouchou");    //au debut
  console.log("Ajout in tab1 (najah ,chouchou):");
  //2-Suppression d'éléments:
  tab1.pop()                   //a la fin 
  tab1.shift()                //aux debut
  console.log("Supprime in tab1 (najah ,chouchou):");
  //3-Accéder à la longueur d'un tableau:
  console.log("la taille de tab1:",tab1.length); 
  //Parcourir un tableau:
    //for
    console.log("les elements de tableau tab1 affiche par for :")
    for(let i = 0; i < tab1.length; i++) {
        console.log(tab1[i]);
    }
    //foreach
    console.log("les elements de tableau tab1 affiche par foreach :")
    tab1.forEach(function(val) {
        console.log(val);
    });
      

//Map
  //cree un nouveau tableau content les resulta de la fonction map 
   let numbers = [1, 2, 3, 4, 5];
   let doubledNumbers = numbers.map(function(number) {
  return number * 2;
  });
   console.log("affiche a nouveau table aprés l'utilisation de map (double de chaque element de tableau numirique :)",doubledNumbers); // [2, 4, 6, 8, 10]


//filer
   //cree un nouveau tableau content les element qui verifier la condition de la fonction filer 
   let numbers2 = [1, 2, 3, 4, 5, 6];
   let evenNumbers = numbers2.filter(function(number) {
   return number % 2 === 0;
   });
   console.log("les nombre pair de table numérique (utilisation de filter) :",evenNumbers); // [2, 4, 6]


//reduce
  //Lire les elements de tableau gauche a droit et fait l'operation et return une seul resulta
   let sum = numbers.reduce(function(accumulator, currentValue) {
   return accumulator + currentValue;
   }, 0);
   console.log("la somme des element de tableau (methode reduce)",sum); // 15

//find
   //retourne la valeur du premier élément du tableau qui satisfait une fonction de test fournie. Sinon, elle retourne undefined.
   let firstEven = numbers.find(function(number) {
   return number % 2 === 0;
   });
   console.log("retourne la valeur du premier élément du tableau pair (utilisation de find):",firstEven); // 4

//Some() && every()
   //vérifie si au moins un élément dans le tableau satisfait une condition spécifiée.
   //vérifie si tous les éléments dans le tableau satisfont une condition spécifiée.

let hasEven = numbers.some(function(number) {
  return number % 2 === 0;
});

let allEven = numbers.every(function(number) {
  return number % 2 === 0;
});

console.log(" au moins un élément dans le tableau pair (utilisation de some) :",hasEven); // true (il y a au moins un nombre pair)
console.log("Si tous les element verifier la condition qui le nombre pair (every)",allEven); // false (tous les nombres ne sont pas pairs)


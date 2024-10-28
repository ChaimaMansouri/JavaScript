//try catch exmple

try {
    // Code qui peut lancer une exception
    let result = 10 / 0; // Ceci ne lance pas une exception en JavaScript mais peut être problématique
    console.log(result);
  } catch (error) {
    // Code exécuté en cas d'exception
    console.error('Une erreur est survenue:', error);
  } finally {
    // Code qui s'exécute toujours, qu'il y ait eu une erreur ou non
    console.log('Bloc finally exécuté.');
  }

  
  //trow example

  function divide(a, b) {
    if (b === 0) {
      throw new Error('Division par zéro');
    }
    return a / b;
  }




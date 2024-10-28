// Define a class named Animal
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Define a class named Dog that extends Animal
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog1 = new Dog('Rex');
  dog1.speak(); // Output: Rex barks.
  
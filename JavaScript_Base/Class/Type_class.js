//CLASS de base 
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }

  const person1 = new Person("John", 30);
  person1.greet();  // Output: Hello, my name is John and I am 30 years old.

//Classe avec Méthodes Statics
class MathUtils {
    static add(a, b) {
      return a + b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  }
  
  console.log(MathUtils.add(5, 3));       // Output: 8
  console.log(MathUtils.multiply(5, 3));  // Output: 15
  
//Classe avec Héritage
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog1 = new Dog('Rex');
  dog1.speak(); // Output: Rex barks.

//Classe avec Méthodes Getters et Setters
class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
    }

    get name() {
      return this._name;
    }

    set name(newName) {
      this._name = newName;
    }

    get age() {
      return this._age;
    }

    set age(newAge) {
      this._age = newAge;
    }
  }

  const person2 = new Person("John", 30);
  console.log(person2.name); // Output: John
  console.log(person2.age);  // Output: 30
  person2.name = "Jane";
  person2.age = 25;
  console.log(person2.name); // Output: Jane

//Classe Abstraite (via Class Abstract)
class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error('Cannot instantiate abstract class Shape directly.');
      }
    }
  
    area() {
      throw new Error('Method "area()" must be implemented.');
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.area()); // Output: 78.53981633974483
  
  // const shape = new Shape(); // Error: Cannot instantiate abstract class Shape directly.

//Classe Interne Simple
class OuterClass {
    constructor(name) {
      this.name = name;
      this.innerInstance = new this.InnerClass('Inner Name');
    }
  
    display() {
      console.log(`OuterClass name: ${this.name}`);
      this.innerInstance.display();
    }
  
    // Classe interne
    InnerClass = class {
      constructor(innerName) {
        this.innerName = innerName;
      }
  
      display() {
        console.log(`InnerClass name: ${this.innerName}`);
      }
    };
  }
  
  const outerInstance = new OuterClass('Outer Name');
  outerInstance.display();
  // Output:
  // OuterClass name: Outer Name
  // InnerClass name: Inner Name

  
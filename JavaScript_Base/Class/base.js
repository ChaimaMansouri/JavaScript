// Define a class named Person
class Person {
    // The constructor method is called when an instance of the class is created
    constructor(name, age) {
      this.name = name; // Set the name property
      this.age = age;   // Set the age property
    }
  
    // A method to describe the person
    describe() {
      return `${this.name} is ${this.age} years old.`;
    }
  
    // A static method that can be called without creating an instance of the class
    static greet() {
      return "Hello!";
    }
  }
  
  // Create an instance of the Person class
  const person1 = new Person('John', 30);
  
  // Access the properties and methods
  console.log(person1.name);        // Output: John
  console.log(person1.age);         // Output: 30
  console.log(person1.describe());  // Output: John is 30 years old.
  
  // Call the static method
  console.log(Person.greet());      // Output: Hello!
  
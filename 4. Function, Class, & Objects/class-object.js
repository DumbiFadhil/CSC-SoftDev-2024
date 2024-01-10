// Contoh: Class dan Object
class Person { // Class
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let person1 = new Person("John", 25); // Object
person1.displayInfo();

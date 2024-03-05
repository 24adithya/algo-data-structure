// Constructor function
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Creating an object
const person1 = new Person('John');
person1.sayHello(); // Outputs: Hello, my name is John

console.log(person1);
console.log(person1.__proto__);
console.log(Object.getPrototypeOf(person1));

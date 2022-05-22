class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayHi () {
    console.log(`My name is ${this.name}, I am ${this.age} years old`);
  }
}

export default Person;
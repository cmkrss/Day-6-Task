//Write a “person” class to hold all the details.
class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    }
  }
  
  // Usage:
  const person1 = new Person('Manikandan', 27, 'Male');
  console.log(person1.getDetails()); // Output: Name: Manikandan, Age: 27, Gender: Male
  
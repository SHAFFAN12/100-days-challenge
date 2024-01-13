// // let result = score >= 80 ? "Pass" : "Fail";


// let person = {
//     name: "John",
//     address: {
//       city: "New York",
//       zipCode: 10001,
//     },
//   };
  
//   let city = person?.address?.city; 
//   console.log(city)

//   for...in: Iterates over the enumerable properties of an object, including inherited ones. Used for iterating over object keys.
//   for (let key in object) {
//     console.log(key, object[key]);
//   }

//   for...of: Iterates over iterable objects like arrays, strings, maps, sets, etc., providing values, not keys.
//   for (let value of iterable) {
//     console.log(value);
//   }
  


// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//       return 0;
//     }
//     const sum = numbers.reduce((acc, num) => acc + num, 0);
//     return sum / numbers.length;
//   }
// let avg=calculateAverage([12,22,22,1])
// console.log(avg)  


// function outerFunction() {
//     let outerVariable = "I am outer!";
//     function innerFunction() {
//       console.log(outerVariable);
//     }
//     return innerFunction;
//   }
  
//   let closure = outerFunction();
//   closure(); 
// Closures are functions that have access to variables from their outer (enclosing) scope, even after the outer function has finished executing




// let student = {
//     name: "John",
//     age: 20,
//     grades: [90, 85, 92],
//     calculateAverage: function () {
//       const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
//       return sum / this.grades.length;
//     },
//   };
  
//   console.log(student.calculateAverage()); 



// cloning an object
// let deepCopy = JSON.parse(JSON.stringify(originalObject));
// let shallowCopy = Object.assign({}, originalObject);
// let referenceCopy = originalObject;



// Loop for even/odd with ternary operator:

// let numbers = [1, 2, 3, 4, 5];
// for (let number of numbers) {
//   console.log(number % 2 === 0 ? "Even" : "Odd");
// }



// for loop: Used when the number of iterations is known.
// while loop: Used when the condition is checked before each iteration.
// do...while loop: Similar to while, but guarantees at least one execution.




// let users = [{ name: "Alice" }, { name: "Bob" }, {  }];

// for (let user of users) {
//   console.log(user?.name ?? "Name not available");
// }



// let car = { make: "Toyota", model: "Camry", year: 2022 };

// for (let key in car) {
//   console.log(key + ": " + car[key]);
// }



// break: Terminates the loop prematurely.
// continue: Skips the rest of the loop body and proceeds to the next iteration.



// function calculateTax(income) {
//     const taxRate = income > 50000 ? 0.2 : income > 20000 ? 0.15 : 0.1;
//     return income * taxRate;
//   }
// let salaryTax=calculateTax(6000)
// console.log(salaryTax)  




// let car = {
//     make: "Toyota",
//     model: "Camry",
//     startEngine: function () {
//       console.log("Engine started!");
//     },
//   };
  
//   car.startEngine(); 
  
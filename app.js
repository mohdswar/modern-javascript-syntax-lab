// const array1 = ['vanilla', 'chocolate', 'strawberry'];
// const array2 = array1.map((currentElement) => {
//   return currentElement + ' ice cream';
// });
// console.log(array2);
// Use `.map()` to iterate over the following array:
// const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// const numArry = nums.map((element) => {
//     return element * 2 ;
// });
// console.log(numArry);
// const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];
// const [firstPet, secondPet] = petsArray;
// console.log(firstPet); // 'Rover'
// console.log(secondPet); // 'Snuffles'
// // Equivalent in traditional bracket notation:
// console.log(petsArray[0]); // 'Rover'
// console.log(petsArray[1]); // 'Snuffles'
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.
// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// const [first, second] = pizzaToppings
// console.log(first)
// console.log(second)
// Your code here
// const person = {
//     name: 'Alex',
//     role: 'Software Engineer',
//   };
//   // Object destructuring:
//   const { name, role } = person;
//   console.log(name); // 'Alex'
//   console.log(role); // 'Software Engineer'
//   // Equivalent in traditional dot notation:
//   console.log(person.name); // 'Alex'
//   console.log(person.role); // 'Software Engineer'
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.
// const car = {
//     make: 'Audi',
//     model: 'q5',
// };
// const { make, model } = car
// console.log(make)
// console.log(model)
// console.log(car.make)
// console.log(car.model)
// Your code here
// const fruits = ['apple', 'orange', 'banana'];
// const vegetables = ['broccoli', 'carrot', 'spinach'];
// const fruitsAndVegetables = [...fruits, ...vegetables];
// console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// const controversialPizzaToppings = [...pizzaToppings]
// console.log(controversialPizzaToppings);
// const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
//   const clonedObject = { ...originalObject };
//   console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }
// const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
//   const clonedObject = originalObject;
//   clonedObject.foo = 'Goodbye';
//   console.log(originalObject); // { foo: 'Goodbye', bar: 100 }
// const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
//   // Copy the properties of originalObject:
//   const clonedObject = { ...originalObject };
//   // Update the properties of clonedObject:
//   clonedObject.foo = 'Goodbye';
//   clonedObject.bar = 0;
//   console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
//   console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }
// Duplicate the following object and spread its values into a new variable `myCar`.
// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
//   // Change the `model` property of `myCar` to 'q7'. Log both objects.
//   const myCar = {...car}
//   myCar.model = 'q7';
//   console.log('Model :', myCar);
//   // Your code here
// const fruitInventory = {
//     apples: 2,
//     oranges: 4,
//   };
//   const selectedFruit = 'apples'; // Variable as a dynamic key
//   const selectedFruitCount = fruitInventory[selectedFruit];
//   console.log(selectedFruitCount); // 2
// const fruitType = 'bananas'; // Variable as a dynamic key
// const fruitInventory = {
//   [fruitType]: 5,
// };
// console.log(fruitInventory); // { bananas: 5 }
// const propertyName = 'username';
// // Create an object named userProfile.
// const userProfile = {
//     [propertyName] : 5,
// };
// console.log(fruitInventory);
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
// Your code here
const sentence = (noun = 'cat', adjective = 'white') => {
  console.log(`the ${noun} is ${adjective}`)
}
// sentence()
// const age = 22;
// let access;
// if (age > 21) {
//   access = 'Yes';
// } else {
//   access = 'No';
// }
// console.log(access); // 'Yes'
// const age = 22;
// let access = age > 21 ? 'Yes' : 'No';
// console.log(access); // 'Yes'
// Convert the following `if...else` statement in to a ternary:
// let pizza = 'tasty';
// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }
// Your code here
// const pizzaa = 'tasty';
// let piz = pizzaa === 'tasty' ? 'yum' : 'yuck'
// console.log(piz)
// const result = false && 'foo';
// console.log(result); // Output: false
// const result = 'hello' && '';
// console.log(result); // Output: ''
// const result = 'foo' && 'bar';
// console.log(result); // Output: 'bar'
// const result = '' || 'foo';
// console.log(result); // Output: 'foo'
// const result = 2 || 0;
// console.log(result); // Output: 2
// const result = '' || 0;
// console.log(result); // Output: 0
// 1. SET LANGUAGE
// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:
// "LANG is equal to localLangConfig or the default value of English."
// const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null
// // a. Create a variable called LANG
// // b. Assign LANG the value of localLangConfig or 'en' as a default
// // Your code here
// const LANG = localLangConfig || 'en'
// // Log the result
// console.log('Language setting:', LANG);
// 2. SET WEBSITE THEME
// const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null
// // a. Create a variable called USER_THEME
// // b. Assign USER_THEME the value of userSavedTheme or 'light' as a default
// // Your code here
// const USER_THEME = userSavedTheme || 'light'
// // Log the result
// console.log('User theme setting:', USER_THEME);
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.
// const adventurer = {
//     name: 'Alice',
//   };
//   let cat; // Your code here
//   console.log(adventurer.cat?.age);
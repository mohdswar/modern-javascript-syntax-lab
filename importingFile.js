import { myNumber, myString } from './exportingFile.js';
console.log(myNumber, myString)
import person from './exportingFile.js'
console.log(person)
import name, { age, job } from './exportingFile.js';
console.log(name, age, job);
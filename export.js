// import { age } from './utils/age.js';
// import { firstName } from './utils/fname.js';

//  console.log(firstName,age)

// import { age } from './utils/age.js';
// import { firstName as name} from './utils/fname.js'; //if we want to use diff varible name

//  console.log(name,age)


import Person1 , {Person2,Person3} from './utils/Person.js'

const person1=new Person1("Azil",22)
console.log(person1.firstName,person1.age)

const person2=new Person2("Ahmed",22)
console.log(person2.lastName,person2.age)

const person3=new Person3("Azil Ahmed",22)
console.log(person3.fullName,person3.age)
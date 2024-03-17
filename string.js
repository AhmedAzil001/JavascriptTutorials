let firstName="Azil";
console.log(firstName);

console.log(firstName[1]); // string ka koi character acces


console.log(firstName.length); // length

//string methods -->

//trim()--> remove space string ke agge se aur piche se
console.log("trim()");
let myName="    Azil   ";

console.log(myName.length);//output is 11

myName.trim();//yeh myName me changes nae krega kuki string immutable hai aur new varibale bana ke dedega space hata ke.
// console.log(myName.length);//output is still 11 kuki string immutable hai.
myName=myName.trim();
console.log(myName.length);//ab output dega 4 kuki humlog trim krke yahi variable me change krre hai.(
console.log(myName);

let newName=myName.trim();
console.log(newName.length);

let azil="  n a m we  ";
console.log(azil.trim().length);//srf agge aur piche ka space remove karega


//toUpperCase() && lowerCase-->
console.log("upper and lower case");
let myName2="azil";
myName2=myName2.toUpperCase();
console.log(myName2);
myName2=myName2.toLowerCase();
console.log(myName2);


//slice(start index,end index) 
console.log("slice()");
console.log(myName.slice(0,2)); //0 se 2-1 yani 1 tk string dega
console.log(myName.slice(1));//1 se akhri tk print kr dega


//number to string
console.log("Num to Str");
let num=18;
console.log(typeof num);
num=num+"";//converted to string  (18 +""-->"18")
console.log(typeof num);

//string to number
console.log("str to num");
let str="18";
console.log(typeof str);
console.log(typeof +"18");//koi bhi string ke agge + lagane se wo number me convert ho jata hai.
str= +"azil";
console.log(typeof str);


//string concatenation
console.log("String concatenation")
let str1="azil";
let str2="ahmed";
let fullName=str1+" "+str2;
console.log(fullName);
let num1="18";
let num2="10";
console.log(num1.concat(num2))
console.log(num1+num2);
console.log(typeof(num1+num2));
console.log(+num1 + +num2);//+num1 converted to number and +num2 converted to num then added
console.log(typeof(+num1 + +num2));


//template string

let age=21;
let name="Azil";
//output --> my name is azil and i am 21 years old
console.log(`My name is ${name} and i am ${age} years old.`);

//`${can any variable}` for templating string
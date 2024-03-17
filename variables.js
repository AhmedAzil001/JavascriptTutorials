// "use strict"; //used to allocate error if any variable is declared without type

// console.log("Hello");

// //var keyword -->
// var firstName="Azil";

// console.log(firstName);

// var firstName="Ahmed"; //allowed so alag variable same name se ban jaega

// firstName="Ahmed";

// console.log(firstName);

// //let keyword -->  (always use let)
// let Name="azil";

// console.log(Name);

// //let Name="ahmed"; error dega yani dubara declare nae kr skte
// Name="Ahmed";

// console.log(Name);

// //const keyword --> (constant value)

// const pie=3.12;

// console.log(pie);

// //pie=2.15; //error kuki const ko change nae kr skte yeh constant hai

// //const pie=0; redeclare bhi nae kr skte const ko

// //undefined
// let a1;
// console.log(typeof a1);// undefined hota hai declare krle se

// //null
// let a2=null;
// console.log(typeof a2);

//bigInt

let num = BigInt(9999999999999999999999999n); //1 tarika bigint bnana eka
let num2 = 9999999999999999999999999n; //dusra tarika bigint bnane ka
console.log(typeof num);
console.log(typeof num2);
console.log(num + num2);
let num1 = 1;
//console.log(num+num1);//bigInt srf bigInt se add hoga to covert krlo big int me
console.log(num + BigInt(num1));

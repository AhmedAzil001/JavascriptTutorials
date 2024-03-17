//functions in javascript

// function wish(){
//     console.log("Happy Birthday");
// }
// wish();
// wish();
// wish();
// wish();
// wish();
// wish();
// wish();
// wish();
// wish();


// function add(){
//     return 2+5;
// }
// add();//kch print nae krega kuki return krra hai
// console.log(add());//ab value dega 7(2+5)

//parameter pass-->num1,num2
// function add(num1,num2){//parameter without data type diya jata hau js me
//     console.log(num1+num2);
// }
// add(2,5);//7 print karega  2,5 arguments hai 

//function decleration-->

// function isEven(num){
//     // if(num%2===0){
//     //     return true;
//     // }
//     // return false;
//     return num % 2 === 0;
// }
// console.log(isEven(2));

// function check(arr,target){//array bhi bas varible name se pass hoga as a parameter
//     for(let val of arr){
//         if(val===target){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(check([3,4,5],7));//false-->kuki 7 nae hai array me 
// console.log(check([3,4,5],5));//true-->kuki 5 hai array me


//function expression--> variable me func add krna
//function with no name is anonymous function
// const checkNum=function(arr,target){//array bhi bas varible name se pass hoga as a parameter
//      for(let val of arr){
//         if(val===target){
//             return true;
//         }
//     }
//      return false;
//  }
//  console.log(checkNum([7,5,9],5));


//arrow functions
// const wish= ()=>{
//     console.log("Happy Birthday");
// }
// wish();


// const check= (arr,target)=>{//array bhi bas varible name se pass hoga as a parameter
//     for(let val of arr){
//        if(val===target){
//            return true;
//        }
//    }
//     return false;
// }
// console.log(check([9,6,5],9));

// const add= (number) =>{
//     console.log(number%2===0);
// }
// add(8);

//if only one parameter
// const add= number =>{
//     console.log(number%2===0);
// }
// add(8);


//if only one line ya srf ek hi return wala line hai
// const add= number => number%2===0;
// console.log(add(8));


//function inside function
// const app= ()=>{
//     const myFunc= () => console.log("First Function")

//     const addTwo= (num1,num2)=> num1+num2;

//     const mulTwo= (num1,num2) => num1*num2;

//     console.log("Inside app()");
//     myFunc();
//     console.log(addTwo(5,3));
//     console.log(mulTwo(5,3));
// }
// app();


//lexical scope
// function myApp(){
//     const myVar="value1";
//     function myFunc(){
//         const myVar="value60";
//         console.log("inside myFunc():",myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }
// myApp();

//myFunc() ka lexical environment hoga myApp().
//myFunc() call krne ke baad javascript kya krega wo check karega pehle ki 
//myFunc() ke andr varibale present hai ya nae agar nae mila to wo check krega
//myFunc() ka lexical environment me yani myApp() ke andr woh same varibale hai ya nae 
//to agar myFunc() ke andr mila myVar to yahi wala print krega
//agar myFunc() ke andr nahi mile myApp() ka andr mila to isko hi print kr dega

// function myApp(){
//     const myVar="value1";
//     function myFunc(){
//         console.log("inside myFunc():",myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }
// myApp();

// const myVar="value1";
// function myApp(){
//     function myFunc(){
//         const myVar="value60";
//         console.log("inside myFunc():",myVar);
//     }
//     console.log(myVar);
//     myFunc();
// }
// myApp();

//ab myApp() ka lexical environment me check karega ki myVar kaha pe defined hai
//myApp() ka lexical environment hai global
//myFunc() pehle apne andr check krega fir apna lexical environment me chekc krega fir myApp() ka lexical environment me check krega


//block scope(let , const) vs function scope(var);
// {//let aur const dono ka same hisab hai
//     let val="Azil";
//     console.log(val);//no error kuki block ke andr access kr skte hai
// }
//console.log(val);//ERROR-->kuki let block variable hai yani block ke andr koi variable bana hai to usko block ke bahar acces nae kr skte

// let val="Ahmed";
// console.log(val);//yeh alag block hai wo uppr wala alag 
//{iske andr jo hai wo block hai}-->eg:if{},else{},func{}

{
    var val="Azil";
}
console.log(val);//errro nae dega kuki yeh function scope hai yani main function ke andr kahi pe bhi var abna ke kahi bhi use kr skte hai

{
    console.log(val);//kr skta kuki var function scope hai kahi bhi use ho skta
}
















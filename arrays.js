//bohot sara chiz ek bar store krna hai to array use karo

//creation of array
// let fruits = ["apple", "mango", "banana"];//string
// console.log(fruits);
// console.log(fruits[2]);
// fruits[1]="grapes";
// console.log(fruits);

// let num=[1,2,3,4];//numbers
// console.log(num);

// let mixed=[1,2,"azil","ahmed",null,undefined,false,true];//mixed data types is possible
// console.log(mixed);



// //array is an object
// let fruits = ["apple", "mango", "banana"];
// let obj={};
// console.log(typeof fruits);
// console.log(Array.isArray(fruits)); // checks if array is an array or not kuki objects bht sara hota hai aur array bhi object hai 
// console.log(typeof obj);
// console.log(Array.isArray(obj));//not an array so false;


//array methods **array is mutable to uska methods original array ko change kr skta hai

//push and pop
// let fruits = ["apple", "mango", "banana"]; 
// console.log(fruits);
// //push -agar array ka last me kch dalna hai to
// fruits.push("grapes");//akhri me add kr dega
// console.log(fruits);

//pop -agar last element ko remove krna hai 
// let fruits = ["apple", "mango", "banana"]; 
// console.log(fruits);
// //fruits.pop();//akhri mewlaa ko remove krega aur wo element ko return bhi krega
// console.log(fruits.pop());//banana array is remove krke return kiya jisko remove kiya usko
// console.log(fruits);


//unshift - array ka starting me add krna hua to
// let fruits = ["apple", "mango", "banana"];
// console.log(fruits);
// fruits.unshift("Lichi");//starting me add ho gya
// console.log(fruits);


//shift- starting se element remove krega
// let fruits = ["apple", "mango", "banana"];
// console.log(fruits);
// //fruits.shift();//starting se remove karega 
// console.log(fruits.shift());//remove krke return bhi karega removed value
// console.log(fruits);

//Note : push and pop are faster then unshift and shift;
//kuki push and pop me array ka akhri se add hoga to assan hai 
//lekin shift unshift me sara elements ko memeory me store krke ek ek krke shift krega fir add ya remove karega to jyda time lgega


//how to clone a array yani array ka copy bnana 
//*copy mtlb ki agar original array me chnages krenge to copy me changes nae hona chahiye

//let array1=["Item1","Item2"];
// let array2=array1; //kuki referenced hai
// console.log(array1===array2); //true


//making copy
// let array1=["Item1","Item2"];
// let array2=["Item1","Item2"];
// console.log(array1===array2);//false

//array1 alag bana hai heap me aur array2 alag bana hai heap me
//to dono equal nae hai.

// array1.push("Item3");//array1 me chnages se array2 me koi frk nae prega
// console.log(array1);
// console.log(array2);

//dono alag alag hai heap me

//clone krne ka tarika
// let array1=["Item1","Item2"];
// let array2=array1.slice(0);//copy ban gya
//2-->let array2=[].concat(array1);//copy ban gya
//3-->let array2=[...array1];//[...array] is spread operator array1 ka element ko spread krke array2 me daal dega
// console.log(array1===array2);
// array1.push("Item3");
// console.log(array1);
// console.log(array2);

//clone krne ke baad array1 me kch changes krne se cloned array yani array2 mey koi fark nae prega
//slice method is faster but [...]is commonly used


//concate two array
//let array1=["Item1","Item2"];
//1->let array2=array1.slice(0).concat(["Item3","Item4"]);
//2->let array2=[].concat(array1,["Item3","Item4"]);
//3->let array2=[...array1,"Item3","Item4"];
//console.log(array2);
// let array2=["Item3","Item4"];
// console.log([].concat(array1,array2));
// console.log([...array1,...array2]);


//for loop in array
// let arr=[1,2,3,4,5,];
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//const for array *(we can use functions of array but not change the address that is agar new array denge usko to wo new array ko point krega n to wohi nae krne dega const)
// const arr=["Azil","Amir"];
// console.log(arr);
// console.log("After push");
// arr.push("Nobody");//isliye push hua kuki arr me address hai to humlog uska address nae change kre
// console.log(arr);
//arr=["nobita","sizuka"];  //ab error dega kuki humko new array ka address store krre hai wahi same arr wala array mey
//we can change the address that is the value without using function using let



//for of loop--> use karo jab srf value se kaam hai
// const arr=["Azil","Ahmed","Goku","Vegeta"];
// for(let name of arr){  //when we dont need the index
//     console.log(name);
// }


//for in loop--> use karo jab index chhaiye
// const arr=["Azil","Ahmed","Goku","Vegeta"];
// for(let index in arr){  //when we need the index
//     console.log(index);
//     console.log(`Value at index ${index} is ${arr[index]}`);
// }



//array destructuring--.

// const arr=["Azil","Ahmed"];
// let firstName=arr[0];
// let surname=arr[1];
// console.log(`${firstName} ${surname}`);

//short cut
// let [firstName,surname]=arr;
// console.log(firstName);
// console.log(surname);
// firstName="Goku"; NO ERROR
// console.log(firstName);

// const [firstName,surname]=arr;
// console.log(firstName);
// console.log(surname);
// firstName="Goku";// ERROR   kuki variable type const hai to usko change nae kr skte 
// console.log(firstName);

// const arr=["Azil","Ahmed","An"];
// let [firstName,surname]=arr;
// console.log(firstName);
// console.log(surname);//"An" wala ka kch nae hoga


// const arr=["Azil","Ahmed"];
// let [firstName,surname,name]=arr;
// console.log(firstName);
// console.log(surname);
// console.log(name);//undefined kuki array ka first do lelega bas kuki array me srf 2 elements hai


// const arr=["Azil","Ahmed","An"];
// let [firstName, ,name]=arr;//bich ka agar skip krna hua to bich me coma dedo jisko skip krna hai
// console.log(firstName);
// console.log(name);//"ahmed" ko skip krke  "An" store ho jaega



// const arr=["Azil","Ahmed","Goku","Vegeta"];
// let [firstName,name,...newArr]=arr;//spread operator se bacha hua element array ban jaega aise
// console.log(firstName);//Azil
// console.log(name);//Ahmed
// console.log(newArr);//ab bacha hua ["Goku","Vegeta"] array ban gya



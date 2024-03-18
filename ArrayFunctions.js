//important array functions

// const numbers=[2,3,5,6];

// function multipyBy2(num , index){
//     console.log(`Index is : ${index} and ${num} * 2 = : ${num*2}`);
// }

//multipyBy2(numbers[0],0);
//if i want to pass all indexs
// for(let i=0;i<numbers.length;i++){
//     multipyBy2(numbers[i],i);
// }


//forEach-->callback function which takes a function
//numbers.forEach(multipyBy2); // numbers ka har value ke liye function call hoga

//forEach arguments pass karega
//yehbhi kr skte drct function 
// numbers.forEach(function(num , index){ //forEach arguments pass karega numbers ka jo function me chahiye
//     console.log(`Index is : ${index} and ${num} * 2 = : ${num*2}`);
// })


//use of forEach
// const users=[
//     {name:"azil",age:22},
//     {name:"Goku",age:22},
//     {name:"ahmed",age:22}
// ]

// users.forEach(function(user){ //user me bar bar objects aega jo users array ka andr hai
//     console.log(user.name);
// });

// users.forEach((user,index)=>{ //user me bar bar objects aega jo users array ka andr hai
//     console.log(user.name , index);
// });


//map method-->yeh callback function ka output pura array elements ke liye jo return hoga kuso array me store krke array return kr dega

// const square=function(num){
//     return num*num;
// }
// const newArr = numbers.map(square);
// console.log(newArr);

// const square=function(num){
//     console.log(num*num);
// }
// const newArr = numbers.map(square);
// console.log(newArr);//undefined array kuki return nae kiye kch to yani map function me kch return rkna hoga jo new array dega outputs ka

// const newArr=numbers.map((num ,index)=>{
//     //return `${num*num} index : ${index}`;
//     return index;
// });
// console.log(newArr);

//use of map
// const users=[
//     {name:"azil",age:22},
//     {name:"Goku",age:22},
//     {name:"ahmed",age:22}
// ]

// const userName=users.map((user)=>{
//     return user.name;
// });
// console.log(userName);


//filter method-->iska callback func boolean return krega yani agar array ka elements pe kch condition lgna hai to filter jo jo element ka true hora usko new array me dalke true conditoon wala sara elements ko return krega
// const newArr=numbers.filter((num)=>{//agar false hua to filter false wala ko ignore kr dega lekin jo true ho jaega usko new array me dalke dedega
//     return num%2===0;//condition true hoga jo num ke liye sf ussi ko array me dalke return krega
// });

// console.log(newArr);//we filtered even numbers



//reduce method--->array pe lgega aur kch n kch kaam hoke single elemnt return karega

//aim:sum of all the numbers in array
// const numbers=[2,3,5,6];
// const sum=numbers.reduce((accumulator , currentValue)=>{
//     return accumulator+currentValue;
// });
// console.log(sum);

// accumulator  currentValue  return
//  2            3             5
//  5            5             10
//  10           6             16

//return jo hoga wo accumulator ban jaega aur next value currentValue ban jaega
// const numbers=[2,3,5,6];
// const sum=numbers.reduce((accumulator , currentValue)=>{
//     return accumulator+currentValue;
// },100);//yani accumulator me initial value ab 100 ban jaega aur currentValue me 2 aa jaega
// console.log(sum);

//real life example
// const userCart=[
//     {productId:1,productName:"Mobile",price:12000},
//     {productId:2,productName:"Laptop",price:120000},
//     {productId:3,productName:"Headphone",price:1000},
// ]

// //aim:total of price of product 1 2 nd 3
// const totalPrice=userCart.reduce((totalPrice , currentProduct)=>{//totalprice me initilally 0 rhega aur currenproduct rhega array ka firt element yani pehla object
//     return totalPrice + currentProduct.price;
// },0);

// console.log(totalPrice);
//totalPrice   currentProduct   return 
// 0             {}               12000
// 12000         {}               132000
// 132000        {}               133000


//sort method-->it will change original array

// const arr=[1,3,2,8,4,9];
// console.log(arr.sort()); 
// console.log(arr);

// const arr=[2,200,1,4,50000,3938388];
// console.log(arr.sort());//it will not sort 
//-->kuki array ko string me convert krke ASCII value ke hisan se sort krta hai
//-->aur har string ka first wala char ka ASCII value ke hisab se sort krega


// const arr=["Baap","Azil","azil","Goku",];
// console.log(arr.sort());//dictonary ke hisab se sort hoga aur agar mixed case hai to pehle uppercase wala sort hoga

// const arr=[5,9,1200,410,3000];
// arr.sort((a,b)=>{ //passing a callback arrow function inside sort function
//     return a-b // if want to sort in descending order then b-a
// });
// console.log(arr);//now correct result

//1200,410
//a-b --->1200-410=790
//a-b ---> positive ---> b,a
//result ---> 410,1200

//5,9
//a-b --->5-9=-4
//a-b ---> negative --->a,b
//result ---> 5,9

//real world example
//filter system in amazon website c=acoording to price lowtohigh
//  const products=[
//     {productId:1,price:500},
//     {productId:5,price:200},
//     {productId:9,price:8500},
//     {productId:2,price:5000}
//  ];

//  const lowToHigh=products.slice(0).sort((a,b)=>{//clone bnake krenge kuki original array ko sort kr dega to product array modify ho jaega jo humko nae chhaiye aida kuki website khrb ho jaega
//     return a.price-b.price;
//  })
//  console.log(lowToHigh);//yaha price sort hua
//  console.log(products);//


//find method--> it will check for a condition for true only for one element of array and return it
// const arr=["hello","cat","dog","lion"];
//  function isLenght(string){
//     return string.length === 3;
//  }

// const ans= arr.find(isLenght);//array ka sara elements ke liye callback function chalaega lekin srf rist occurence ke liye uske bad yeh exit kr jaega
// console.log(ans);

//real life example
// const users=[
//     {userId:1,name:"azil"},
//     {userId:3,name:"Goku"},
//     {userId:4,name:"ahmed"},
//     {userId:7,name:"Vegeta"},
// ]
// //when we want to find a user with userId 3
// const ans=users.find((user)=> user.userId === 3);
// console.log(ans);


//every method-->it will check one conditon for all elements of array and return true if all conditons are satisfied
// const arr=[2,4,2,1,6];
//we want to check ki array element ka sara elements kya even hai?
// const ans=arr.every((num)=>num%2 === 0);//callback function return boolean and every will also return true;
// console.log(ans);//true tb dega jab sara element ke liye true ho condition callback wala

// function isEven(num){
//     return num%2===0;
// }
// const ans=arr.every(isEven);
// console.log(ans);

//real life example
// const cart=[
//     {productId:2,price:3000},
//     {productId:3,price:300},
//     {productId:6,price:2000},
//     {productId:4,price:30},
// ]
// //we need to chekc ki kya sara elements ka price 30000 se kam hai ya nae
// const ans=cart.every((customer)=>{
//     return customer.price<30000;
// })
// console.log(ans);


//some method-->koi ek element pe condition satisfy hone se true dega
// const num=[2,5,1,3,4];
// //we need to check kya ek bhi no.even hai?
// const ans=num.some((num)=>num%2 === 0);//2 , 4 even hai
// console.log(ans);

//real life example
// const cart=[
//     {productId:2,price:3000},
//     {productId:3,price:300},
//     {productId:6,price:2000},
//     {productId:4,price:30},
// ]
// //we need to check kya koi aisa item hai jiska price 2500 se uppr hai?
// const ans=cart.some((product)=>product.price>2500);
// console.log(ans);//id:2 wala product jiska price hai 3000


//fill method--->chnge original array
//value,start,end
//array bnana hai 10 lenght wala element aur usme sara element ko -1 se fill karo
// const arr=new Array(10).fill(-1);
// console.log(arr);

// const arr=[1,2,3,4,5,6,6];
// arr.fill(0,2,5);//2 se 5 index pe 0 daal dega
// console.log(arr);

//splice method-->array ke bich ya start ya end se kch elemnts del krne ke kaam atta hai
 //(start,no of items to delete,insert)
//  const arr=['item1','item2','item3'];
//  console.log(arr);
 //delete
//  const delItem=arr.splice(1,1);//del from 1 and only 1 item
//  console.log(delItem);//del hua waha item ko del krke return krega array banake
//insert 
// arr.splice(1,0,'Inserted item');//insert at position 1 then 0 for del none
// console.log(arr);

//insert and del
// const delItem=arr.splice(1,2,"inserted");
// console.log(delItem);//del from 1 ..del 2 items
// console.log(arr);//insert at 1


//iterable,array like objects

//iterable-->jinke uppr for of loop laga pae
//-->string and array are iterables

//array like objects-->jinke pass lenght property hai
//-->jisko hum index se access kr skte hai
//-->string
// const name="Azil";
// console.log(name.length);
// console.log(name[3]);


//sets-->iterable and it is same as java
// const numbers = new Set([1,2,3]);//--> ek iterable hi add hoga isme
// console.log(numbers);

// const numbers = new Set();
// numbers.add(2);
// numbers.add(8);
// numbers.add(2);
// numbers.add(['item1','item2']);
// numbers.add(['item1','item2']);//yeh duplicate nae hau kuki do alag array hai with do alag address
// const arr=['item1','item2','item3'];
// numbers.add(arr);
// numbers.add(arr);//ab yeh duplicate hai
// console.log(numbers);
// console.log("Size :",numbers.size);
// if(numbers.has(2)){
//     console.log("Present");
// }
// for(let number of numbers){
//     console.log(number);
// }


//Maps---> store key value pair
//-->iterable
//--->odered fashion--->order maintained rhega
//key can be of any type--->num or string or character or symbol or array or objects
// const person=new Map();
// person.set('name','Ayesha');
// person.set('age',22);
// person.set(1,'June');
// console.log(person);
// console.log(person.keys());
// for( let key of person.keys()){
//     console.log(key,typeof key);
// }

// for(let [key,value] of person){
//     console.log(key,value);
// }

// const person=new Map([['name','Azil'],['age',22]]);
// console.log(person);

// const person1={
//     id:1,
//     name:"Azil"
// }
// //agar person1 ko new identity dena hai bina object me kch add kiye to usko map me daal skte
// const extraInfo=new Map();
// extraInfo.set(person1,{age:22,gender:"male"});
// console.log(extraInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);



//clone an object
// const obj1={
//     key1:"Value1",
//     key2:"Value2",
// }
// const obj2={...obj1}//--->1 method
// const obj3=Object.assign({},obj1);//empty object {} isme obj1 ka clone ban jaega 
//to agar obj1 me changes krenge to obj2 and obj3 me koi frk nae prega


//optional chaining
// const person={
//     name:"Azil",
//     //age:22
// }

// console.log(person.name);//no error
// console.log(person.age);//error kuki age nae hai object me aur syd agge add ho skta hai age to error se bachne ke lie ? use krte hai
// console.log(person?.age);//ab error nae dega undefined dega....? check karega ki kya person me age hai ya nae agar hoga to print kr dega aur nae hoga to undefined print krega


//this keyword
// function info(){
//     console.log(`${this.name} is ${this.age} years old.`);
// }

// const person1={
//     name:"Azil",
//     age:22,
//     personInfo:info
// }
// const person2={
//     name:"Goku",
//     age:22,
//     personInfo:info
// }

// info()//undefined print hoga kuki this wala me kch gya hi na 

// person1.info();//ab run hoga yani person1 as a object passn hoga jiska elements ko this krke yani current obj ka element ko access kr skte hai
// person2.info();//ab person 2 wala pass hoga to uska data print hoga


//call()
// const user1={
//     name:"Azil",
//     age:22,
//     about: function(){
//         console.log(this.name,this.age);
//     }
// }
// const user2={
//     name:"Goku",
//     age:22
// }
// user1.about();
// //we need to use about: in user2 then how?
// user1.about.call(user2);//call(yaha pass hoga ki this ki kya value hogi jo yaha user2 hoga)
// user1.about.call();//undefined aega kuki this me koi value nae diye hai

// const user1={
//     name:"Azil",
//     age:22,
//     about: function(gender,surname){
//         console.log(this.name,surname,gender,this.age);
//     }
// }
// const user2={
//     name:"Goku",
//     age:22
// }

// user1.about.call(user2,'Female','Iqbal');

// function about(gender,surname){
//     console.log(this.name,surname,gender,this.age);
// }

// const user1={
//     name:"Azil",
//     age:22,
// }
// const user2={
//     name:"Goku",
//     age:22
// }
// about.call(user1,"Male","Ahmed");
// about.call(user2,"Female","Iqbal");

//apply()
// function about(gender,surname){
//     console.log(this.name,surname,gender,this.age);
// }

// const user1={
//     name:"Azil",
//     age:22,
// }
// const user2={
//     name:"Goku",
//     age:22
// }
// about.apply(user1,["Male","Ahmed"]);
// about.apply(user2,["Female","Iqbal"]);

//bind()-returns a function
// function about(gender,surname){
//     console.log(this.name,surname,gender,this.age);
// }

// const user1={
//     name:"Azil",
//     age:22,
// }
// const user2={
//     name:"Goku",
//     age:22
// }
// const func1=about.bind(user1,"Male","Ahmed");
// func1();
// const func2=about.bind(user2,"Female","Iqbal");
// func2();


//arrow function and this-->ek level up krke wo arrow func ka this hoga yani user1 ka ek level up yani window iska thsi rhega
// const user={
//     name:'Azil',
//     age:22,
//     about: ()=>{
//         console.log(this.name,this.age);
//     }
// }
// user.about();


// const user={
//     name:"Azil",
//     surname:"Ahmed",
//     email:"azilahmed2016@gmail.com",
//     age:22,
//     address:"80A/5 Topsia Road, Kolata.",
//     about: function(){
//         return `${this.name} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age>=18;
//     }
// }
// console.log(user.about());


// const userMethods={
//     about:function(){
//         return `${this.name} is ${this.age} years old`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
// function createUser(name,surname,email,age,address){
//     const user=Object.create(userMethods);
//     user["name"]=name;
//     user["surname"]=surname;
//     user["email"]=email;
//     user["age"]=age;
//     user["address"]=address;
//     user["about"]=userMethods.about;//yaha bar bar method bamta to bekar memory leta isliye iska alag se object bana liya
//     user["is18"]=userMethods.is18;
//     return user;
// }

// const user1=createUser("Son","Goku","something@gmail.com",22,"khidirpur");
// const user2=createUser("Azil","Ahmed","azilahmed2016@gmail.com",22,"Topsia");
// console.log(user1.about(),user2.about())
// console.log(user1.is18(),user2.is18())
// console.log(user1);
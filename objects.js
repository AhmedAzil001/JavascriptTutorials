//object-->referenced type 
//for real world data
//objects use key value pair
//dont have index

//how to create an object
// const person={
//     name:"Azil",//name is *key* Azil is *value*
//     age:22
// }
// console.log(person);
// console.log(typeof person);

// //how to access data from object
// 1-->console.log(person.name);
// 2-->console.log(person["age"]);//""->string ke form me isliye kuki object ka key by default string type hi rehta hai

//key ko properties bhi botte hai 


//storing array inside object
// const person={
//     name:"Azil",
//     age:22,
//     hobies:["Cricket","Football","MMA"]
// }
// console.log(person.hobies);

//how to add new key value pair in object
//1--> person.gender="Male";
// console.log(person);

//2--> person["gender"]="Male";
// console.log(person);


//dff between dot and braket[]

//dot variable ko key man leta hai aur bracket me variable ke andr jo rehta usko key manta hai ya to "andr jo rehta hai usko key maan leta hai"
// const person={
//     name:"Azil",
//     age:22,
//     //person hobies:["Cricket","Football","MMA"] //it will give error kuki js me variable ka bich pe space allowed nae hai
//     "person hobies":["Cricket","Football","MMA"] 
// }
//console.log(person);
//console.log(person.person hobies);//yeh error dega to dot yaha use nae kr skte 
//console.log(person["person hobies"]); //tab yaha brakcet operator ka use aega.

//const key="email";
//person object ne key ke andr email jo hai usko ek key bnana hai 
//person.key="azilahmed2016@gmail.com";//add ho hua key lekin key name se hi ek key add hua email name se nae hua
//person["key"]="azilahmed2016@gmail.com";//add ho hua key lekin key name se hi ek key add hua email name se nae hua
//person[key]="azilahmed2016@gmail.com";//ab email name se key add hua kuki person[key] ka mtlb person["email"] hai


// how to iterate in object

//for in loop

// const person={
//     name:"Vegeta",
//     age:22,
//     "person hobies":["Cricket","Football","MMA"] 
// }

// for(let key in person){
//     //console.log(key);//key print ho jaega jo hai sab
//     //console.log(person.key);//3 bar undefined print hoga kuki person.key krne se dost opera wo variable key dekhega ki key name ka koi key hai object me ya nae isliye undefined kuki key name ka key nae mila.
//     //console.log(person[key]);//yeh sahi tarika hai 
//     console.log(`${key} : ${person[key]}`);
// }

//Object.keys

// const person={
//     name:"Goku",
//     age:22,
//     "person hobies":["Cricket","Football","MMA"] 
// }

// console.log(Object.keys(person));//keys ka array dega
// for(let key of Object.keys(person)){ //Object.key array dega keys ka to for of loop use krke value milega array ka ussi ko use krke sara key ka value mil skta
//     //console.log(key);//key dega sara
//     console.log(person[key]);//uss key ka value dedega
// }


//computed properties

// const key1="Obj1";
// const key2="Obj2";

// const value1="Val1";
// const value2="Val2";

// const obj={
//     key1:value1,
//     key2:value2
// }
// console.log(obj); //key1 hi key ban jaega to nae use kr skte

// const obj={
//     [key1]:value1,
//     [key2]:value2
// }
// console.log(obj);//yaha key me ab key1 wala ka value ho jaega yani Obj1


//another way
// const obj={};
// obj[key1]=value1;
// obj[key2]=value2;
// console.log(obj);


//spread operator
// const arr1=[1,2,3];
// const arr2=[4,5,6];

// arr3=[..."abc"];//...iterable (string and array but not number)
// console.log(arr3);//yeh string ko spread krke array bana dega ek ek character se

//spread operator in objects
// const obj1={
//     key1:"value1",
//     key2:"value2",
//     key1:"value3"//agar 2 same key hau to akhri wala lega kuki akhri vala uppr wala ko override kr dega
// }
// console.log(obj1);

// const obj1={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2={
//     key1:"valueUniq",
//     key3:"value3",
//     key4:"value4"
// }
// const newObj={
//     ...obj1,...obj2 //isme obj2 wala ka key1 rhega kuki ab obj2 override krra
// }
// const newObj={
//     ...obj2,...obj1,key69:"Value69" //ab isme obj1 wala ka key1 rhega kuki ab obj1 override krra
// }
// console.log(newObj);

// const newObj1={..."abc"}//character ka index key ban jaega aur character value ban jaega
// console.log(newObj1);

// const newObj2={...["Goku","Vegeta"]}//array element ka index key ban jaega aur array element value ban jaega
// console.log(newObj2);


//object destructuring--> kab use karna hai?ans:jab key ko as a variable use krna hai tab

//normal way-->
// const person={
//     name:"Goku",
//     age:22,
//     surname:"Son",
//     degree:"Btech"
// }
//agar name name se variable bnana hai ya age name ka
// const name=person.name;
// const age=person.age;
// console.log(name," ",age);

//shortcut -->destructring
// let { name , age } = person;//do variable ban gya ab kahi bhi use kr skte isko
// console.log(name);
// console.log(age);
// name="Bulma";//obj ka value change kr skte agar datatype constant nae hua to
// console.log(name);

// let { name:nameVar , age:ageVar } = person;//agar dusra name ka variable bnana ho yani key ka name ka varibale agar nae bnana to dusra variable use kr skte hai
// console.log(name);//kch print nae hoga kuki nameVar ab variabke hai jisme value hai
// console.log(nameVar);

// let { name , age , ...remainingProperties} = person;
// console.log(remainingProperties);//remaining jitna hau key value usko yeh remainingPorperties(obj ek form me store hoga) wala obj mey store kr dega


//objects inside array
// const users=[
//     {name:"Bulma",age:21,gender:"Female"},
//     {name:"Vegeta",age:21},
//     {name:"Goku",age:22}
// ]
// console.log(users);
// for(let user of users){
//     console.log(`${user.name} age is ${user.age}`);
// }

//nested destructing of array
// const [user1,user2,user3] = users;
// console.log(user1); //{name:"Bulma",age:21,gender:"Female"}

//agar humko user1 ka name aur user3 ka age chhaiye bas

// const [{name}, ,{age}]=users;//user1 ka name aur user3 ka age leliye obj ke form me destructuring krke
// console.log(name);
// console.log(age);

//agar humko user1 ka name aur gender aur user3 ka age chhaiye bas
// const [{name,gender}, ,{age}]=users;//user1 ka name aur user3 ka age leliye obj ke form me destructuring krke
// console.log(name,gender);
// console.log(age);

// //same key nae le skte to variable bana lo const [{name,age}, ,{age}] -> error dega
// const [{name:Name,age:user1Age}, ,{age:user3Age}]=users;//user1 ka name aur user3 ka age leliye obj ke form me destructuring krke
// console.log(Name,user1Age);
// console.log(user3Age);





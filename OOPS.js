//function to create multiple objects
// const userMethods={
//     about:function(){
//         return `${this.name} is ${this.age} years old`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
// function createUser(name,surname,email,age,address){
//     const user={};
//     user["name"]=name;
//     user["surname"]=surname;
//     user["email"]=email;
//     user["age"]=age;
//     user["address"]=address;
//     user["about"]=userMethods.about;//yaha bar bar method bamta to bekar memory leta isliye iska alag se object bana liya
//     user["is18"]=userMethods.is18;
//     return user;
// }

// const user1=createUser("Ayesha","Iqbal","ayeshaiqbal@gmail.com",22,"khidirpur");
// const user2=createUser("Azil","Ahmed","azilahmed2016@gmail.com",22,"Topsia");
// console.log(user1.about(),user2.about())
// console.log(user1.is18(),user2.is18())



// const obj1={
//     key1:"value1",
//     key2:"value2"
// }

// const obj2={
//     key3:"value3",
// }

//agar obj2 ke pass key1 na mile to obj1 me jake key1 print kare
//console.log(obj2.key1);//undefined dega

// const obj1={
//     key1:"value1",
//     key2:"value2"
// }

//ek khali object bnane ka dusra tarika hai Object.create()
// const obj2=Object.create(obj1);//pehle obj2 pe dekhega pehle fir waha nae mila to ob1 pe jake dekhega
// console.log(obj2.key1)
// console.log(obj2)
// console.log(obj2.__proto__) //agar current object me nae milega to js uska proto me check krega 
//Object.create -->obj1 ko obj2 ka proto bana dega to yani obj2 me nae mila to obj1 me dekhega
//proto se extra memory nae lgega kaam asan ho jaega


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
//     return user;
// }

// const user1=createUser("Ayesha","Iqbal","ayeshaiqbal@gmail.com",22,"khidirpur");
// const user2=createUser("Azil","Ahmed","azilahmed2016@gmail.com",22,"Topsia");
// console.log(user1.about());
//createUser me nae mila to proto me check krega yani userMthods me kuki object.create ke wajah se createUser ka proto me userMethods ban gya hai 



//javascript function ===> functions + object (functions act like objects)
// function hello(){
//     console.log("Hello World");
// }

// console.log(hello.name);

// //you can add your own properties to function just like we add in objects
// hello.myProperty="Azil Papa";
// console.log(hello.myProperty);



//Prototype
//when we create a functions then it gives us a free space and that free space is an object which is known as prototype
//we can use this space ie we can use this prototype
//only functions provide prototype property

// function hello(){
//     console.log("Hello World");
// }
// console.log(hello.prototype);// {} free space object which we can use to add key value pair to function

// //how to add property to prototype
// hello.prototype.name="Azil";
// hello.prototype.age=22;
// hello.prototype.f=function(){
//     return "YES"
// };
// console.log(hello.prototype);
// console.log(hello.prototype.f());
// yani agar function me nae mila to prototype me check karega


//how to make a connection between proto and prototype==>
// function createUser(name,surname,email,age,address){
//     const user=Object.create(createUser.prototype);//createUser  ka prototype ab creatUser ka proto ban jaega
//     user["name"]=name;
//     user["surname"]=surname;
//     user["email"]=email;
//     user["age"]=age;
//     user["address"]=address;
//     return user;
// }
// createUser.prototype.about=function(){  //function ka protoype me add hora
//     return `${this.name} is ${this.age} years old`;
// }
// createUser.prototype.is18=function(){
//     return this.age>=18;
// }

// const user1=createUser("Ayesha","Iqbal","ayeshaiqbal@gmail.com",22,"khidirpur");
// console.log(user1);
// console.log(user1.about()); 


// new keyword--->khud bana dega relation protoype aur proto ke bich
// function createUser(name,age){
//     this.name=name;
//     this.age=age;
// }
// createUser.prototype.about=function(){
//     console.log(this.name,this.age)
// }

// const user1=new createUser("Azil",22);

//new keyword kya krra ?
//--->empty object create krra hai-->this = {}   //aur empty object ka value hai this
//--->return this-->empty object ko return krega
//--->createuser ka prototype ko createUser ka proto(yani ref) bana dega(Object.cearte()-->yeh function ka kaam new keyword kr dega)

// console.log(user1)
// console.log(user1.about());

// function CreateUser(name,surname,email,age,address){ //functions name capital letter se chalu karo taki sbko pata chale ki yaha new keyworx use krke bnana hoga object
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.age=age;
//     this.address=address;
//     return this; //return this kr bhi skte nae bhi kuki new this retur krega khudse kuki wo this ka properties hai
// }
// CreateUser.prototype.about=function(){  //function ka protoype me add hora
//     return `${this.name} is ${this.age} years old`;
// }
// CreateUser.prototype.is18=function(){
//     return this.age>=18;
// }

// const user1=new CreateUser("Ayesha","Iqbal","ayeshaiqbal@gmail.com",22,"khidirpur");
// console.log(user1);
// console.log(user1.about()); 

//hasOwnProperty()
// for(let key in user1){
//     console.log(key);//yeh sara key dedega user1 ka keys aur uska proto me jo keys hai wobhi dega
//     //agar humko srf user1 ka keys chahiye to humlog use krenge hasOwnProperty()
//     if(user1.hasOwnProperty(key)){ //isse ab check hoke print hoga ki user1 ka khudka key hai ya nae
//         console.log(key);
//     }
// }


//how to check proto of a functions
// let arr=[1,2,3];
// console.log(Object.getPrototypeOf(arr))


//class in js
// class CreateUser{ 
//     constructor(name,surname,email,age,address){
//         this.name=name;
//         this.surname=surname;
//         this.email=email;
//         this.age=age;
//         this.address=address;
//     }
//     about(){
//         return `${this.name} is ${this.age} years old`;
//     }

//     is18(){
//         return this.age>=18;
//     }
// }

// const user=new CreateUser("Ayesha","Iqbal","ayeshaiqbal@gmail.com",22,"khidirpur");
// console.log(user.about())
// console.log(Object.getPrototypeOf(user))

// //extend keyword in js

// class Animal{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }

//     eat(){
//         return `${this.name} is eating`
//     }
//     isCute(){
//         return "Very Cute"
//     }
// }

// class Dog extends Animal{
//     constructor(name,age,breed){
//         super(name,age);
//         this.breed=breed;
//     }

//     whatBreed(){
//         return `${this.name} is a ${this.breed}`;
//     }

//     eat(){
//         return `Modified eat: ${this.name} is eating`
//     }
// }

// const tommy=new Dog("Lodu",30,"Pug");
// console.log(tommy.eat());
// console.log(tommy.whatBreed());


//getters and setters

class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }

    get fullName(){ //now it will be used as a property
        return `${this.firstname} ${this.lastname}`;
    }

    set fullName(fullname){
        const [firstname,lastname]=fullname.split(" ");
        this.firstname=firstname;
        this.lastname=lastname;
    }

    //static method nd property
    static classInfo(){
        return "This is person class"
    }

    static name="Static property"
}

const person1=new Person("Azil","Ahmed",22);
console.log(person1)
// console.log(person1.showName())
console.log(person1.fullName)//get use krke without () yeh lagai call kr diye ---> showName as a property treat hoga
person1.fullName="Ayesha Iqbal"
console.log(person1.fullName)
console.log(Person.classInfo())
console.log(Person.name);
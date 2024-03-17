//synchronous programming
//line by line chalega code
//pehle ek line run hoke complete hoga finish hoga tbdusra line chalega
//isse code block ho skta hai

//asynchronous programming
//ekstah multiple lines of code run hoga

//setTimeout--->
// console.log("Start")
// setTimeout(()=>{
//     console.log("Inside setTimeout")
// },1000) //1000 mili sec==1 sec ---->ye time mtlb ki kitna delay krna hai code ko
// console.log("End")
//imps points
//setTimeout js dedega browser ko to browser ke pass jaega waha 1000milisec tk wait krega
//fir baki ka code js run krega aur 1000milisec baad browser wapas dega function aur wo store hoga callback queue me aur fir event loop check
//event loop check krega ki kya js sara line of code execute kr chuka hai ya nae, jbtk sab line execute na krde tbtk wo
//yeh setTimeout wala callback function ko global execution context me nae dALEGA
//to bhale setTimeout me 0 milisec ho firbhi output last me dega kuki wo event loop me wait krega jbtk pura js wala run na ho jae
//clearTimeout(id)--->setTimeout wala function ko run nar kene dega--->id setTimeout ka hai

//setInterval
// console.log("Start")
// setInterval(()=>{
//     console.log(Math.random())
// },1000)   //---> har 1000 mili sec ke baad yeh kaam hoga
// console.log("End")

//callback{}
//  function addTwoNumbers(num1,num2,onSuccess,onFailure){
//     if(typeof(num1)==='number' && typeof(num2)==="number"){
//         onSuccess(num1,num2);
//     }else{
//         onFailure();
//     }
//  }

//  addTwoNumbers(5,6,(num1,num2)=>{
//     console.log(num1+num2);
//  },()=>{
//     console.log("Failed")
//     console.log("Type Error")
//  })

//  addTwoNumbers("5",6,(num1,num2)=>{
//     console.log(num1+num2);
//  },()=>{
//     console.log("Failed")
//     console.log("Type Error")
//  })

//callback hell--->
//callback ke andr callback yani nested call backs
// const heading1=document.getElementById("heading1")
// const heading2=document.getElementById("heading2")
// const heading3=document.getElementById("heading3")
// const heading4=document.getElementById("heading4")
// const heading5=document.getElementById("heading5")
// const heading6=document.getElementById("heading6")

//callback hell
// setTimeout(()=>{
//     heading1.textContent = "heading no. 1"
//     heading1.style.color="red"
//     setTimeout(()=>{
//         heading2.textContent = "heading no. 2"
//         heading2.style.color="blue"
//         setTimeout(()=>{
//             heading3.textContent = "heading no. 3"
//             heading3.style.color="green"
//             setTimeout(()=>{
//                 heading4.textContent = "heading no. 4"
//                 heading4.style.color="orange"
//                 setTimeout(()=>{
//                     heading5.textContent = "heading no. 5"
//                     heading5.style.color="yellow"
//                     setTimeout(()=>{
//                         heading6.textContent = "heading no. 6"
//                         heading6.style.color="crimson"
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

//the pyramid of doom

//Promise--->rep a future value--->it is ascynchornous task---->yani yeh kaam browser krega
// const bucket=['coffee','salt','vegetable','fruits','rice']

// //produce promise
// const friedRice=new Promise((resolve,reject)=>{ //resolve , reject bhi callback functions hai
//     if(bucket.includes("vegetable") && bucket.includes("rice")){
//         resolve("Fried Rice is ready.");  //resolve function ke andr jo bhejega as a parameter
//     }else{
//         reject(new Error("Not possible"));  //reject fucntion ke andr bhrjrga ek erroe as a parameter
//     }
// })

//how to comsume promise
// friedRice.then(  //agar resolve ho gya to pehla wala function run hoga nae to dusra wala hoga agr reject ho gya
//     //jab promie resolve hoga
//     (value)=>{  //resolve functiom--->parameter value uppr se jaha jaha value pass hua hai resolve me
//         console.log(value)
//     },
//     //jab promise reject hog
//     (error)=>{  //reject function--->parameter error uppr se jaha jaha value pass hua hai reject me
//         console.log(error);
//     }
// )

//either we can handle resolve or reject
// friedRice.then(
//     //jab promie resolve hoga
//     null //-->outptu khali rhega kch nae dega
//     ,
//     //jab promise reject hog
//     (error)=>{  //reject function--->parameter error uppr se jaha jaha value pass hua hai reject me
//         console.log(error);
//     }
// )

//with then we can chain using catch
// friedRice.then(  //agar resolve ho gya to pehla wala function run hoga nae to dusra wala hoga agr reject ho gya
//     //jab promie resolve hoga
//     (value)=>{  //resolve functiom--->parameter value uppr se jaha jaha value pass hua hai resolve me
//         console.log(value)
//     }
// ).catch(
//     //jab promise reject hog
//     (error)=>{  //reject function--->parameter error uppr se jaha jaha value pass hua hai reject me
//         console.log(error);
//     }
// )

//fucntion returning promise
// function friedRicePromise() {
//     const bucket=['coffee','salt','egetable','fruits','rice']
//     return new Promise((resolve, reject) => {
//     //resolve , reject bhi callback functions hai
//     if (bucket.includes("vegetable") && bucket.includes("rice")) {
//       resolve("Fried Rice is ready."); //resolve function ke andr jo bhejega as a parameter
//     } else {
//       reject(new Error("Not possible")); //reject fucntion ke andr bhrjrga ek erroe as a parameter
//     }
//   });
// }

// friedRicePromise().then(  //agar resolve ho gya to pehla wala function run hoga nae to dusra wala hoga agr reject ho gya
//     //jab promie resolve hoga
//     (value)=>{  //resolve functiom--->parameter value uppr se jaha jaha value pass hua hai resolve me
//         console.log(value)
//     }
// ).catch(
//     //jab promise reject hog
//     (error)=>{  //reject function--->parameter error uppr se jaha jaha value pass hua hai reject me
//         console.log(error);
//     }
// )

//promise and setTimeout
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value=true
//         setTimeout(()=>{
//             if(value){
//                 resolve()
//             }else{
//                 reject()
//             }
//         },2000)
//     })
// }

// myPromise()
//     .then(()=>{
//         console.log("Resolved")
//     })
//     .catch(()=>{
//         console.log("Rejected")
//     })

//promise.resolve
// const myPromise=Promise.resolve(5)
// myPromise.then(value=>console.log(value))

//then()
//then method always returns promise
// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         resolve("foo")
//     })
// }

//promise chaining
// myPromise()
//     .then(value=>{
//         console.log(value)
//         value+="bar"
//         return value; //yeh value nae return krra balki yeh ek promise return krre yani --> return Promise.resolve(value)  yeh krra udhr
//     }) //then() thori n string pe lgega?
//     .then(value=>{
//         console.log(value)
//         value+="baaz"
//         return value
//     })
//     .then(value=>{
//         console.log(value)
//     })

//callback hell using promises
// const heading1 = document.getElementById("heading1");
// const heading2 = document.getElementById("heading2");
// const heading3 = document.getElementById("heading3");
// const heading4 = document.getElementById("heading4");
// const heading5 = document.getElementById("heading5");
// const heading6 = document.getElementById("heading6");

// function myPromise(element,text,color,time) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//             resolve()
//         }else{
//             reject("Not Found")
//         }
//     }, time);
//   });
// }

// myPromise(heading1,"One","red",1000)
//     .then(()=>{ //then will also return a promise
//         return myPromise(heading2,"Two","blue",1000)
//     })
//     .then(()=>{
//         return myPromise(heading3,"Three","green",1000)
//     })
//     .then(()=>{
//         return myPromise(heading4,"Four","purple",1000)
//     })
//     .then(()=>{
//         return myPromise(heading5,"Five","yellow",1000)
//     })
//     .then(()=>{
//         return myPromise(heading6,"Six","orange",1000)
//     })
//     .catch((error)=>{  //agar uppr kch error hue aur reject hua to yeh hoga
//         alert(error)
//     })

//AJAX :Asynchornou js and XML

//fetch --->apne aap GET req kr leta hai
// const URL="https://jsonplaceholder.typicode.com/posts"

// const whatItReturns=fetch(URL);  //--->it return a promise
// console.log(whatItReturns)

// fetch(URL) //yeh fecth promise return krega
//     .then(response=>{ //promise se milega response(yeh variable ka name kch bhi ho skta hai) jisme mera kaam ka saman hai
//         return response.json()   //---.json use krke parse hoga ,krne se humlog ko milega ek aur promise return hoga jisme hoga data
//     })
//     .then(data=>{3
//         console.log(data)
//     })
//     .catch(error=>{
//         console.log(error)
//     })

//agar api glt ho ya usme spelling glt ho to? --how to handle error
// const URL="https://jsonplaceholder.typicode.com/postsssss"

// fetch(URL)
//     .then(response=>{
//         if(response.ok){ //fetch krne se jo promise milta hai uska andr yeh "ok" rehta hai agar iska value true hai yani ache se fetch ho gya hai aur agar iska value false hai yani kch error hua hai ya api glt hai
//             return response.json()
//         }else{
//             throw new Error("Something went wrong!!!")
//         }
//     })
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(error=>{ //yeh block tab hi chalega jab koi network error ho, yani agar api glt hai ya spelling misplaced hai to error dega but yeh block me nae aega kch
//         console.log(error)
//     })

//we can also do POST operation--->yani new data add krna
// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL, {
//   method: "POST", //body aur header dena zaruri hai 
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",  //applications/json is imp!!
//   },
// })
//   .then((response) => {
//     if (response.ok) {
//       //fetch krne se jo promise milta hai uska andr yeh "ok" rehta hai agar iska value true hai yani ache se fetch ho gya hai aur agar iska value false hai yani kch error hua hai ya api glt hai
//       return response.json();
//     } else {
//       throw new Error("Something went wrong!!!");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     //yeh block tab hi chalega jab koi network error ho, yani agar api glt hai ya spelling misplaced hai to error dega but yeh block me nae aega kch
//     console.log(error);
//   });



//async await -->yeh sara kaam browser krega background me
// const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getData(){  //fucntion se pehle async likhne se yeh fucntion hmesha return me promise dga
//     const response=await fetch(URL)  //await likhne se fetch se aya hua promise ka resolve hone ka wait krega aur wo resolve hoga kch value ke sath to wo value humlog use kr skte hai
//     const data=await response.json()  //json methodn bhi promise return krta hai --->//same yaha await likhne se wait krega promise resolve hone ka ,koi value ke sath fir wo value use kr skte hai
//     return data //yaha promise return hoga 
// }

// getData() //promise return hua isliye .then() krna para
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(error=>{  //network error hone pe run hoga
//         console.log(error)
//     })



//handling error
//console.log("script start")
// const URL = "https://jsonplaceholder.typicode.com/posts";

// const getData= async() =>{  
//     const response=await fetch(URL)  
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data=await response.json()  
//     return data 
// }

// getData() //promise return hua isliye .then() krna para
//     .then(data=>{
//         console.log(data)
//     })
//     .catch(error=>{  //network error hone pe run hoga
//         console.log(error)
//     })
// console.log("script end")  //yeh pehle run hoga kuki yeh async wla kam to browser krra backgroudn me to baki code run ho jaega js kr dega
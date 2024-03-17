//callback function-->function as an input leke usko call krna

// function myFunc2(name){
//     console.log("Inside myfunc2()");
//     console.log(`My name is ${name}`)
// }

// function myFunc(callback){
//     console.log("Main function");
//     callback("Azil");
// }

// myFunc(myFunc2);


//function returning function

function myFunc(){
    //return "Azil";
    // return {
    //     name:"Azil",
    //     gender:"Male"
    // }

    function hello(){
        console.log("Hello");
    }

    return hello;//returning hello() function
}

const ans=myFunc();
console.log(ans);
ans();//function returning function


//higher order function---> aisa function jo input bhi function lega ya fir return bhi function karega


//default parameters

// function addTwo(a,b){
//     return a+b;
// }

// addTwo(4);//a=4 b=undefined

//lekin agar hum chahte ki b me kch na de to ek defaut value lele b ka

// function addTwo(a,b=0){ //agar b nae dega to b default value lelega
//     return a+b;
// }
// addTwo(4);


//rest parameters (...parameter)-->bht sara parameter isme store ho jaega

// function myFunc(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     console.log(f);//error dega kuki parameter me d ,e,f pass hi nae kiya
// }
// myFunc(3,4,5,6,7,8);

//lekin agar hum chahte hai ki a aur b me fix parameter jae aur c mey baki ka jae to rest parameter ka use krte
// function myFunc(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);//error nhi dega kuki baki parameter c mey chala gya aur array banke print hoga
// }
// myFunc(3,4,5,6,7,8);

function addAll(...nums){
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
    return sum;
}
console.log(addAll(3,4,5,6,9));


//param destrcuturing

//used in objects

const person= {
    name:"Azil",
    gender:"Male"
}

// function printDetails(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
// }

// printDetails(person);


function printDetails({name , gender , age}){ //-->parameter destructing
    console.log(name);
    console.log(gender);
}

printDetails(person);


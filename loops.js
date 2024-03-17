//while loop

//print 0 to 9
// let i=0;
// while(i<=9){ //jabtak i<=9 true hoga tbtk loop chalega
//     console.log(i);
//     i++; //pehle 0 print fir increment
// }

// console.log(`The current value of i is ${i}`);


//for loop

// for(let i=0;i<=9;i++){
//     console.log(i);
// }

//console.log(`The current value of i is ${i}`) //error lekin agar let i ke jagah var i hota to hota print


//break keyword
 
// *break lagane se loop me break ho jaega aur jump karega for loop ka bahar
// for(let i=0;i<=10;i++){
//     if(i===4){
//         break; //i ab 4 hoga jab loop se bahar aa jaega kuki break hai
//     }
//     console.log(i);
// }


//continue

// for(let i=0;i<10;i++){
//     if(i===4){
//         continue; //i=4 ke liye niche ka sara line skip ho jaega aur nxt iteration pe kaam chalega
//     }
//     console.log(i);
// }


//do while loop

let i=10;
do{
    console.log(i);
    i++;
}while(i<=9) //condition false pe bhi print hua kuki do while me pehle kaam hota hai fir condition check hota hai

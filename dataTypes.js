//primitive vs reference data types

//primitive
let num1=6;
let num2=num1;
console.log(num1);
console.log(num2);
num1++;
console.log(num1);//7 value increment hua;
console.log(num2);//6 hi raha

// kuki yeh primituve data type store hota hia stack me to num1 ka value 
// store hua stack me fir waha num2 ka value bana stack me aur usme num1 ka value 
// store ho gya to ab agar num1 ko change krenge to num2 me changes nae hoga kuki
// num2 alag se bana hua hai stack yani memory me jisme num1 ka value hai naki 
// jisme num1 ka refereence hai to dono independtly change hoga kuki num1 alag 
// store hua memory me aur num2 alag. 
//primitive is stored in stack kuki yehlog kam memory leta hai.



//referenced type ---> arrays nd objects nd functions
let array1=["Item1","Item2"];
let array2=array1;
console.log(array1);
console.log(array2);
console.log("After doing changes");
array1.push("Item3");
console.log(array1);
console.log(array2);

//array store hoga heap me aur array1 jo hai wo hai array ka pointer 
//array1 rhega stack me aur array1 ka andr rhega address array ka jo hai heap me
//ab array2=array1 krne se array 2 bhi ek pointer ban jaega aur stack
//me store ho jaega uar array2 ke andr bhi adrees rhega array ka kuki array1
//ke andr array ka address hai fir humlog array2=array1 kiye to array1 mey 
//jo address hai wo array2 mey bhi aa jaega. Yani dono array1 aur array2
//dono pointer ban jaega dono me address hoga array dono array ko point karega
//to agar array1 me push krenge to wo arrayq me jo address hai usme jake changes 
//karega array me...aur array2 ayr array1 dono hi point krra same array ko 
//to agar array1 kch changes krega to wo array2 me bhi dikhega.
//array1 -->["Item1","Item2"] 
//array2 -->["Item1","Item2"] 
//after changes array1.push("item3")
//array1 -->["Item1","Item2","Item3"]
//array2 -->["Item1","Item2","Item3"]

//jitna bhi changes karo ek dusre me visible rhega kuki dono same chiz ko point krra hai.



 const fs = require("fs")
// function square(n){
//     return n * n * n;
// }

// function operation(a,b){
//     return a + b;
// }
// //ans =  operation(1,2,square)
// let ans = operation(square(1),square(2))
// console.log(ans);

let a =1 ;
console.log(a);

fs.readFile("text.txt","utf-8",function after(){
    console.log("read the file");
    console.log(after);
});

let ans = 0;
for(let i=0;i < 1000; i++){
    ans = ans + i;
}
console.log(ans);
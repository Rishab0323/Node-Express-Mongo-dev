// const e = require("express");

// // // map function in js
// let arr = [1,2,3,4,5];

// function transform(i){
//     return i * 2;
// }

// //practise
// function trans(i){
//     return i + i;
// }

// const sum = arr.map(trans);
// console.log(sum);

// const ans = arr.map(transform);
// console.log(ans);


// //filter function in js
// const ans1 = arr.filter(function(n) {
//     if (n % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// const name = arr.filter(function(n) {
//     if (n % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans1);

names = ['rishab','ravi',"java"];
const hell = names.filter((i) => {
    if(i.startsWith("r")){
        return true;
    }
    else{
        return false;
    }
} );

console.log(hell);

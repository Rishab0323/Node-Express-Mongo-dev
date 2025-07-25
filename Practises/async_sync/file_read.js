const fs = require("fs");

fs.readFile("text.txt", "utf-8",(err,res) => {
    console.log(res);
});

let sum = 0;
for(let i =0;i<100000000;i++){
    sum =+ i;
}
console.log(sum);
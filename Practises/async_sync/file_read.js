const fs = require("fs");

fs.readFile("text.txt", "utf-8",(err,res) => {
    console.log(res);
});

let sum = 0;
for(let i =0;i<1000000000;i++){
    a =+ i;
}
console.log(a);
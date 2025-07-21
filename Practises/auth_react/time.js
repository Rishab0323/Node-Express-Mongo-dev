const currentDate = new Date();

// console.log("date is ",currentDate.getDate());
// console.log("current year ",currentDate.getFullYear());
// console.log("Month",currentDate.getMonth());
// console.log("hour",currentDate.getHours());
// console.log("minute is" ,currentDate.getMinutes());
// console.log("second",currentDate.getSeconds());

console.log("time in millisecond since 1970 :",currentDate.getTime());

function calculateDuration(){
    let a = 0;
    for(let i=0;i<100000000;i++){
        a = a + i;
    }
}

let beforeStart = new Date();
let befor = beforeStart.getTime();
calculateDuration();
let afterStart = new Date();
let afte = afterStart.getTime()

let final = afte - befor;
console.log("final time taken is ",final);
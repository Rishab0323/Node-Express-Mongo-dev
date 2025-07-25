const tim = new Date()



function clockTime(){
    let hour = tim.getHours();
    let min = tim.getMinutes();
    let sec = tim.getMinutes();
    console.log(`time in ${hour} : ${min},${sec}`);
}

setTimeout(clockTime,2000);


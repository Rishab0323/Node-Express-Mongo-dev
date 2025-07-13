const express = require("express");
const app = express();

const users =[{
    name : "jhon cena",
    kidney: [{
        healthy :false
    }]
}];

app.get("/",(req,res) => {
    const jhonhealth = users[0].kidney;
    console.log(jhonhealth);
    const numberOfKidney = jhonhealth.length;
    let numberOfHealthyKidney = 0;
    for(let i = 0;i < jhonhealth.length; i++){
        if(jhonhealth[i].healthy){
            numberOfHealthyKidney = numberOfHealthyKidney + 1;
        }
    }
    const numberOfUnhealthyKidney = numberOfKidney -numberOfHealthyKidney;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidney,
    });
});

app.listen(8080,() => {
    console.log("listening to port 8080");
});
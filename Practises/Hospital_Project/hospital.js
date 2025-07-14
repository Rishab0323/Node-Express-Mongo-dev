const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

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

app.post("/kidney",(req,res) => {
    const newKidney = req.body.newKidney;
    users[0].kidney.push({
        healthy:newKidney
    })
    console.log("update user",users[0].kidney);
    res.json({
        msg:"Done !"
    })
});

app.put("/kidney",(req,res) => {
    for(let i = 0;i < users[0].kidney.length;i++){
        users[0].kidney[i] = true;
    }
    res.json({});
})


app.delete("/kidney",(req,res) => {
    const newKidney = [];
    for(let i = 0;i < users[0].kidney.length;i++){
        if (users[0].kidney[i].healthy){
            newKidney.push({
                healthy: true
            })
        }
    }
    users[0].kidney = newKidney;
    res.json({
        msg : "Done with delete"
    })
})
app.listen(8080,() => {
    console.log("listening to port 8080");
});
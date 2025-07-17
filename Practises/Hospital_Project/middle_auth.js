const express = require("express");
const app = express();

app.get("/health-checkup",(req,res) => {
    const username  = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;


    if(username != 'Rishab' || password != 'pass'){
        //above logic other way !(username == 'Rishab' && password == 'pass'  )
        res.status(404).json({
            msg:"wrong credentials 1"
        })
        return;
    }

    if(kidneyId !=1 && kidneyId !=2){
        res.status(404).json({msg : "wrond credentials 2"});
        return;
    }

    res.json({msg : "you appointment is booked for kidney checkup"

    });
});


app.listen(8080,() => {
    console.log("listening to port 8080");
});
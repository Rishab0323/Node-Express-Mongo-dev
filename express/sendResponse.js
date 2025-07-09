const expr = require("express");
const app = expr();

let port = 8080;

app.listen(port,() =>{
    console.log(`listening to port ${port}`);
});

//now we will see how to set path paramneter
app.get("/:username", (req,res) =>{
    console.log(req.params);    //with these lines we can see the parameter send by the user
    res.send("hello this is main page");
});



//the app.use() is used get send resposnse whether it is GET or POST request

//here we created the path for home and file directory using app.get
// app.get("/",(req,res) =>{
//     res.send("now you will get the code..");
// });

// app.get("/file",(req,res) =>{ 
//     res.send("files is getting load");
// });



// this is how we send response using res.send()
// app.use((req ,res) =>{
//     console.log("request revieving....-");
//     res.send("Your response is getting ready...");
// });




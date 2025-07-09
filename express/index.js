const exp = require("express");
const app = exp();

// console.log(app);

let port = 3002;

app.listen(port, ()=> {
    console.log(`app is listening to port ${port}`);
});

//just trying post method from chatgpt help

// app.use(exp.json()); // To parse JSON body

// app.post('/submit', (req, res) => {
//     const name = req.body.name;
//     res.send(`Hello, ${name}! This is a POST request`);
// });


app.use((req,res) => {
    console.log("Request is recieved");
}); 

// app.post((res,req) =>{
//     res.send("I AM SENDING AN POST REQUEST");
// })

app.get("/home",(res,req) =>{
    res.send("I AM SENDING AN GET REQUEST");
})

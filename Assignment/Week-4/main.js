const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

app.use(bodyParser.json());
app.use(express.json());
app.use("/admin",adminRouter)


app.use("/user",userRouter);

const port = 300;
app.listen(port,() =>{
    console.log(`listening to port ${port}`);
})



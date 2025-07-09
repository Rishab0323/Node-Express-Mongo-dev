const express = require("express");
const app = express();

app.use(express.json());

const bookRoutes = require("./routes/books");  //filename we created and routed them for each 
const userRoutes = require("./routes/userRoutes");

app.use("/books",bookRoutes);
app.use("/users",userRoutes);

const port = 3000;

app.listen(port,() =>{
    console.log(`listening to port ${port}...`);
});
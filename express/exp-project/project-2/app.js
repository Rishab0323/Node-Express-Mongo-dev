const express = require("express");
const app = express();

app.use(express.json())//to parse the json file
app.use(express.urlencoded({extended : true}));

//routing 
// const routes = routes.express();//I included this line but it should included in file which we are routing as sub app

const studentRoute = require("./routes/student");

//callin the students.js file
app.use("/studentDetail",studentRoute);

const port = 8080;

app.listen(port, () => {
    console.log(`listening to port ${port}`);
    console.log("This is Student API system ");
});

const express = require("epxress");
const app = express();
const jwt = require("jsonwebtoken");
const jwtpassword = "123456";

const all_users =[
    {
        username : "ramlal@gmail.com",
        password : "1234",
        name : "ramlal bhagat"
    },
    {
        username : "jai@gmail.com",
        password : "122331",
        name : "jai gupta"
    },
    {
        username : "verru@gmail.com",
        password : "12233441",
        name : "verulal"
    }
]

function userExists(username,password){

}

app.post("/signin",(req,res) => {
    const username = req.body;
    const password = req.body;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg : "user does not exist"
        });
    }

    var token = jwt.sign({username: username}, "checkkkk");
    return res.json({
        token,
    });
});

app.get("/users",(req,res) => {
    const token = req.header.authorization;
    try{
        const decoded = jwt.verify(token,jwtpassword);
        const username = decoded.username;
        //return all the list of user other than this username
    }catch(err){
        return res.status(403).json({
            msg : "Invalid token "
        });
    }

});


app.listen(3000 ,() => {
    console.log("server is connected with 3000")
})
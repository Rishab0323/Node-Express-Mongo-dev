const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

let getRandomUser = () => {
  return [ 
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password()
     
];
}


const connection = mysql.createConnection ({
    host : 'localhost',
    user : 'root',
    database : 'backend',
    password : 'rishab061'
});


//we can write sql query in a variable and then pass, the variable
// let q = create tables follower        

// let q = "insert into user(id,username,email,password) values ? ";

// let data = [];
// for(let i=1;i<10;i++){
//   data.push(getRandomUser());
// }

// try { 
//   connection.query(q,[data], (err,result) => {   //here we can give the variable instead of shiow table
//   if (err) throw err;
//   console.log(result);
// });
// } catch (err){
//     console.log(err);
// }

// connection.end();
// console.log(getRandomUser());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


app.get("/", (req,res) => {
  let q = `select count(*) from user`;
  try { 
  connection.query(q, (err,result) => {   //here we can give the variable instead of shiow table
  if (err) throw err;
  let count = result[0]["count(*)"];
  res.render("home.ejs",{count});
});
} catch (err){
    console.log(err);
    res.send("some error in DB");
}
});


//show route
app.get("/user",(req,res) => {
  let q = `select * from user`;
  try { 
  connection.query(q, (err,result) => {   //here we can give the variable instead of shiow table
  if (err) throw err;
  // console.log(result);
  res.render("show_user.ejs",{result});
});
} catch (err){
    console.log(err);
    res.send("some error in DB");
}
  // res.send("succesfully connected");
});

// app.get("")

app.listen(8080,() => {
  console.log("listening to port 8080");
});
const mongoose = require("mongoose");

main().
then(() => {
    console.log("connection sucessfull");
})
.catch((err) => console.log(err) );

async function main(){ 
    mongoose.connect("mongodb://127.0.0.1:27017/school");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number 
});

const User = mongoose.model("User",userSchema);

// const user2 = new User({
//     name: "ramlal",
//     email: "ramlal@mail.com",
//     age: 50
// });

// // user1.save();

// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


User.insertMany([
    {name : "Sony",email :"tony@mail.com",age:19},
    {name : "raven",email :"crow@mail.com",age:21}, 
    {name : "RR",email :"rrr@mail.com",age:22}

]).then((res) => {
    console.log(res);
});
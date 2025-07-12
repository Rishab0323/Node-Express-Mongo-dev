const mongoose = require("mongoose");

main().then(() => {
    console.log("connection successfully");
})
.catch((err) => {
    console.log(err);
});

async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/library");
}

//created schema
const bookSchema = new mongoose.Schema({
    title :
    {type: String,
     required: true
    },
    author:{
        type: String,
    },
    price:{
        type: Number
    }
});
// created model
const book = mongoose.model("book",bookSchema);

// inserting values
book.insertMany([
    { title:"the Crude", author: "Hbo", price: 599},
    { title:"the squirrel", author: "indira devi", price: 799}
]).then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

// update 
book.findOneAndUpdate({author: "Hbo"}, {price: 999},{new: true}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});

book.findByIdAndDelete("686c0ab249f309fc415d2cc0")
.then((res) => {
    console.log(" field deleted",res);
})
.catch((err) => {
    console.log(err);
})
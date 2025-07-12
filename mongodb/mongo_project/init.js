const mongoose = require("mongoose");
const chat = require("./model/chat.js");

main().then(() => {
    console.log("database Connected Successfully");
})
.catch((err) => {
    console.log("failed conenction",err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

chat.insertMany([
    {
        from: "nirahua",
    to: "neha",
    msg:"nirahua rikshawala",
    created_at: new Date()
    },
    {
        from: "neha",
    to: "nirahua",
    msg:"neha rikshawala",
    created_at: new Date()
    },
    {
        from: "rajiv gandhi ",
    to: "rahul gandhi",
    msg: "atleast win the election papu",
    created_at: new Date()
    },
    {
    from: "spider",
    to: "spiderman",
    msg:"that my power return it back",
    created_at: new Date()
    },
    {
    from: "darshan ",
    to: "ravi",
    msg:"darshan you are GOAT ",
    created_at: new Date()
    },
    
]).then((res) => {
    console.log(res);
})
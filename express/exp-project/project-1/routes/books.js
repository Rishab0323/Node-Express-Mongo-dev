const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/",(req,res) =>{
    res.send("Welcome ,we have vast collections of books for everyone");
});

router.get("/:id",(req,res) =>{
    const bookid = req.params.id;
    res.send(`thank you we have this book with ID ${bookid} `);
});

module.exports = router;

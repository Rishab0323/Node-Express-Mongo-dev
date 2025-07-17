const express = require("express");
const app = express();
const zod = require("zod");

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup",() => {
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney);
    res.send({response});
})

app.listen(3000,() => {
    console.log("sever is listening"); 
})
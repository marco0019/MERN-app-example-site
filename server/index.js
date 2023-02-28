const express = require("express");
const cors = require("cors");
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient("mongodb+srv://marco0019:ReactApp@reactapp.oaqygxf.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("food");
    // perform actions on the collection object
    client.close();
});
app.use(express.json())
app.use(cors())

app.post("/insert", async (req, res) => {
    try {
        await client.db("Test").collection("food").insertOne({ foodName: req.body.foodName, daysSinceIAte: req.body.days });
        res.send("the data has been sent!")
    } catch (err) {
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log("Server start on port 3001...");
})
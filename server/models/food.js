const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true
    },
    daysSinceIAte: {
        type: String,
        required: true
    }
})
const food = mongoose.model("food", schema);
module.exports = food
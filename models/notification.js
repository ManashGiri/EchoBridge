const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const msgSchema = new Schema({
    message: String,
    recipient: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
    sender: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },
    createdAt: { type: Date, default: Date.now },
});



module.exports = mongoose.model("Notification", msgSchema);
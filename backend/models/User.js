const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    interest: { type: [String], required: true },
    age: { type: Number, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);

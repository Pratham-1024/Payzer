const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://pratham1024:Pratham%401024@cluster1024.ef46biv.mongodb.net/Payzer-App")

const userSchema = mongoose.Schema({
    // username: String,
    // password: String,
    // firstName: String,
    // lastName: String

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User= mongoose.model('Users', userSchema);

module.exports = {
    User 
}
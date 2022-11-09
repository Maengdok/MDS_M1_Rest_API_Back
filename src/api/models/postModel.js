const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);
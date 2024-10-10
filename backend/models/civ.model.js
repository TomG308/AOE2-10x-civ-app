import mongoose from "mongoose";

const civSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
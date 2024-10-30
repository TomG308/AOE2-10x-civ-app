import mongoose from "mongoose";

const CivSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
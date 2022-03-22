import mongoose, { Schema } from "mongoose";

const Categories = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true,
        index: true
    }
})
export default Categories;
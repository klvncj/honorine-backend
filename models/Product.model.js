const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:['Product name is required'],
    },
    description:{
        type:String,
        required:['Description is required']
    },
    image:{
        type:String,
        required:['Image is required'],
    },
    category:{
        type:String,
        required:['Category is required'],
    },
    price:{
        type:Number,
        required:['Price is required'],
    },
    available:{
        type:Boolean,
        default:true,
    },
    sale:{
        type:Boolean,
        default:false,
    },
},{timestamps : true})

const productModel = mongoose.model("Product", ProductSchema)
module.exports =  productModel
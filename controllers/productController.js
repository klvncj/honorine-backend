const productModel = require('../models/Product.model');
const ProductModel = require('../models/Product.model')

exports.createProduct = async (req , res) =>{
    try {
        const {name , description ,image , category , price ,available,sale } = req.body
        const product = await ProductModel.create({name , description ,image , category , price ,available,sale })
        res.status(201).json({ product });
    } catch (error) {
        res.status(500).json({ error })
    }
}


exports.getProducts = async (req, res) => {
    try {
        const product = await productModel.find({});
        res.status(200).json({ data: product })
    } catch (error) {
        res.status(500).json({ error })
    }
}
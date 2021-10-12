const productModel = require('../models/productModel')

const getAllProducts =async  (req,res,next) => {
    try{

    const products =await productModel.find({})
    res.send({message:"products displayed",success:true,products:products})
    }catch(error){
        res.json({message:"error",success:false})
    }
}

const getProductById =async  (req,res,next) => {
    try{

    const product = await productModel.findById(req.params.id)
    res.send({message:"one product displayed",success:true,product:product})
    }catch(error){
        res.json({message:"error",success:false})
    }
}

const createNewProduct =async  (req,res,next) => {
    try{
        const {title, description,price,image} = req.body
    const newProduct = await productModel.create({title:title,description:description,price:price,image:image})
    res.send({message:"one product created",success:true,product:newProduct})
    }catch(error){
        res.json({message:"error",success:false})
    }
}

const editProduct =async  (req,res,next) => {
    try{
        const {title, description,price,image} = req.body
    const editedProduct = await productModel.findByIdAndUpdate(req.params.id,{title:title,description:description,price:price,image:image})

    if(!editedProduct) {
        res.json({message:"product details not exists"})
    }
    res.send({message:"product edited!",success:true,product:editedProduct})
    }catch(error){
        res.json({message:"error",success:false})
    }
}

const deleteProduct =async  (req,res,next) => {
    try{
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id)

    if(!deletedProduct) {
        res.json({message:"product details not exists"})
    }
    res.send({message:"product deleted!",success:true,product:product})
    }catch(error){
        res.json({message:"error",success:false})
    }
}

const product = {getAllProducts,getProductById,createNewProduct,editProduct,deleteProduct}
module.exports = product;
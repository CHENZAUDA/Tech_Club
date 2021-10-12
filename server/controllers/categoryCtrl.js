const CategoryModel = require('../models/categoryModel')

const newCategory = async (req, res) => {
    try{
        await CategoryModel.insertMany([req.body],(err,result)=>{
            console.log(req.body)
            if (err) throw err
            res
            .status(201)
            .json({
                success:true,
                message:"create new category",
                data: result
            })
        })
     
    }
    catch(err){
        res
        .status(201)
        .json({
            success:false,
            message:"failed create new category ",
            error: err.message
        })
    }
}

module.exports ={newCategory}
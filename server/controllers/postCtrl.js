const PostModel = require('../models/postModel')
const UserModel = require('../models/userModel')


const post = async (req, res) => {
    try {
        await PostModel.insertMany([req.body],(err,result)=>{
            if(err)throw err
            console.log(result);
            res
            .status(201)
            .json({
                success: true,
                message: "create new post",
                data: result
            })
        })
        // const user = await UserModel.findById(req.body.id)
        // const { forumName, subName, title, message, stars, likes } = req.body
        // const newPost = new PostModel({
        //     forumName: forumName,
        //     subName: subName,
        //     title: title,
        //     message: message,
        //     stars: stars,
        //     likes: likes,
        //     createBy:user._id
        // });
        // await newPost.save();
        // user.posts.push(newPost)
        // await user.save();
        // res
        // .status(201)
        // .json({
        //     success: true,
        //     message: "create new post",
        //     data: newPost
        // })
    }
    catch (err) {
        res
        .status(400)
        .json({
          success: false,
          message: "failed create post",
          error: err.message
        });
    }
}


module.exports = { post }
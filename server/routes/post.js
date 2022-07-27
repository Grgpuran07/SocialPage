const express = require("express")
const { default: mongoose } = require("mongoose")
const router = express.Router()
const requiredLogin = require("../middlewares/requiredLogin")
const Post = mongoose.model("Post")

router.get("/allpost",(req,res)=>{
    Post.find().populate("postedBy","_id name")
    .then((posts)=>{
        res.status(200).json({posts})
    }).catch((err)=>{
        console.log(err)
    })
})

router.post("/createpost",requiredLogin,(req,res)=>{
    const {title,bodycontent,pic} = req.body

    if(!title || !bodycontent || !pic){
        return res.status(422).json({error:"Please add all the files."})
    }

    // console.log(req.user)
    // res.send("Ok")
    req.user.password = undefined

    const post = new Post({
        title,
        bodycontent,
        photo:pic,
        postedBy:req.user
    })

    post.save().then((result)=>{
        res.json({post:result})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get("/mypost",requiredLogin,(req,res)=>{
    Post.find({postedBy:req.user._id}).populate("postedBy","name _id")
    .then((myposts)=>{
        res.status(200).json({myposts})
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router
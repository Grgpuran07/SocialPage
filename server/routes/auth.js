const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const {JWTSECRET} = require("../keys")
const jwt = require("jsonwebtoken")
const requireLogin = require("../middlewares/requiredLogin")

// router.get('/protected',requireLogin,(req,res)=>{
//     res.send("Hello user")
// })

router.get("/",(req,res)=>{
    res.send("Hello from using router")
})

router.post("/signup",(req,res)=>{
    // console.log(req.body.name)
    const {name,email,password} = req.body
    if(!email || !password || !name){
        return res.status(400).json({error:"Please fill all the inputs."})
    }

    User.findOne({email:email}).then((savedUser)=>{
        if(savedUser){
            return res.status(400).json({message:"User already exist with this email."})
        }

       bcrypt.hash(password,12).then((hashedpassword)=>{
        const user = new User({
            email,
            password:hashedpassword,
            name
        })

        user.save().then((user)=>{
            res.status(200).json({message:"User signed up sucessfully."})
        }).catch((err)=>{
            console.log(err)
        })

       })

    }).catch((err)=>{
        console.log(err)
    })
})

router.post("/signin",(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"Please enter email and password."})
    }

    User.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(404).json({error:"Email doesn't exist please signup first."})
        }

        bcrypt.compare(password,savedUser.password).then((doMatch)=>{
            if(doMatch){
                // return res.status(200).json({message:"Signed in sucessfully."})
                const token = jwt.sign({_id:savedUser._id},JWTSECRET)
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
            }else{
                return res.status(404).json({error:"Invalid email and password."})
            }
        })
    }).then((err)=>{
        console.log(err)
    })
})
module.exports = router
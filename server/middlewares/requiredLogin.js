const jwt = require("jsonwebtoken")
const {JWTSECRET} = require("../keys")
const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = (req,res,next) =>{
    const {authorization} = req.headers
    // authorization will be in this format Bearer babababaskbfksjfafnkjas

    if(!authorization){
        return res.status(404).json({error:"You must be logged in."})
    }

    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWTSECRET,(err,payload)=>{
        if(err){
            return res.status(400).json({error:"You must logged in."})
        }

        const {_id} = payload
        User.findById(_id).then((userdata)=>{
            req.user = userdata
            next()
        })

        // next()
    })
}
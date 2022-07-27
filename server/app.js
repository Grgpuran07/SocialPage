const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose")
const {MONGOURI} = require("./keys")
// const cors = require("cors")


require("./models/user")
require("./models/post")
// app.use(cors)

app.use(express.json())

app.use(require("./routes/auth"))
app.use(require("./routes/post"))
// app.use(express.json())

// middleware are the function that takes incoming request and modifies it before it reaches to actual route handler

mongoose.connect(MONGOURI).then(()=>console.log("Connection sucessfull.")).catch((err)=>{
    console.log("Connection unsucessfull.")
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port:${PORT}`)
})
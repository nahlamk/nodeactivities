const express=require("express")
const router = require("./Router/TestRouter")


const app=express()
app.use(express.json())
app.use("/",router)

port=5500
app.listen(port,console.log(`server is running on ${port}`))
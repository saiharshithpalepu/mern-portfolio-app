const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const path=require("path")

const app=express()

//dotenv configuration
dotenv.config()

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname,'./client/build')))

app.use('/api/v1/portfolio',require("./routes/portfolioRoute"))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
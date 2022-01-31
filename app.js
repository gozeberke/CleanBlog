const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    const blog={
        name:"CleanBlog",
        description: "CleanBlog Description",
    }
    res.send(blog)
})

const port=3000
app.listen(port,()=>{
    console.log(`Server is running ${port} port`)
})
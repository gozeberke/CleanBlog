const express=require('express')
const mongoose=require('mongoose')
const ejs=require('ejs')

const Blog=require('./model/Blog')
const app=express()

//connect mongosb
mongoose.connect('mongodb://localhost/blog-db')

//TEMPLATE ENGİNE
app.set('view engine','ejs')


// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//ROUTES
app.get('/',async(req,res)=>{
   const blogs=await Blog.find({})
   res.render('index',{
      blogs:blogs
   })
})
app.get('/blogs/:id',async(req,res)=>{
   const blog=await Blog.findById(req.params.id)
   res.render('post',{
      blog:blog
   })
})
app.get('/about',(req,res)=>{
    res.render('about')
 })
 app.get('/add',(req,res)=>{
    res.render('add_post')
 })
 app.post('/posts',async(req,res)=>{
   await Blog.create(req.body)
   res.redirect('/')
 })

const port=3000
app.listen(port,()=>{
    console.log(`Server is running ${port} port`)
})
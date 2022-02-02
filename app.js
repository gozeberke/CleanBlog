const express=require('express')
const mongoose=require('mongoose')
const ejs=require('ejs')
const methodOverride = require('method-override')
const blogController=require('./controller/BlogController')
const pageController=require('./controller/PageController')

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
app.use(methodOverride('_method',
{methods:['POST','GET']})
)


//ROUTES
app.post('/posts',blogController.createBlog)
app.get('/',blogController.getBlogs)
app.get('/blogs/:id',blogController.getSingleBlog)
app.put('/blogs/:id',blogController.updateBlog)
app.delete('/blogs/:id',blogController.deleteBlog)
app.get('/blogs/edit/:id',pageController.editBlog)
app.get('/about',pageController.aboutPage)
app.get('/add',pageController.addPage)

 

const port=3000
app.listen(port,()=>{
    console.log(`Server is running ${port} port`)
})
const express=require('express')
const ejs=require('ejs')
const app=express()

//TEMPLATE ENGİNE
app.set('view engine','ejs')


// MIDDLEWARE
app.use(express.static('public'))


//ROUTES
app.get('/',(req,res)=>{
   res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
 })
 app.get('/add',(req,res)=>{
    res.render('add_post')
 })

const port=3000
app.listen(port,()=>{
    console.log(`Server is running ${port} port`)
})
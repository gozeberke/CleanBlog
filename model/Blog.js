const mongoose=require('mongoose')
const Schema=mongoose.Schema


//creat schme
const BlogSchema=new Schema({
    title:String,
    detail:String,
    dateCreated:{
        type:Date,
        default:Date.now
    }

})
const Blog=mongoose.model('Blog',BlogSchema)


module.exports=Blog

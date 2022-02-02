const Blog = require('../model/Blog');

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort('-dateCreated');
  res.render('index', {
    blogs: blogs,
  });
};
exports.getSingleBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render('post', {
    blog: blog,
  });
};

exports.updateBlog = async (req, res) => {
  const blogs = await Blog.findOne({ _id: req.params.id });
  blogs.title = req.body.title;
  blogs.detail = req.body.detail;
  blogs.save();
  res.redirect(`/blogs/${req.params.id}`);
};
exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.redirect('/');
};

exports.createBlog = async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/');
};

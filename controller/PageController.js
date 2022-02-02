const Blog = require('../model/Blog');

exports.editBlog = async (req, res) => {
  const blogs = await Blog.findOne({ _id: req.params.id });
  res.render('edit', { blogs });
};

exports.aboutPage = (req, res) => {
  res.render('about');
};

exports.addPage = (req, res) => {
  res.render('add_post');
};

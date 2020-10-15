const express = require('express');
const router = express.Router();
const HomeAction = require('../actions/home.action');
const BlogAction = require('../actions/blog.action');


/* GET home page. */
router.get('/', async function (req, res, next) {

    try {

        const contact_info = HomeAction.findContactInfo();
        const {blog_id, page} = req.query;
        const comment_list = await BlogAction.findCommentListWithBlog((page - 1) * 30, blog_id);
        const blog = await BlogAction.findBlogDetail(blog_id);
        console.log(blog);
        res.render('blog/root.ejs', {
            title: blog.title,
            blog, comment_list, contact_info
        });
    } catch (e) {
        next(e);
    }

});
module.exports = router;

const express = require('express');
const router = express.Router();
const HomeAction = require('../actions/home.action');
const BlogAction = require('../actions/blog.action');

const emailRouter = require('./email.route');
const blogRouter = require('./blog.route');

/* GET home page. */
router.get('/', async function (req, res, next) {

    const contact_info = HomeAction.findContactInfo();
    const about_info = HomeAction.findAboutMeInfo();
    const resume_info = HomeAction.findResumeInfo();
    const portfolio_info = HomeAction.findPortfolioInfo();

    const {page} = req.query;

    const blog_list = await BlogAction.findBlogList(((page || 1) - 1) * 30);

    res.render('index/root.ejs',
        {
            title: 'Binny Web Resume',
            contact_info,
            about_info,
            resume_info,
            portfolio_info,
            blog_list
        }
    );
});

router.use('/email', emailRouter);
router.use('/blog', blogRouter);

module.exports = router;
